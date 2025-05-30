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

import { crawlSpecs } from 'reffy';
import mdn from 'mdn-data';
import { writeFile } from 'node:fs/promises';
import mdnPackage from 'mdn-data/package.json' with { type: 'json' };
import csstreePatches from './node_modules/css-tree/data/patch.json' with { type: 'json' };
import { fileURLToPath } from 'node:url';
import path from "node:path";

const scriptPath = path.dirname(fileURLToPath(import.meta.url));


/************************************************************
 * Prepare consolidated CSS from Webref data
 ***********************************************************/
const cssFolder = path.join(scriptPath, 'node_modules', 'webref', 'ed');
await crawlSpecs({
  useCrawl: cssFolder,
  output: cssFolder,
  post: ['cssmerge'],
  quiet: true
});

const { default: webrefData } = await import(
  'file://' + path.join(cssFolder, 'css.json'),
  { with: { type: 'json' } });

const categorized = {
  // At-rules are under an "atrules" key in Webref, "atRules" in MDN data.
  atRules: webrefData.atrules,
  functions: webrefData.functions,
  properties: webrefData.properties,
  selectors: webrefData.selectors,
  syntaxes: [],
  types: webrefData.types
};

// Syntaxes in MDN data are the result of merging functions and types
categorized.syntaxes.push(...webrefData.functions);
categorized.syntaxes.push(...webrefData.types);

const categories = Object.keys(categorized);

// Code that sets the selector's syntax to the selector's name when possible
// has not propagated to Webref yet. Let's do it here as well. That code can
// go when https://github.com/w3c/reffy/pull/1848 is merged and applied.
for (const category of categories) {
  categorized[category] = categorized[category].map(feature => {
    if (category === 'selectors' &&
        !feature.value &&
        !feature.name.match(/\(/)) {
      feature.value = feature.name;
    }
    return feature;
  });
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
for (const category of categories) {
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
    !categories.find(cat =>
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
for (const category of categories) {
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
    if (feature.webref?.href) {
      feature.href = feature.webref.href;
    }
    if (!feature.webref?.value) {
      patches[category].missing.push(feature);
    }
    else if (normalizeSyntax(feature.webref.value) !== normalizeSyntax(patch.syntax)) {
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
await writeFile('webref.json', JSON.stringify(webrefData, null, 2), 'utf8');


/************************************************************
 * Write gap report
 ***********************************************************/
const generated = `Generated on **${new Date().toISOString()}** using **v${mdnPackage.version}** of MDN data.`;
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
const generatedWebref = `Generated on **${new Date().toISOString()}**.`;
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
    if (normalizeSyntax(feature.webref.value) !== normalizeSyntax(feature.patch.syntax)) {
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

