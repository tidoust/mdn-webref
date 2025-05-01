import cssInWebref from '@webref/css';
import mdn from 'mdn-data';
import { writeFile } from 'node:fs/promises';
import webrefPackage from '@webref/css/package.json' with { type: 'json' };
import mdnPackage from 'mdn-data/package.json' with { type: 'json' };

/**
 * MDN data wants to list CSS units. They are not defined as such in CSS specs
 * but can be easily computed by looking at the list of values that are defined
 * for the restricted set of CSS types defined here.
 */
const unitTypes = [
  '<angle>',
  '<flex>',
  '<length>',
  '<frequency>',
  '<resolution>',
  '<time>'
];

/**
 * Webref data is per spec. Goal is to create the same view as in MDN data.
 */
const categorized = {
  atRules: [],
  functions: [],
  properties: [],
  selectors: [],
  syntaxes: [],
  types: [],
  units: []
};
const categories = Object.keys(categorized);
const categoriesWithSyntax = categories.filter(c => c !== 'units');
const webrefCategories = ['atrules', 'properties', 'selectors', 'values'];


/************************************************************
 * Categorize Webref data following the same structure as
 * MDN data
 ***********************************************************/
const parsedFiles = await cssInWebref.listAll();
for (const [shortname, data] of Object.entries(parsedFiles)) {
  // Same categorization in Webref and MDN data for at-rules, properties,
  // and selectors.
  decorateDataWithShortname(data, shortname);

  categorized.atRules.push(...data.atrules);
  categorized.properties.push(...data.properties);
  categorized.selectors.push(...data.selectors);

  // Then MDN data categorizes CSS features into functions, syntaxes, types and
  // units, without making a distinction between features that are scoped to
  // another feature and those that are more general.
  // Webref data stores "functions" and "types" definitions under a `values`
  // key. The root `values` key contains unscoped definitions. Individual
  // features may also have a `values` key with scoped definitions.
  categorized.functions.push(...data.values.filter(v => v.type === 'function'));
  categorized.types.push(...data.values.filter(v => v.type === 'type'));

  for (const category of webrefCategories) {
    for (const feature of data[category]) {
      if (feature.values) {
        const values = feature.values
          .map(v => Object.assign({ for: feature.name }, v));
        categorized.functions.push(
          ...values.filter(v => v.type === 'function'));
        categorized.types.push(
          ...values.filter(v => v.type === 'type'));
      }
    }
  }
}

// I'm not fully clear what syntaxes are supposed to be.
// They seem to be the union of all functions and types.
categorized.syntaxes.push(...categorized.functions);
categorized.syntaxes.push(...categorized.types);

// Units are not defined as such in CSS. They are the possible values of a
// restricted number of types in practice.
for (const type of categorized.types) {
  if (unitTypes.includes(type.name)) {
    categorized.units.push(...type.values);
  }
}

// Some specs extend properties defined in another spec
// Let's merge syntax values in Webref so that we may compare with MDN
const propertyDfns = {};
for (const property of categorized.properties) {
  if (!propertyDfns[property.name]) {
    propertyDfns[property.name] = [];
  }
  propertyDfns[property.name].push(property);
}

categorized.properties = Object.entries(propertyDfns)
  .map(([name, dfns]) => {
    if (dfns.length === 1) {
      return dfns[0];
    }
    // Best base definition is one that is defined with some syntax value in
    // the "current" spec in a series. If there's none, we'll just take the
    // first one that defines a value. If not, we'll surrender and use the
    // first definition that does not look like an extension.
    let baseDfn = dfns.find(dfn => dfn.value && dfn.spec.currentSpec) ||
      dfns.find(dfn => dfn.value) ||
      dfns.find(dfn => !dfn.newValues);
    if (!baseDfn.value) {
      return baseDfn;
    }
    for (const dfn of dfns) {
      if (dfn.newValues) {
        baseDfn.value += ' | ' + dfn.newValues;
      }
    }
    return baseDfn;
  });

// For all other types of features, if a feature appears more than once,
// only keep definitions in "current" specs
for (const category of categories) {
  if (category === 'properties') {
    continue;
  }
  const featureDfns = {};
  for (const feature of categorized[category]) {
    let featureName = feature.name;
    if (feature.for) {
      featureName += ' for ' + feature.for;
    }
    if (!featureDfns[featureName]) {
      featureDfns[featureName] = [];
    }
    featureDfns[featureName].push(feature);
  }

  categorized[category] = Object.entries(featureDfns)
    .map(([name, dfns]) => {
      if (dfns.length === 1) {
        return dfns[0];
      }
      const currentDfns = dfns.filter(dfn => dfn.value && dfn.spec.currentSpec);
      if (currentDfns.length === 0) {
        return dfns[0];
      }
      return currentDfns
    })
    .flat();
}


/************************************************************
 * Identify gaps
 ***********************************************************/
const missing = {
  webref: {},
  mdn: {}
};

for (const category of categories) {
  missing.webref[category] = [];
  missing.mdn[category] = [];
}

for (const category of categories) {
  for (const feature of categorized[category]) {
    const featureName = feature.name.match(/^<(.+?)>$/) ?
      feature.name.replace(/^<(.+?)>$/, '$1') :
      feature.name;
    if (!mdn.css[category][featureName]) {
      missing.mdn[category].push({
        name: feature.name,
        href: feature.href,
        for: feature.for
      });
    }
  }
}

for (const category of categories) {
  for (const featureName of Object.keys(mdn.css[category])) {
    if (!categorized[category].find(feature =>
        feature.name === featureName ||
        feature.name === '<' + featureName + '>')) {
      missing.webref[category].push({
        name: featureName,
        href: mdn.css[category][featureName].mdn_url
      });
    }
  }
}


/************************************************************
 * Identify syntax mismatches for entries that are in common
 *
 * TODO: For at-rules, merge similar entries, there should be
 * one base one, and others that define additional descriptors
 * TODO: For at-rules, compute syntax based on the list of
 * descriptors
 ***********************************************************/
const nbInCommon = {};
const mismatches = {};
for (const category of categoriesWithSyntax) {
  mismatches[category] = [];
  nbInCommon[category] = 0;
}

for (const category of categoriesWithSyntax) {
  for (const feature of categorized[category]) {
    const featureName = feature.name.match(/^<(.+?)>$/) ?
      feature.name.replace(/^<(.+?)>$/, '$1') :
      feature.name;
    const mdnFeature = mdn.css[category][featureName];
    if (!mdnFeature) {
      continue;
    }
    nbInCommon[category] += 1;

    // TODO: in Webref, the syntax of the selector should be set to
    // the selector's name in the absence of any other syntax
    let webrefSyntax = feature.value;
    if (!webrefSyntax && category === 'selectors') {
      webrefSyntax = feature.name;
    }

    // Note: the syntax of types is stored under syntaxes in MDN data
    let mdnSyntax = mdnFeature.syntax;
    if (category === 'types') {
      const syntaxEntry = mdn.css.syntaxes[featureName];
      if (syntaxEntry) {
        mdnSyntax = syntaxEntry.syntax;
      }
    }

    if (normalizeSyntax(webrefSyntax) !== normalizeSyntax(mdnSyntax)) {
      mismatches[category].push({
        name: feature.name,
        href: feature.href,
        for: feature.for,
        webref: feature.value,
        mdn: mdnSyntax,
        spec: feature.spec
      });
    }
  }
}


/************************************************************
 * Save categorized Webref data
 ***********************************************************/
await writeFile(
  'webref.json',
  JSON.stringify(categorized, null, 2),
  'utf8'
);


/************************************************************
 * Write gap report
 ***********************************************************/
const generated = `Generated on **${new Date().toISOString()}** using **v${mdnPackage.version}** of MDN data and **v${webrefPackage.version}** of \`@webref/css\`.`;
let report = ['# Gap analysis between MDN data and Webref'];
report.push('');
report.push(generated);
report.push('');
for (const source of ['webref', 'mdn']) {
  report.push(`### Missing from ${source}`);
  for (const category of categories) {
    const nb = missing[source][category].length;
    if (nb > 0) {
      report.push(`
<details>
<summary>${nb} ${getCatName(category, nb)} missing from ${source}</summary>

${reportFeatures(missing[source][category])}
</details>
`);
    }
  }
}

await writeFile('report.md', report.join('\n'), 'utf8');


/************************************************************
 * Write syntax mismatches report
 ***********************************************************/
report = ['# Syntax mismatches between MDN data and Webref'];
report.push('');
report.push(generated);
report.push('');
for (const category of Object.keys(mismatches)) {
  const nb = mismatches[category].length;
  if (nb > 0) {
    report.push(`
<details>
<summary>${nb} ${getCatName(category, 2)} mismatches (out of ${nbInCommon[category]} ${getCatName(category, 2)} in common)</summary>

${reportMismatches(mismatches[category])}
</details>
`);
  }
}

await writeFile('report-syntax.md', report.join('\n'), 'utf8');



/************************************************************
 * A few helper functions
 ***********************************************************/
function reportFeatures(features) {
  return features
    .sort((f1, f2) => f1.name.localeCompare(f2.name))
    .map(reportFeature)
    .join('\n');
}

function reportFeature(feature) {
  let res = '`' + feature.name + '`';
  if (feature.href) {
    res = `[${res}](${feature.href})`;
  }
  if (feature.for) {
    res += ' for `' + feature.for + '`';
  }
  return `- ${res}`;
}

function getCatName(category, nb) {
  const s = nb > 1 ? 's' : '';
  if (category === 'atRules') {
    return `at-rule${s}`;
  }
  if (nb > 1) {
    return category;
  }
  if (category === 'properties') {
    return `property`;
  }
  if (category === 'syntaxes') {
    return `syntax`;
  }
  return category.substring(0, category.length-1);
}

function reportMismatches(features) {
  return features
    .sort((f1, f2) => f1.name.localeCompare(f2.name))
    .map(reportMismatch)
    .join('\n');
}

function reportMismatch(feature) {
  let res = reportFeature(feature);
  res += '\n```\n';
  for (const source of ['webref', 'mdn']) {
    res += source + ': ';
    if (source === 'mdn') {
      res += '   ';
    }
    res += feature[source] ?? 'unknown syntax';
    res += '\n';
  }
  res += '```';
  return res;
}

/**
 * Webref and MDN may format syntaxes differently, drop non significant
 * changes
 */
function normalizeSyntax(syntax) {
  return (syntax ?? '')
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/\[ /g, '[')
    .replace(/ \]/g, ']')
    .replace(/\( /g, '(')
    .replace(/ \)/g, ')')
    .replace(/^\[\s*(.*?)\s*\]$/, '$1');
}

/**
 * Decorate all CSS features in the extract with the spec's shortname and
 * a flag that signals whether the spec is the current one in the series
 */
function decorateDataWithShortname(data, shortname) {
  const spec = {
    shortname: shortname,
    currentSpec: !shortname.match(/-\d+$/)
  };

  for (const category of webrefCategories) {
    for (const feature of data[category]) {
      feature.spec = spec;
      for (const value of feature.values ?? []) {
        value.spec = spec;
      }
    }
  }
}