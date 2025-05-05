/************************************************************
 * The script compares CSS data in Webref, MDN data, and
 * CSSTree patches, and creates reports out of the comparison
 * to identify gaps and mismatches.
 *
 * The script:
 * 1. Merges Webref data to get a structure that matches that
 * in MDN data.
 * 2. Removes duplicates from the resulting data
 * 3. Completes the syntax of a few constructs where possible
 * 4. Looks for gaps in Webref compared to MDN data and in
 * MDN data compared to Webref
 * 5. Looks for syntax mismatches between MDN data and Webref
 * 6. Compiles the list of constructs in Webref that are
 * "dangling" (not referenced by any other construct)
 * 7. Compiles the list of constructs in Webref that do not
 * have any known syntax
 * 8. Compares the list of patches in CSSTree with the syntax
 * known in Webref and report on syntaxes that are missing in
 * Webref, syntaxes that are different in Webref, and patches
 * that could probably be dropped because Webref has the
 * right syntax already.
 *
 * To run the script:
 *   node main.mjs
 *
 * This will create/update the webref.json file, which is the
 * resulting structure of steps 1 to 3 above, and a few
 * report files in Markdown.
 ***********************************************************/

import cssInWebref from '@webref/css';
import mdn from 'mdn-data';
import { writeFile } from 'node:fs/promises';
import webrefPackage from '@webref/css/package.json' with { type: 'json' };
import mdnPackage from 'mdn-data/package.json' with { type: 'json' };
import csstreePatches from './node_modules/css-tree/data/patch.json' with { type: 'json' };

/**
 * MDN data wants to list CSS units. They are not defined as such in CSS specs
 * but can easily be computed by looking at the list of values that are defined
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
 * MDN data.
 ***********************************************************/
const parsedFiles = await cssInWebref.listAll();
for (const [shortname, data] of Object.entries(parsedFiles)) {
  // We're going to merge features across specs,
  // save the link back to individual specs
  decorateFeaturesWithSpec(data, shortname);

  // Same categorization in Webref and MDN data for at-rules, properties,
  // and selectors.
  categorized.atRules.push(...data.atrules);
  categorized.properties.push(...data.properties);
  categorized.selectors.push(...data.selectors);

  // Then MDN data categorizes CSS features into functions, types and units,
  // without making a distinction between features that are scoped to another
  // feature and those that are more general.
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


/************************************************************
 * Consolidate categorized data to avoid duplicate features.
 *
 * MDN data only has one definition for each feature but
 * Webref may have multiple definitions of a given feature.
 * This happens when:
 * - A feature is defined in one level of a spec series, and
 * re-defined in a subsequent level.
 * - A property is defined in one spec, and extended in other
 * specs, including possibly in later levels in the series.
 * This is recorded in Webref through the `newValues` key.
 * (Note Webref guarantees that there is a base definition)
 * - An at-rule is defined in one spec, additional
 * descriptors are defined in other specs, including possibly
 * in later levels in the series.
 * - A feature is defined in specs in different series. This
 * can only happen if all these specs, save one at most, are
 * delta specs, and that is because Webref guarantees
 * essentially ignore delta specs for now.
 *
 * Note: additional duplicates also exist in Webref if one
 * only looks at a feature's name, because a feature may be
 * defined for multiple other constructs. Disambiguation here
 * is a matter of taking the scope into account (the `for`
 * key).
 *
 * Which definition to use when a feature is defined in, or
 * across, multiple levels in a series essentially depends on
 * how the information is going to be used.
 * A conservative approach would use the definition in the
 * current level and dismiss later levels as forward-looking.
 * An on-the-edge perspective would use definitions in the
 * latest level.
 * To get a view more anchored on browser support, one would
 * likely mix both approaches depending on the underlying
 * feature.
 *
 * The code below implements the on-the-edge perspective.
 ***********************************************************/
for (const category of categories) {
  // Create an index of feature definitions
  const featureDfns = {};
  for (const feature of categorized[category]) {
    // ... and since we're looping through features, let's get rid
    // of inner value definitions, which we no longer need
    // (interesting ones were already copied to the root level)
    if (feature.values) {
      delete feature.values;
    }

    let featureName = feature.name;
    if (feature.for) {
      featureName += ' for ' + feature.for;
    }
    if (!featureDfns[featureName]) {
      featureDfns[featureName] = [];
    }
    featureDfns[featureName].push(feature);
  }

  // Detect and get rid of duplicate definitions in unrelated specs.
  // As of 2025-02-05, the only such duplicates are a few types in css-color-5
  // and css-color-hdr. Use the definitions in css-color-hdr which lives more
  // on the edge.
  // TODO: add this to data curation in Webref and improve guarantee
  for (const [name, dfns] of Object.entries(featureDfns)) {
    let actualDfns = dfns.filter(dfn => dfn.value);
    if (actualDfns.length === 0) {
      actualDfns = dfns.filter(dfn => !dfn.newValues);
    }
    const seriesShortname = actualDfns[0].spec.shortname
      .replace(/-\d+$/, '');
    const otherDfns = actualDfns
      .filter(dfn => dfn.spec.shortname.replace(/-\d+$/, '') !== seriesShortname)
      .map(dfn => dfn.spec.shortname);
    if (otherDfns.length > 0) {
      console.warn(` - ${name} defined in ${actualDfns[0].spec.shortname} and ${otherDfns.join(', ')}`);
      if (seriesShortname === 'css-color' ||
          seriesShortname === 'css-color-hdr') {
        featureDfns[name] = dfns.filter(dfn =>
          dfn.spec.shortname === 'css-color-hdr');
      }
      else {
        throw new Error('Duplicate features found in unrelated specs');
      }
    }
  }

  // Identify the base definition for each feature, using the definition in
  // the latest possible level. Move that base definition to the beginning
  // of the array and get rid of other base definitions.
  // (Note: we got rid of duplicates in unrelated specs already)
  for (const [name, dfns] of Object.entries(featureDfns)) {
    let actualDfns = dfns.filter(dfn => dfn.value);
    if (actualDfns.length === 0) {
      actualDfns = dfns.filter(dfn => !dfn.newValues);
    }
    const best = actualDfns.reduce((dfn1, dfn2) => {
      if (dfn1.spec.currentSpec) {
        return dfn2;
      }
      else if (dfn2.spec.currentSpec) {
        return dfn1;
      }
      else {
        const level1 = dfn1.spec.shortname.match(/-(\d+)$/)[1];
        const level2 = dfn2.spec.shortname.match(/-(\d+)$/)[1];
        if (level1 < level2) {
          return dfn2;
        }
        else {
          return dfn1;
        }
      }
    });
    featureDfns[name] = [best].concat(
      dfns.filter(dfn => !actualDfns.includes(dfn))
    );
  }

  // Apply extensions for properties and at-rules
  // (no extension mechanism for other categories)
  for (const [name, dfns] of Object.entries(featureDfns)) {
    const baseDfn = dfns[0];
    for (const dfn of dfns) {
      if (dfn === baseDfn) {
        continue;
      }
      if (baseDfn.value && dfn.newValues) {
        baseDfn.value += ' | ' + dfn.newValues;
      }
      if (baseDfn.descriptors && dfn.descriptors?.length > 0) {
        baseDfn.descriptors.push(...dfn.descriptors);
      }
    }
  }

  // All duplicates should have been treated somehow and merged into the
  // base definition. Use the base definition and get rid of the rest!
  // We will also generate a few additional syntaxes when possible for
  // at-rules and selectors.
  categorized[category] = Object.entries(featureDfns)
    .map(([name, features]) => features[0])
    .map(feature => {
      if (feature.descriptors?.length > 0 &&
          feature.value?.match(/{ <declaration-(rule-)?list> }/)) {
        // TODO: drop enclosing grouping constructs when there's no ambiguity
        // TODO: if the logic is sound, do it directly in raw Webref data
        const syntax = feature.descriptors
          .map(desc => {
            if (desc.name.startsWith('@')) {
              return `[ ${desc.value} ]`;
            }
            else {
              return `[ ${desc.name}: [ ${desc.value} ]; ]`;
            }
          })
          .join(' ||\n  ');
        feature.value = feature.value.replace(
          /{ <declaration-(rule-)?list> }/,
          '{\n  ' + syntax + '\n}');
      }
      else if (category === 'selectors' &&
          !feature.value &&
          !feature.name.match(/\(/)) {
        // TODO: consider doing that in Webref directly
        feature.value = feature.name;
      }
      return feature;
    });

  // Due to the way CSS specs are written, we may end up with scoped functions
  // and types that are scoped to some other construct, while an unscoped dfn
  // also exists. When the syntax is the same (or when the scoped dfn does not
  // have any known syntax), we can drop the scoped dfn in favor of the
  // unscoped one. When the syntax differs, that probably signals an error.
  // TODO: Detect and filter out such constructs in Webref
  categorized[category] = categorized[category].filter(feature => {
    if (feature.for) {
      const unscoped = categorized[category].find(f =>
        f.name === feature.name && !f.for);
      if (unscoped) {
        const fvalue = feature.value ?? 'no known syntax';
        const uvalue = unscoped.value ?? 'no known syntax';
        if (feature.value !== unscoped.value) {
          console.warn(` - ${feature.name} defined for ${feature.for} but unscoped definition exists as well. Syntaxes differ:
    scoped:   ${fvalue}
    unscoped: ${uvalue}`);
        }
        else if (feature.value) {
          console.warn(` - ${feature.name} defined for ${feature.for} but unscoped definition exists as well. Same syntax:
  ${fvalue}`);
        }
        else {
          console.warn(` - ${feature.name} defined for ${feature.for} but unscoped definition exists as well. No known syntax`);
        }

        // Only keep the scoped feature if it has a known syntax that
        // differs from the unscoped feature
        return feature.value && feature.value !== unscoped.value;
      }
    }
    return true;
  });

  // Various CSS properties are "legacy aliases of" another property. Use the
  // syntax of the other property for these.
  for (const feature of categorized[category]) {
    if (feature.legacyAliasOf && !feature.value) {
      const target = categorized[category].find(f =>
        f.name === feature.legacyAliasOf && !f.for);
      if (!target) {
        throw new Error(`${feature.name} is a legacy alias of unknown ${f.legacyAliasOf}`);
      }
      feature.value = target.value;
    }
  }
}


/************************************************************
 * Identify gaps between Webref and MDN data
 ***********************************************************/
const missing = {
  webref: {},
  mdn: {}
};

for (const category of categories) {
  // Look at gaps in MDN data
  missing.mdn[category] = [];
  for (const feature of categorized[category]) {
    // Note: Webref keeps the enclosing `<>` for types, MDN data does not
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

  // Look at gaps in Webref
  missing.webref[category] = [];
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
 * Identify syntax mismatches for entries that are common to
 * Webref and MDN data.
 *
 * Note: comparison ignores most non-significant whitespaces
 * and outer grouping constructs. It does not (yet) account
 * for other non-significant differences such as the order of
 * alternatives.
 ***********************************************************/
const nbInCommon = {};
const mismatches = {};
for (const category of categoriesWithSyntax) {
  nbInCommon[category] = 0;
  mismatches[category] = [];
  for (const feature of categorized[category]) {
    const featureName = feature.name.match(/^<(.+?)>$/) ?
      feature.name.replace(/^<(.+?)>$/, '$1') :
      feature.name;
    const mdnFeature = mdn.css[category][featureName];
    if (!mdnFeature) {
      continue;
    }
    nbInCommon[category] += 1;

    // Note: the syntax of types is stored under `syntaxes` in MDN data
    let mdnSyntax = mdnFeature.syntax;
    if (category === 'types') {
      const syntaxEntry = mdn.css.syntaxes[featureName];
      if (syntaxEntry) {
        mdnSyntax = syntaxEntry.syntax;
      }
    }

    if (normalizeSyntax(feature.value) !== normalizeSyntax(mdnSyntax)) {
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
 * Compute the list of dangling constructs in Webref
 *
 * Dangling constructs are types or functions that don't
 * seem to be referenced by any other construct. That
 * suggests that some other syntax is missing.
 ***********************************************************/
const dangling = {};
for (const category of ['functions', 'types']) {
  const features = categorized[category].filter(feature =>
    !categoriesWithSyntax.find(cat =>
      categorized[cat].find(f => f.value && f.value.indexOf(feature.name) !== -1)));
  if (features.length > 0) {
    for (const feature of features) {
      feature.dangling = true;
    }
    dangling[category] = features;
  }
}


/************************************************************
 * Compute the list of constructs without syntax in Webref.
 *
 * Some of them are due to CSS specs "hiding" the syntax in
 * prose. Others are due to CSS specs not describing a more
 * formal syntax. In an ideal world, specs would be updated
 * and that list would be empty.
 ***********************************************************/
const noSyntax = {};
for (const category of categoriesWithSyntax) {
  if (category === 'syntaxes') {
    // Syntaxes are just functions + types, no need to report them as such
    continue;
  }
  const features = categorized[category].filter(feature => !feature.value);
  if (features.length > 0) {
    noSyntax[category] = features;
  }
}


/************************************************************
 * Compare CSSTree syntax patches with Webref data.
 *
 * Patches apply to at-rules (not sure how for now),
 * properties and types (functions + actual types)
 ***********************************************************/
const patches = {};
for (const category of ['properties', 'types']) {
  patches[category] = {
    missing: [],
    mismatches: [],
    moot: []
  };
  for (const [name, patch] of Object.entries(csstreePatches[category])) {
    const feature = {
      name, patch,
      webref:
        categorized[category].find(f => f.name === name && !f.for) ||
        categorized.functions.find(f => f.name === name && !f.for) ||
        categorized[category].find(f => f.name === '<' + name + '>' && !f.for)
    };
    if (!feature.webref?.value) {
      patches[category].missing.push(feature);
    }
    else if (feature.value !== patch.syntax) {
      patches[category].mismatches.push(feature);
    }
    else {
      patches[category].moot.push(feature);
    }
  }
}


/************************************************************
 * Save sanitized and categorized Webref data
 ***********************************************************/
await writeFile('webref.json', JSON.stringify(categorized, null, 2), 'utf8');


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

${reportFeatures(missing[source][category], true)}
</details>
`);
    }
  }
}
await writeFile('report-gaps.md', report.join('\n'), 'utf8');


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
 * Write no syntax report
 ***********************************************************/
const generatedWebref = `Generated on **${new Date().toISOString()}** using **v${webrefPackage.version}** of \`@webref/css\`.`;
report = ['# Features without syntax in Webref'];
report.push('');
report.push(generatedWebref);
report.push('');
for (const category of Object.keys(noSyntax)) {
  const nb = noSyntax[category].length;
  if (nb > 0) {
    report.push(`
<details>
<summary>${nb} ${getCatName(category, 2)} without syntax (out of ${categorized[category].length})</summary>

${reportFeatures(noSyntax[category], true)}
</details>
`);
  }
}
await writeFile('report-nosyntax.md', report.join('\n'), 'utf8');


/************************************************************
 * Write dangling constructs report
 ***********************************************************/
report = ['# Dangling features in Webref'];
report.push('');
report.push(generatedWebref);
report.push('');
for (const category of Object.keys(dangling)) {
  const nb = dangling[category].length;
  if (nb > 0) {
    report.push(`
<details>
<summary>${nb} dangling ${getCatName(category, 2)} (out of ${categorized[category].length})</summary>

${reportFeatures(dangling[category])}
</details>
`);
  }
}
await writeFile('report-dangling.md', report.join('\n'), 'utf8');


/************************************************************
 * Write CSSTree patches report
 ***********************************************************/
report = ['# CSSTree patches and Webref'];
report.push('');
report.push(generated);
report.push('');
for (const category of Object.keys(patches)) {
  const total =
    patches[category].missing.length +
    patches[category].mismatches.length +
    patches[category].moot.length;
  for (const type of ['missing', 'mismatches', 'moot']) {
    const nb = patches[category][type].length;
    let label = '';
    if (type === 'missing') {
      label = 'missing from Webref';
    }
    else if (type === 'mismatches') {
      label = 'with a different syntax in Webref';
    }
    else {
      label = 'already in Webref';
    }
    if (nb > 0) {
      report.push(`
<details>
<summary>${nb} ${getCatName(category, 1)} patches ${label}</summary>

${reportPatches(patches[category][type])}
</details>
`);
    }
  }
}
await writeFile('report-patches.md', report.join('\n'), 'utf8');


/************************************************************
 * A few helper functions
 ***********************************************************/
function reportFeatures(features, reportDangling) {
  return features
    .sort((f1, f2) => f1.name.localeCompare(f2.name))
    .map(feature => reportFeature(feature, reportDangling))
    .join('\n');
}

function reportFeature(feature, reportDangling) {
  let res = '`' + feature.name + '`';
  if (feature.href) {
    res = `[${res}](${feature.href})`;
  }
  if (feature.for) {
    res += ' for `' + feature.for + '`';
  }
  if (reportDangling && feature.dangling) {
    res += ' (dangling)';
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

function reportPatches(features) {
  return features
    .sort((f1, f2) => f1.name.localeCompare(f2.name))
    .map(reportPatch)
    .join('\n');
}

function reportPatch(feature) {
  let res = reportFeature(feature);
  if (feature.webref) {
    if (feature.webref.value !== feature.patch.syntax) {
      res += '\n```\n';
      res += 'webref:  ';
      res += feature.webref.value;
      res += '\n';
      res += 'csstree: ';
      res += feature.patch.syntax;
      res += '\n';
      res += '```';
    }
  }
  else {
    res += '\n```\n';
    res += feature.patch.syntax;
    res += '\n';
    res += '```';
  }
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
function decorateFeaturesWithSpec(data, shortname) {
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
