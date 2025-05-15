# CSSTree patches and Webref

Generated on **2025-05-15T06:31:35.689Z** using **v2.21.0** of MDN data and **v6.21.0** of `@webref/css`.


<details>
<summary>33 property patches missing from Webref</summary>

- `-moz-background-clip`
```
padding | border
```
- `-moz-border-radius-bottomleft`
```
<'border-bottom-left-radius'>
```
- `-moz-border-radius-bottomright`
```
<'border-bottom-right-radius'>
```
- `-moz-border-radius-topleft`
```
<'border-top-left-radius'>
```
- `-moz-border-radius-topright`
```
<'border-bottom-right-radius'>
```
- `-moz-control-character-visibility`
```
visible | hidden
```
- `-moz-osx-font-smoothing`
```
auto | grayscale
```
- `-moz-user-select`
```
none | text | all | -moz-none
```
- `-ms-flex-align`
```
start | end | center | baseline | stretch
```
- `-ms-flex-item-align`
```
auto | start | end | center | baseline | stretch
```
- `-ms-flex-line-pack`
```
start | end | center | justify | distribute | stretch
```
- `-ms-flex-negative`
```
<'flex-shrink'>
```
- `-ms-flex-order`
```
<integer>
```
- `-ms-flex-pack`
```
start | end | center | justify | distribute
```
- `-ms-flex-positive`
```
<'flex-grow'>
```
- `-ms-flex-preferred-size`
```
<'flex-basis'>
```
- `-ms-grid-column-align`
```
start | end | center | stretch
```
- `-ms-grid-row-align`
```
start | end | center | stretch
```
- `-ms-hyphenate-limit-last`
```
none | always | column | page | spread
```
- `-ms-interpolation-mode`
```
nearest-neighbor | bicubic
```
- `-webkit-column-break-after`
```
always | auto | avoid
```
- `-webkit-column-break-before`
```
always | auto | avoid
```
- `-webkit-column-break-inside`
```
always | auto | avoid
```
- `-webkit-font-smoothing`
```
auto | none | antialiased | subpixel-antialiased
```
- `-webkit-print-color-adjust`
```
economy | exact
```
- `-webkit-text-security`
```
none | circle | disc | square
```
- `-webkit-user-drag`
```
none | element | auto
```
- [`-webkit-user-select`](https://drafts.csswg.org/css-ui-4/#propdef--webkit-user-select)
```
webref:  undefined
csstree: auto | none | text | all
```
- `behavior`
```
<url>+
```
- `glyph-orientation-horizontal`
```
<angle>
```
- `kerning`
```
auto | <svg-length>
```
- `src`
```
[ <url> [ format( <string># ) ]? | local( <family-name> ) ]#
```
- `unicode-range`
```
<urange>#
```
</details>


<details>
<summary>42 property patches with a different syntax in Webref</summary>

- [`-webkit-appearance`](https://drafts.csswg.org/css-ui-4/#propdef--webkit-appearance)
```
webref:  none | auto | base | <compat-auto> | <compat-special> | base
csstree: none | button | button-bevel | caps-lock-indicator | caret | checkbox | default-button | inner-spin-button | listbox | listitem | media-controls-background | media-controls-fullscreen-background | media-current-time-display | media-enter-fullscreen-button | media-exit-fullscreen-button | media-fullscreen-button | media-mute-button | media-overlay-play-button | media-play-button | media-seek-back-button | media-seek-forward-button | media-slider | media-sliderthumb | media-time-remaining-display | media-toggle-closed-captions-button | media-volume-slider | media-volume-slider-container | media-volume-sliderthumb | menulist | menulist-button | menulist-text | menulist-textfield | meter | progress-bar | progress-bar-value | push-button | radio | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbargripper-horizontal | scrollbargripper-vertical | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | searchfield-cancel-button | searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | square-button | textarea | textfield | -apple-pay-button
```
- [`-webkit-background-clip`](https://compat.spec.whatwg.org/#propdef--webkit-background-clip)
```
webref:  <bg-clip>#
csstree: [ <box> | border | padding | content | text ]#
```
- [`-webkit-mask-box-image`](https://compat.spec.whatwg.org/#propdef--webkit-mask-box-image)
```
webref:  <'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>
csstree: [ <url> | <gradient> | none ] [ <length-percentage>{4} <-webkit-mask-box-repeat>{2} ]?
```
- [`alignment-baseline`](https://drafts.csswg.org/css-inline-3/#propdef-alignment-baseline)
```
webref:  baseline | text-bottom | alphabetic | ideographic | middle | central | mathematical | text-top
csstree: auto | baseline | before-edge | text-before-edge | middle | central | after-edge | text-after-edge | ideographic | alphabetic | hanging | mathematical
```
- [`baseline-shift`](https://drafts.csswg.org/css-inline-3/#propdef-baseline-shift)
```
webref:  <length-percentage> | sub | super | top | center | bottom
csstree: baseline | sub | super | <svg-length>
```
- [`container-type`](https://drafts.csswg.org/css-conditional-5/#propdef-container-type)
```
webref:  normal | [ [ size | inline-size ] || scroll-state ]
csstree: normal || [ size | inline-size ]
```
- [`cue-after`](https://drafts.csswg.org/css-speech-1/#propdef-cue-after)
```
webref:  <uri> <decibel>? | none
csstree: <url> <decibel>? | none
```
- [`cue-before`](https://drafts.csswg.org/css-speech-1/#propdef-cue-before)
```
webref:  <uri> <decibel>? | none
csstree: <url> <decibel>? | none
```
- [`cursor`](https://drafts.csswg.org/css-ui-4/#propdef-cursor)
```
webref:  [ [ <url> | <url-set> ] [<x> <y>]? ]#? [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | grab | grabbing | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out ]
csstree: [ [ <url> [ <x> <y> ]? , ]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing | hand | -webkit-grab | -webkit-grabbing | -webkit-zoom-in | -webkit-zoom-out | -moz-grab | -moz-grabbing | -moz-zoom-in | -moz-zoom-out ] ]
```
- [`display`](https://drafts.csswg.org/css-display-4/#propdef-display)
```
webref:  [ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy> | <display-outside> || [ <display-inside> | math ]
csstree: | <-non-standard-display>
```
- [`dominant-baseline`](https://drafts.csswg.org/css-inline-3/#propdef-dominant-baseline)
```
webref:  auto | text-bottom | alphabetic | ideographic | middle | central | mathematical | hanging | text-top
csstree: auto | use-script | no-change | reset-size | ideographic | alphabetic | hanging | mathematical | central | middle | text-after-edge | text-before-edge
```
- [`fill-opacity`](https://drafts.fxtf.org/fill-stroke-3/#propdef-fill-opacity)
```
webref:  <'opacity'>
csstree: <number-zero-one>
```
- [`filter`](https://drafts.fxtf.org/filter-effects-1/#propdef-filter)
```
webref:  none | <filter-value-list>
csstree: | <-ms-filter-function-list>
```
- [`font`](https://drafts.csswg.org/css-fonts-4/#propdef-font)
```
webref:  [ [ <'font-style'> || <font-variant-css2> || <'font-weight'> || <font-width-css3> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'># ] | <system-family-name>
csstree: [ [ <'font-style'> || <font-variant-css2> || <'font-weight'> || <font-width-css3> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'># ] | <system-family-name> | <-non-standard-font>
```
- [`glyph-orientation-vertical`](https://drafts.csswg.org/css-writing-modes-4/#propdef-glyph-orientation-vertical)
```
webref:  auto | 0deg | 90deg | 0 | 90
csstree: <angle>
```
- [`height`](https://drafts.csswg.org/css-sizing-3/#propdef-height)
```
webref:  auto | <length-percentage [0,∞]> | min-content | max-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()> | stretch | fit-content | contain
csstree: | stretch | <-non-standard-size>
```
- [`image-rendering`](https://drafts.csswg.org/css-images-3/#propdef-image-rendering)
```
webref:  auto | smooth | high-quality | pixelated | crisp-edges
csstree: | optimizeSpeed | optimizeQuality | <-non-standard-image-rendering>
```
- [`max-height`](https://drafts.csswg.org/css-sizing-3/#propdef-max-height)
```
webref:  none | <length-percentage [0,∞]> | min-content | max-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()> | stretch | fit-content | contain
csstree: | stretch | <-non-standard-size>
```
- [`max-width`](https://drafts.csswg.org/css-sizing-3/#propdef-max-width)
```
webref:  none | <length-percentage [0,∞]> | min-content | max-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()> | stretch | fit-content | contain
csstree: | stretch | <-non-standard-size>
```
- [`min-height`](https://drafts.csswg.org/css-sizing-3/#propdef-min-height)
```
webref:  auto | <length-percentage [0,∞]> | min-content | max-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()> | stretch | fit-content | contain
csstree: | stretch | <-non-standard-size>
```
- [`min-width`](https://drafts.csswg.org/css-sizing-3/#propdef-min-width)
```
webref:  auto | <length-percentage [0,∞]> | min-content | max-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()> | stretch | fit-content | contain
csstree: | stretch | <-non-standard-size>
```
- [`overflow`](https://drafts.csswg.org/css-overflow-3/#propdef-overflow)
```
webref:  <'overflow-block'>{1,2}
csstree: | <-non-standard-overflow>
```
- [`pause-after`](https://drafts.csswg.org/css-speech-1/#propdef-pause-after)
```
webref:  <time [0s,∞]> | none | x-weak | weak | medium | strong | x-strong
csstree: <time> | none | x-weak | weak | medium | strong | x-strong
```
- [`pause-before`](https://drafts.csswg.org/css-speech-1/#propdef-pause-before)
```
webref:  <time [0s,∞]> | none | x-weak | weak | medium | strong | x-strong
csstree: <time> | none | x-weak | weak | medium | strong | x-strong
```
- [`position`](https://drafts.csswg.org/css-position-3/#propdef-position)
```
webref:  static | relative | absolute | sticky | fixed | <running()>
csstree: | -webkit-sticky
```
- [`rest-after`](https://drafts.csswg.org/css-speech-1/#propdef-rest-after)
```
webref:  <time [0s,∞]> | none | x-weak | weak | medium | strong | x-strong
csstree: <time> | none | x-weak | weak | medium | strong | x-strong
```
- [`rest-before`](https://drafts.csswg.org/css-speech-1/#propdef-rest-before)
```
webref:  <time [0s,∞]> | none | x-weak | weak | medium | strong | x-strong
csstree: <time> | none | x-weak | weak | medium | strong | x-strong
```
- [`scroll-timeline`](https://drafts.csswg.org/scroll-animations-1/#propdef-scroll-timeline)
```
webref:  [ <'scroll-timeline-name'> <'scroll-timeline-axis'>? ]#
csstree: [ <'scroll-timeline-name'> || <'scroll-timeline-axis'> ]#
```
- [`stroke-dasharray`](https://drafts.fxtf.org/fill-stroke-3/#propdef-stroke-dasharray)
```
webref:  none | [<length-percentage> | <number>]+#
csstree: none | [ <svg-length>+ ]#
```
- [`stroke-dashoffset`](https://drafts.fxtf.org/fill-stroke-3/#propdef-stroke-dashoffset)
```
webref:  <length-percentage> | <number>
csstree: <svg-length>
```
- [`stroke-linejoin`](https://drafts.fxtf.org/fill-stroke-3/#propdef-stroke-linejoin)
```
webref:  [ crop | arcs | miter ] || [ bevel | round | fallback ]
csstree: miter | round | bevel
```
- [`stroke-miterlimit`](https://drafts.fxtf.org/fill-stroke-3/#propdef-stroke-miterlimit)
```
webref:  <number>
csstree: <number-one-or-greater>
```
- [`stroke-width`](https://drafts.fxtf.org/fill-stroke-3/#propdef-stroke-width)
```
webref:  [<length-percentage> | <number>]#
csstree: <svg-length>
```
- [`unicode-bidi`](https://drafts.csswg.org/css-writing-modes-4/#propdef-unicode-bidi)
```
webref:  normal | embed | isolate | bidi-override | isolate-override | plaintext
csstree: | -moz-isolate | -moz-isolate-override | -moz-plaintext | -webkit-isolate | -webkit-isolate-override | -webkit-plaintext
```
- [`voice-duration`](https://drafts.csswg.org/css-speech-1/#propdef-voice-duration)
```
webref:  auto | <time [0s,∞]>
csstree: auto | <time>
```
- [`voice-family`](https://drafts.csswg.org/css-speech-1/#propdef-voice-family)
```
webref:  [[<family-name> | <generic-voice>],]* [<family-name> | <generic-voice>] | preserve
csstree: [ [ <family-name> | <generic-voice> ] , ]* [ <family-name> | <generic-voice> ] | preserve
```
- [`voice-pitch`](https://drafts.csswg.org/css-speech-1/#propdef-voice-pitch)
```
webref:  <frequency [0Hz,∞]> && absolute | [[x-low | low | medium | high | x-high] || [<frequency> | <semitones> | <percentage>]]
csstree: <frequency> && absolute | [ [ x-low | low | medium | high | x-high ] || [ <frequency> | <semitones> | <percentage> ] ]
```
- [`voice-range`](https://drafts.csswg.org/css-speech-1/#propdef-voice-range)
```
webref:  <frequency [0Hz,∞]> && absolute | [[x-low | low | medium | high | x-high] || [<frequency> | <semitones> | <percentage>]]
csstree: <frequency> && absolute | [ [ x-low | low | medium | high | x-high ] || [ <frequency> | <semitones> | <percentage> ] ]
```
- [`voice-rate`](https://drafts.csswg.org/css-speech-1/#propdef-voice-rate)
```
webref:  [normal | x-slow | slow | medium | fast | x-fast] || <percentage [0,∞]>
csstree: [ normal | x-slow | slow | medium | fast | x-fast ] || <percentage>
```
- [`width`](https://drafts.csswg.org/css-sizing-3/#propdef-width)
```
webref:  auto | <length-percentage [0,∞]> | min-content | max-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()> | stretch | fit-content | contain
csstree: | stretch | <-non-standard-size>
```
- [`word-break`](https://drafts.csswg.org/css-text-4/#propdef-word-break)
```
webref:  normal | break-all | keep-all | manual | auto-phrase | break-word
csstree: normal | break-all | keep-all | break-word | auto-phrase
```
- [`writing-mode`](https://drafts.csswg.org/css-writing-modes-4/#propdef-writing-mode)
```
webref:  horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr
csstree: | <svg-writing-mode>
```
</details>


<details>
<summary>15 property patches already in Webref</summary>

- [`background-clip`](https://drafts.csswg.org/css-backgrounds-4/#propdef-background-clip)
- [`cue`](https://drafts.csswg.org/css-speech-1/#propdef-cue)
- [`fill`](https://svgwg.org/svg2-draft/painting.html#FillProperty)
- [`letter-spacing`](https://drafts.csswg.org/css-text-4/#propdef-letter-spacing)
- [`pause`](https://drafts.csswg.org/css-speech-1/#propdef-pause)
- [`rest`](https://drafts.csswg.org/css-speech-1/#propdef-rest)
- [`scroll-timeline-name`](https://drafts.csswg.org/scroll-animations-1/#propdef-scroll-timeline-name)
- [`speak`](https://drafts.csswg.org/css-speech-1/#propdef-speak)
- [`speak-as`](https://drafts.csswg.org/css-speech-1/#propdef-speak-as)
- [`stroke`](https://svgwg.org/svg2-draft/painting.html#StrokeProperty)
- [`text-wrap`](https://drafts.csswg.org/css-text-4/#propdef-text-wrap)
- [`voice-balance`](https://drafts.csswg.org/css-speech-1/#propdef-voice-balance)
- [`voice-stress`](https://drafts.csswg.org/css-speech-1/#propdef-voice-stress)
- [`voice-volume`](https://drafts.csswg.org/css-speech-1/#propdef-voice-volume)
- [`white-space-trim`](https://drafts.csswg.org/css-text-4/#propdef-white-space-trim)
</details>


<details>
<summary>59 type patches missing from Webref</summary>

- `-legacy-gradient`
```
<-webkit-gradient()> | <-legacy-linear-gradient> | <-legacy-repeating-linear-gradient> | <-legacy-radial-gradient> | <-legacy-repeating-radial-gradient>
```
- `-legacy-linear-gradient`
```
-moz-linear-gradient( <-legacy-linear-gradient-arguments> ) | -webkit-linear-gradient( <-legacy-linear-gradient-arguments> ) | -o-linear-gradient( <-legacy-linear-gradient-arguments> )
```
- `-legacy-linear-gradient-arguments`
```
[ <angle> | <side-or-corner> ]? , <color-stop-list>
```
- `-legacy-radial-gradient`
```
-moz-radial-gradient( <-legacy-radial-gradient-arguments> ) | -webkit-radial-gradient( <-legacy-radial-gradient-arguments> ) | -o-radial-gradient( <-legacy-radial-gradient-arguments> )
```
- `-legacy-radial-gradient-arguments`
```
[ <position> , ]? [ [ [ <-legacy-radial-gradient-shape> || <-legacy-radial-gradient-size> ] | [ <length> | <percentage> ]{2} ] , ]? <color-stop-list>
```
- `-legacy-radial-gradient-shape`
```
circle | ellipse
```
- `-legacy-radial-gradient-size`
```
closest-side | closest-corner | farthest-side | farthest-corner | contain | cover
```
- `-legacy-repeating-linear-gradient`
```
-moz-repeating-linear-gradient( <-legacy-linear-gradient-arguments> ) | -webkit-repeating-linear-gradient( <-legacy-linear-gradient-arguments> ) | -o-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )
```
- `-legacy-repeating-radial-gradient`
```
-moz-repeating-radial-gradient( <-legacy-radial-gradient-arguments> ) | -webkit-repeating-radial-gradient( <-legacy-radial-gradient-arguments> ) | -o-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )
```
- `-ms-filter-function`
```
<-ms-filter-function-progid> | <-ms-filter-function-legacy>
```
- `-ms-filter-function-legacy`
```
<ident-token> | <function-token> <any-value>? )
```
- `-ms-filter-function-list`
```
<-ms-filter-function>+
```
- `-ms-filter-function-progid`
```
'progid:' [ <ident-token> '.' ]* [ <ident-token> | <function-token> <any-value>? ) ]
```
- `-non-standard-color`
```
-moz-ButtonDefault | -moz-ButtonHoverFace | -moz-ButtonHoverText | -moz-CellHighlight | -moz-CellHighlightText | -moz-Combobox | -moz-ComboboxText | -moz-Dialog | -moz-DialogText | -moz-dragtargetzone | -moz-EvenTreeRow | -moz-Field | -moz-FieldText | -moz-html-CellHighlight | -moz-html-CellHighlightText | -moz-mac-accentdarkestshadow | -moz-mac-accentdarkshadow | -moz-mac-accentface | -moz-mac-accentlightesthighlight | -moz-mac-accentlightshadow | -moz-mac-accentregularhighlight | -moz-mac-accentregularshadow | -moz-mac-chrome-active | -moz-mac-chrome-inactive | -moz-mac-focusring | -moz-mac-menuselect | -moz-mac-menushadow | -moz-mac-menutextselect | -moz-MenuHover | -moz-MenuHoverText | -moz-MenuBarText | -moz-MenuBarHoverText | -moz-nativehyperlinktext | -moz-OddTreeRow | -moz-win-communicationstext | -moz-win-mediatext | -moz-activehyperlinktext | -moz-default-background-color | -moz-default-color | -moz-hyperlinktext | -moz-visitedhyperlinktext | -webkit-activelink | -webkit-focus-ring-color | -webkit-link | -webkit-text
```
- `-non-standard-display`
```
-ms-inline-flexbox | -ms-grid | -ms-inline-grid | -webkit-flex | -webkit-inline-flex | -webkit-box | -webkit-inline-box | -moz-inline-stack | -moz-box | -moz-inline-box
```
- `-non-standard-font`
```
-apple-system-body | -apple-system-headline | -apple-system-subheadline | -apple-system-caption1 | -apple-system-caption2 | -apple-system-footnote | -apple-system-short-body | -apple-system-short-headline | -apple-system-short-subheadline | -apple-system-short-caption1 | -apple-system-short-footnote | -apple-system-tall-body
```
- `-non-standard-generic-family`
```
-apple-system | BlinkMacSystemFont
```
- `-non-standard-image-rendering`
```
optimize-contrast | -moz-crisp-edges | -o-crisp-edges | -webkit-optimize-contrast
```
- `-non-standard-overflow`
```
overlay | -moz-scrollbars-none | -moz-scrollbars-horizontal | -moz-scrollbars-vertical | -moz-hidden-unscrollable
```
- `-non-standard-size`
```
intrinsic | min-intrinsic | -webkit-fill-available | -webkit-fit-content | -webkit-min-content | -webkit-max-content  | -moz-available | -moz-fit-content | -moz-min-content | -moz-max-content
```
- `-webkit-gradient-color-stop`
```
from( <color> ) | color-stop( [ <number-zero-one> | <percentage> ] , <color> ) | to( <color> )
```
- `-webkit-gradient-point`
```
[ left | center | right | <length-percentage> ] [ top | center | bottom | <length-percentage> ]
```
- `-webkit-gradient-radius`
```
<length> | <percentage>
```
- `-webkit-gradient-type`
```
linear | radial
```
- `-webkit-gradient()`
```
-webkit-gradient( <-webkit-gradient-type>, <-webkit-gradient-point> [, <-webkit-gradient-point> | , <-webkit-gradient-radius>, <-webkit-gradient-point> ] [, <-webkit-gradient-radius>]? [, <-webkit-gradient-color-stop>]* )
```
- `-webkit-mask-box-repeat`
```
repeat | stretch | round
```
- `absolute-color-base`
```
<hex-color> | <absolute-color-function> | <named-color> | transparent
```
- `absolute-color-function`
```
<rgb()> | <rgba()> | <hsl()> | <hsla()> | <hwb()> | <lab()> | <lch()> | <oklab()> | <oklch()> | <color()>
```
- `age`
```
child | young | old
```
- `anchor-element`
```
<dashed-ident>
```
- `attr-fallback`
```
<any-value>
```
- [`basic-shape`](https://drafts.csswg.org/css-shapes-1/#typedef-basic-shape)
```
webref:  undefined
csstree: <inset()> | <xywh()> | <rect()> | <circle()> | <ellipse()> | <polygon()> | <path()>
```
- [`bottom`](https://drafts.csswg.org/css2/#value-def-bottom)
```
webref:  undefined
csstree: <length> | auto
```
- `declaration`
```
<ident-token> : <declaration-value>? [ '!' important ]?
```
- [`declaration-list`](https://drafts.csswg.org/css-syntax-3/#typedef-declaration-list)
```
webref:  undefined
csstree: [ <declaration>? ';' ]* <declaration>?
```
- `forgiving-relative-selector-list`
```
<relative-real-selector-list>
```
- [`forgiving-selector-list`](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list)
```
webref:  undefined
csstree: <complex-real-selector-list>
```
- `gender`
```
male | female | neutral
```
- `inset-area`
```
[ [ left | center | right | span-left | span-right | x-start | x-end | span-x-start | span-x-end | x-self-start | x-self-end | span-x-self-start | span-x-self-end | span-all ] || [ top | center | bottom | span-top | span-bottom | y-start | y-end | span-y-start | span-y-end | y-self-start | y-self-end | span-y-self-start | span-y-self-end | span-all ] | [ block-start | center | block-end | span-block-start | span-block-end | span-all ] || [ inline-start | center | inline-end | span-inline-start | span-inline-end | span-all ] | [ self-block-start | self-block-end | span-self-block-start | span-self-block-end | span-all ] || [ self-inline-start | self-inline-end | span-self-inline-start | span-self-inline-end | span-all ] | [ start | center | end | span-start | span-end | span-all ]{1,2} | [ self-start | center | self-end | span-self-start | span-self-end | span-all ]{1,2} ]
```
- [`left`](https://drafts.csswg.org/css2/#value-def-left)
```
webref:  undefined
csstree: <length> | auto
```
- `number-one-or-greater`
```
<number [1,∞]>
```
- `number-zero-one`
```
<number [0,1]>
```
- `palette-identifier`
```
<dashed-ident>
```
- `rect()`
```
rect( [ <length-percentage> | auto ]{4} [ round <'border-radius'> ]? )
```
- [`right`](https://drafts.csswg.org/css2/#value-def-right)
```
webref:  undefined
csstree: <length> | auto
```
- [`scope-end`](https://drafts.csswg.org/css-cascade-6/#typedef-scope-end)
```
webref:  undefined
csstree: <forgiving-selector-list>
```
- [`scope-start`](https://drafts.csswg.org/css-cascade-6/#typedef-scope-start)
```
webref:  undefined
csstree: <forgiving-selector-list>
```
- [`shape`](https://drafts.csswg.org/css2/#value-def-shape)
```
webref:  undefined
csstree: rect( <top>, <right>, <bottom>, <left> ) | rect( <top> <right> <bottom> <left> )
```
- [`size-feature`](https://drafts.csswg.org/css-conditional-5/#typedef-size-feature)
```
webref:  undefined
csstree: <mf-plain> | <mf-boolean> | <mf-range>
```
- `style-condition`
```
not <style-in-parens> | <style-in-parens> [ [ and <style-in-parens> ]* | [ or <style-in-parens> ]* ]
```
- [`style-feature`](https://drafts.csswg.org/css-conditional-5/#typedef-style-feature)
```
webref:  undefined
csstree: <declaration>
```
- `svg-length`
```
<percentage> | <length> | <number>
```
- `svg-writing-mode`
```
lr-tb | rl-tb | tb-rl | lr | rl | tb
```
- [`top`](https://drafts.csswg.org/css2/#value-def-top)
```
webref:  undefined
csstree: <length> | auto
```
- `try-tactic`
```
flip-block || flip-inline || flip-start
```
- [`url-modifier`](https://drafts.csswg.org/css-values-4/#typedef-url-modifier)
```
webref:  undefined
csstree: <ident> | <function-token> <any-value> )
```
- `x`
```
<number>
```
- `xywh()`
```
xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <'border-radius'> ]? )
```
- `y`
```
<number>
```
</details>


<details>
<summary>26 type patches with a different syntax in Webref</summary>

- [`anchor-size()`](https://drafts.csswg.org/css-anchor-position-1/#funcdef-anchor-size)
```
webref:  anchor-size( [ <anchor-name> || <anchor-size> ]? , <length-percentage>? )
csstree: anchor-size( [ <anchor-element> || <anchor-size> ]? , <length-percentage>? )
```
- [`anchor()`](https://drafts.csswg.org/css-anchor-position-1/#funcdef-anchor)
```
webref:  anchor( <anchor-name>? && <anchor-side>, <length-percentage>? )
csstree: anchor( <anchor-element>? && <anchor-side>, <length-percentage>? )
```
- [`attr-name`](https://drafts.csswg.org/css-values-5/#typedef-attr-name)
```
webref:  [ <ident-token>? '|' ]? <ident-token>
csstree: <wq-name>
```
- [`bg-clip`](https://drafts.csswg.org/css-backgrounds-4/#typedef-bg-clip)
```
webref:  <visual-box> | border-area| text
csstree: <box> | border | text
```
- [`color`](https://drafts.csswg.org/css-color-5/#typedef-color)
```
webref:  <color-base> | currentColor | <system-color> | <contrast-color()> | <device-cmyk()> | <light-dark()>
csstree: <color-base> | currentColor | <system-color> | <device-cmyk()>  | <light-dark()> | <-non-standard-color>
```
- [`color-function`](https://drafts.csswg.org/css-color-hdr-1/#typedef-color-function)
```
webref:  <rgb()> | <rgba()> | <hsl()> | <hsla()> | <hwb()> | <lab()> | <lch()> | <oklab()> | <oklch()> | <ictcp()> | <jzazbz()> | <jzczhz()> | <color()>
csstree: <rgb()> | <rgba()> | <hsl()> | <hsla()> | <hwb()> | <lab()> | <lch()> | <oklab()> | <oklch()> | <color()>
```
- [`color()`](https://drafts.csswg.org/css-color-5/#funcdef-color)
```
webref:  color( [from <color>]? <colorspace-params> [ / [ <alpha-value> | none ] ]? )
csstree: color( <colorspace-params> [ / [ <alpha-value> | none ] ]? )
```
- [`colorspace-params`](https://drafts.csswg.org/css-color-5/#typedef-colorspace-params)
```
webref:  [<custom-params> | <predefined-rgb-params> | <xyz-params>]
csstree: [ <predefined-rgb-params> | <xyz-params>]
```
- [`container-condition`](https://drafts.csswg.org/css-conditional-5/#typedef-container-condition)
```
webref:  [ <container-name>? <container-query>? ]!
csstree: not <query-in-parens> | <query-in-parens> [ [ and <query-in-parens> ]* | [ or <query-in-parens> ]* ]
```
- [`content-list`](https://drafts.csswg.org/css-gcpm-3/#content-list)
```
webref:  [ <string> | <counter()> | <counters()> | <content()> | <attr()> ]+
csstree: [ <string> | contents | <image> | <counter> | <quote> | <target> | <leader()> | <attr()> ]+
```
- [`coord-box`](https://drafts.csswg.org/css-box-4/#typedef-coord-box)
```
webref:  <paint-box> | view-box
csstree: content-box | padding-box | border-box | fill-box | stroke-box | view-box
```
- [`element()`](https://drafts.csswg.org/css-images-4/#funcdef-element)
```
webref:  element( <id-selector> )
csstree: element( <custom-ident> , [ first | start | last | first-except ]? ) | element( <id-selector> )
```
- [`generic-family`](https://drafts.csswg.org/css-fonts-4/#typedef-generic-family)
```
webref:  <generic-script-specific>| <generic-complete> | <generic-incomplete>
csstree: <generic-script-specific>| <generic-complete> | <generic-incomplete> | <-non-standard-generic-family>
```
- [`generic-script-specific`](https://drafts.csswg.org/css-fonts-4/#typedef-generic-script-specific)
```
webref:  generic(fangsong) | generic(kai) | generic(khmer-mul) | generic(nastaliq)
csstree: generic(kai) | generic(fangsong) | generic(nastaliq)
```
- [`gradient`](https://drafts.csswg.org/css-images-4/#typedef-gradient)
```
webref:  [ <linear-gradient()> | <repeating-linear-gradient()> | <radial-gradient()> | <repeating-radial-gradient()> | <conic-gradient()> | <repeating-conic-gradient()> ]
csstree: | <-legacy-gradient>
```
- [`legacy-pseudo-element-selector`](https://drafts.csswg.org/selectors-4/#typedef-legacy-pseudo-element-selector)
```
webref:  : [before | after | first-line | first-letter]
csstree:  ':' [before | after | first-line | first-letter]
```
- [`oklab()`](https://drafts.csswg.org/css-color-5/#funcdef-oklab)
```
webref:  oklab([from <color>]? [<percentage> | <number> | none] [<percentage> | <number> | none] [<percentage> | <number> | none] [ / [<alpha-value> | none] ]? )
csstree: oklab( [ <percentage> | <number> | none] [ <percentage> | <number> | none] [ <percentage> | <number> | none] [ / [<alpha-value> | none] ]? )
```
- [`oklch()`](https://drafts.csswg.org/css-color-5/#funcdef-oklch)
```
webref:  oklch([from <color>]? [<percentage> | <number> | none] [<percentage> | <number> | none] [<hue> | none] [ / [<alpha-value> | none] ]? )
csstree: oklch( [ <percentage> | <number> | none] [ <percentage> | <number> | none] [ <hue> | none] [ / [<alpha-value> | none] ]? )
```
- [`paint`](https://drafts.fxtf.org/fill-stroke-3/#typedef-paint)
```
webref:  none | <image> | <svg-paint>
csstree: none | <color> | <url> [ none | <color> ]? | context-fill | context-stroke
```
- [`predefined-rgb`](https://drafts.csswg.org/css-color-hdr-1/#typedef-predefined-rgb)
```
webref:  srgb | srgb-linear | display-p3 | a98-rgb | prophoto-rgb | rec2020 | rec2100-pq | rec2100-hlg | rec2100-linear
csstree: srgb | srgb-linear | display-p3 | a98-rgb | prophoto-rgb | rec2020
```
- [`pseudo-element-selector`](https://drafts.csswg.org/selectors-4/#typedef-pseudo-element-selector)
```
webref:  : <pseudo-class-selector> | <legacy-pseudo-element-selector>
csstree: ':' <pseudo-class-selector> | <legacy-pseudo-element-selector>
```
- [`query-in-parens`](https://drafts.csswg.org/css-conditional-5/#typedef-query-in-parens)
```
webref:  ( <container-query> ) | ( <size-feature> ) | style( <style-query> ) | scroll-state( <scroll-state-query> ) | <general-enclosed>
csstree: ( <container-condition> ) | ( <size-feature> ) | style( <style-query> ) | <general-enclosed>
```
- [`style-in-parens`](https://drafts.csswg.org/css-conditional-5/#typedef-style-in-parens)
```
webref:  ( <style-query> ) | ( <style-feature> ) | <general-enclosed>
csstree: ( <style-condition> ) | ( <style-feature> ) | <general-enclosed>
```
- [`style-query`](https://drafts.csswg.org/css-conditional-5/#typedef-style-query)
```
webref:  not <style-in-parens> | <style-in-parens> [ [ and <style-in-parens> ]* | [ or <style-in-parens> ]* ] | <style-feature>
csstree: <style-condition> | <style-feature>
```
- [`url`](https://drafts.csswg.org/css-values-4/#url-value)
```
webref:  <url()> | <src()>
csstree: url( <string> <url-modifier>* ) | <url-token>
```
- [`xyz-params`](https://drafts.csswg.org/css-color-5/#typedef-xyz-params)
```
webref:  <xyz> [ <number> | <percentage> | none ]{3}
csstree: <xyz-space> [ <number> | <percentage> | none ]{3}
```
</details>


<details>
<summary>38 type patches already in Webref</summary>

- [`anchor-name`](https://drafts.csswg.org/css-anchor-position-1/#typedef-anchor-name)
- [`anchor-side`](https://drafts.csswg.org/css-anchor-position-1/#typedef-anchor-side)
- [`anchor-size`](https://drafts.csswg.org/css-anchor-position-1/#typedef-anchor-size)
- [`cmyk-component`](https://drafts.csswg.org/css-color-5/#typedef-cmyk-component)
- [`color-base`](https://drafts.csswg.org/css-color-5/#typedef-color-base)
- [`color-interpolation-method`](https://drafts.csswg.org/css-color-5/#color-interpolation-method)
- [`color-mix()`](https://drafts.csswg.org/css-color-5/#funcdef-color-mix)
- [`color-space`](https://drafts.csswg.org/css-color-5/#typedef-color-space)
- [`combinator`](https://drafts.csswg.org/selectors-4/#typedef-combinator)
- [`complex-real-selector`](https://drafts.csswg.org/selectors-4/#typedef-complex-real-selector)
- [`complex-real-selector-list`](https://drafts.csswg.org/selectors-4/#typedef-complex-real-selector-list)
- [`complex-selector`](https://drafts.csswg.org/selectors-4/#typedef-complex-selector)
- [`complex-selector-unit`](https://drafts.csswg.org/selectors-4/#typedef-complex-selector-unit)
- [`compound-selector`](https://drafts.csswg.org/selectors-4/#typedef-compound-selector)
- [`container-name`](https://drafts.csswg.org/css-conditional-5/#typedef-container-name)
- [`custom-color-space`](https://drafts.csswg.org/css-color-5/#typedef-custom-color-space)
- [`device-cmyk()`](https://drafts.csswg.org/css-color-5/#funcdef-device-cmyk)
- [`font-variant-css2`](https://drafts.csswg.org/css-fonts-4/#font-variant-css21-values)
- [`font-width-css3`](https://drafts.csswg.org/css-fonts-4/#font-width-css3-values)
- [`general-enclosed`](https://drafts.csswg.org/mediaqueries-5/#typedef-general-enclosed)
- [`generic-complete`](https://drafts.csswg.org/css-fonts-4/#typedef-generic-complete)
- [`generic-incomplete`](https://drafts.csswg.org/css-fonts-4/#typedef-generic-incomplete)
- [`generic-voice`](https://drafts.csswg.org/css-speech-1/#typedef-generic-voice)
- [`legacy-device-cmyk-syntax`](https://drafts.csswg.org/css-color-5/#typedef-legacy-device-cmyk-syntax)
- [`modern-device-cmyk-syntax`](https://drafts.csswg.org/css-color-5/#typedef-modern-device-cmyk-syntax)
- [`offset-path`](https://drafts.fxtf.org/motion-1/#typedef-offset-path)
- [`position-area`](https://drafts.csswg.org/css-anchor-position-1/#typedef-position-area)
- [`predefined-rgb-params`](https://drafts.csswg.org/css-color-5/#typedef-predefined-rgb-params)
- [`pseudo-compound-selector`](https://drafts.csswg.org/selectors-4/#typedef-pseudo-compound-selector)
- [`relative-real-selector`](https://drafts.csswg.org/selectors-4/#typedef-relative-real-selector)
- [`relative-real-selector-list`](https://drafts.csswg.org/selectors-4/#typedef-relative-real-selector-list)
- [`selector-list`](https://drafts.csswg.org/selectors-4/#typedef-selector-list)
- [`simple-selector`](https://drafts.csswg.org/selectors-4/#typedef-simple-selector)
- [`simple-selector-list`](https://drafts.csswg.org/selectors-4/#typedef-simple-selector-list)
- [`single-animation-composition`](https://drafts.csswg.org/css-animations-2/#typedef-single-animation-composition)
- [`system-family-name`](https://drafts.csswg.org/css-fonts-4/#system-family-name-value)
- [`try-size`](https://drafts.csswg.org/css-anchor-position-1/#typedef-try-size)
- [`xyz-space`](https://drafts.csswg.org/css-color-4/#typedef-xyz-space)
</details>
