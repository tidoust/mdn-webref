import webref from '@webref/css';
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


/************************************************************
 * Categorize Webref data following the same structure as
 * MDN data
 ***********************************************************/
const parsedFiles = await webref.listAll();
for (const [shortname, data] of Object.entries(parsedFiles)) {
  // Same categorization in Webref and MDN data for at-rules, properties,
  // and selectors.
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

  for (const cat of ['atrules', 'properties', 'selectors', 'values']) {
    for (const feature of data[cat]) {
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


/************************************************************
 * Identify gaps
 ***********************************************************/
const missing = {
  webref: {},
  mdn: {}
};

for (const category of Object.keys(categorized)) {
  missing.webref[category] = [];
  missing.mdn[category] = [];
}

for (const category of Object.keys(categorized)) {
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

for (const category of Object.keys(categorized)) {
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
let report = ['# Gap analysis between MDN data and Webref'];
report.push('');
report.push(`Generated on **${new Date().toISOString()}** using **v${mdnPackage.version}** of MDN data and **v${webrefPackage.version}** of \`@webref/css\`.`);
report.push('');
for (const source of ['webref', 'mdn']) {
  report.push(`### Missing from ${source}`);
  for (const category of Object.keys(categorized)) {
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
 * A few helper functions to help with reporting
 ***********************************************************/
function reportFeatures(features) {
  return features.map(reportFeature).join('\n');
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