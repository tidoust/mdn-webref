# Comparing data in MDN data and Webref

The [MDN data](https://github.com/mdn/data) repository advertizes that it may be deprecated in favor of [Webref](https://github.com/w3c/webref). For that to be doable, Webref updates may need to be considered, as discussed in a related [Webref issue](https://github.com/w3c/webref/issues/1519).

This repository compares the CSS data in Webref with the CSS data in MDN data to understand differences both in terms of entries and in terms of syntaxes. It also looks at syntax patches in CSSTree that get applied to MDN data.

**Note:** The objective of this repository is to inform further discussion and developments in Webref. This repository will **not** be kept up-to-date once conclusions have been reached.

Reports are generated automatically through the [`main.mjs`](main.mjs) Node.js script. That script merges and consolidates Webref data into a structure that matches that in MDN data, then analyzes gaps and mismatches.

The result of the consolidation is the [`webref.json`](webref.json) file. That file, and the logic used to generate it, might move to Webref as part of its data curation phase.

Actual human-readable reports are:
- [`report-gaps.md`](report-gaps.md): missing CSS features in Webref compared to MDN data, and missing CSS features in MDN data compared to Webref.
- [`report-syntax.md`](report-syntax.md): syntax mismatches between Webref and MDN data (for data that they have in common).
- [`report-patches.md`](report-patches.md): comparison between CSSTree patches and Webref data.
- [`report-nosyntax.md`](report-nosyntax.md): CSS features in Webref that do not have any known syntax.
- [`report-dangling.md`](report-dangling.md): CSS functions and types in Webref that are not referenced by other CSS features.

Reports do not explain **why** the differences exist. Main reasons are:
- Specs may "hide" the formal syntax CSS constructs in prose, preventing data from reaching Webref. Ideally, specs would be improved to enable extraction.
- The logic here takes a "live on the edge" approach, using syntaxes from latest CSS drafts, while MDN data takes a more conservative approach, tied to what actually ships in core browsers. This may be hard to resolve fully. For example, the more conservative approach does not fully align with the status of the underlying specs.
- MDN data includes data about non-standard features such as deprecated or vendor-prefixed features. They are out of scope for Webref.
- Bugs in specs and/or MDN data.
- Non-significant syntax differences.

To run the script locally and update the reports:

1. Clone the repository
2. Install dependencies with `npm install`
3. Run script with `node main.mjs`
