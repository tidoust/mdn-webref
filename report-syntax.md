# Syntax mismatches between MDN data and Webref

Generated on **2025-05-05T08:51:54.494Z** using **v2.21.0** of MDN data and **v6.20.9** of `@webref/css`.


<details>
<summary>15 at-rules mismatches (out of 18 at-rules in common)</summary>

- [`@charset`](https://drafts.csswg.org/css-syntax-3/#at-ruledef-charset)
```
webref: unknown syntax
mdn:    @charset "<charset>";
```
- [`@counter-style`](https://drafts.csswg.org/css-counter-styles-3/#at-ruledef-counter-style)
```
webref: @counter-style <counter-style-name> {
  [ system: [ cyclic | numeric | alphabetic | symbolic | additive | [fixed <integer>?] | [ extends <counter-style-name> ] ]; ] ||
  [ negative: [ <symbol> <symbol>? ]; ] ||
  [ prefix: [ <symbol> ]; ] ||
  [ suffix: [ <symbol> ]; ] ||
  [ range: [ [ [ <integer> | infinite ]{2} ]# | auto ]; ] ||
  [ pad: [ <integer [0,∞]> && <symbol> ]; ] ||
  [ fallback: [ <counter-style-name> ]; ] ||
  [ symbols: [ <symbol>+ ]; ] ||
  [ additive-symbols: [ [ <integer [0,∞]> && <symbol> ]# ]; ] ||
  [ speak-as: [ auto | bullets | numbers | words | spell-out | <counter-style-name> ]; ]
}
mdn:    @counter-style <counter-style-name> {
  [ system: <counter-system>; ] ||
  [ symbols: <counter-symbols>; ] ||
  [ additive-symbols: <additive-symbols>; ] ||
  [ negative: <negative-symbol>; ] ||
  [ prefix: <prefix>; ] ||
  [ suffix: <suffix>; ] ||
  [ range: <range>; ] ||
  [ pad: <padding>; ] ||
  [ speak-as: <speak-as>; ] ||
  [ fallback: <counter-style-name>; ]
}
```
- [`@font-face`](https://drafts.csswg.org/css-fonts-4/#at-font-face-rule)
```
webref: @font-face {
  [ font-family: [ <family-name> ]; ] ||
  [ src: [ <font-src-list> ]; ] ||
  [ font-style: [ auto | normal | italic | left | right | oblique [ <angle [-90deg,90deg]>{1,2} ]? ]; ] ||
  [ font-weight: [ auto | <font-weight-absolute>{1,2} ]; ] ||
  [ font-width: [ auto | <'font-width'>{1,2} ]; ] ||
  [ unicode-range: [ <unicode-range-token># ]; ] ||
  [ font-feature-settings: [ normal | <feature-tag-value># ]; ] ||
  [ font-variation-settings: [ normal | [ <string> <number>]# ]; ] ||
  [ font-named-instance: [ auto | <string> ]; ] ||
  [ font-display: [ auto | block | swap | fallback | optional ]; ] ||
  [ font-language-override: [ normal | <string> ]; ] ||
  [ ascent-override: [ normal | <percentage [0,∞]> ]; ] ||
  [ descent-override: [ normal | <percentage [0,∞]> ]; ] ||
  [ line-gap-override: [ normal | <percentage [0,∞]> ]; ] ||
  [ font-size: [ auto | [<number>]{1,2} ]; ] ||
  [ size-adjust: [ <percentage [0,∞]> ]; ] ||
  [ ascent-override: [ [ normal | <percentage [0,∞]> ]{1,2} ]; ] ||
  [ descent-override: [ [ normal | <percentage [0,∞]> ]{1,2} ]; ] ||
  [ line-gap-override: [ [ normal | <percentage [0,∞]> ]{1,2} ]; ] ||
  [ superscript-position-override: [ [ normal | from-font | <percentage> ]{1,2} ]; ] ||
  [ subscript-position-override: [ [ normal | from-font | <percentage> ]{1,2} ]; ] ||
  [ superscript-size-override: [ [ normal | from-font | <percentage [0,∞]> ]{1,2} ]; ] ||
  [ subscript-size-override: [ [ normal | from-font | <percentage [0,∞]> ]{1,2} ]; ]
}
mdn:    @font-face {
  [ font-family: <family-name>; ] ||
  [ src: <src>; ] ||
  [ unicode-range: <unicode-range>; ] ||
  [ font-variant: <font-variant>; ] ||
  [ font-feature-settings: <font-feature-settings>; ] ||
  [ font-variation-settings: <font-variation-settings>; ] ||
  [ font-stretch: <font-stretch>; ] ||
  [ font-weight: <font-weight>; ] ||
  [ font-style: <font-style>; ] ||
  [ size-adjust: <size-adjust>; ] ||
  [ ascent-override: <ascent-override>; ] ||
  [ descent-override: <descent-override>; ] ||
  [ line-gap-override: <line-gap-override>; ]
}
```
- [`@font-feature-values`](https://drafts.csswg.org/css-fonts-4/#at-ruledef-font-feature-values)
```
webref: @font-feature-values <family-name># {
  [ font-display: [ auto | block | swap | fallback | optional ]; ] ||
  [ @stylistic { <declaration-list> } ] ||
  [ @historical-forms { <declaration-list> } ] ||
  [ @styleset { <declaration-list> } ] ||
  [ @character-variant { <declaration-list> } ] ||
  [ @swash { <declaration-list> } ] ||
  [ @ornaments { <declaration-list> } ] ||
  [ @annotation { <declaration-list> } ]
}
mdn:    @font-feature-values <family-name># {
  <feature-value-block-list>
}
```
- [`@font-palette-values`](https://drafts.csswg.org/css-fonts-4/#at-ruledef-font-palette-values)
```
webref: @font-palette-values <dashed-ident> {
  [ font-family: [ <family-name># ]; ] ||
  [ base-palette: [ light | dark | <integer [0,∞]> ]; ] ||
  [ override-colors: [ [ <integer [0,∞]> <color> ]# ]; ]
}
mdn:    @font-palette-values <dashed-ident> {
  <declaration-list>
}
```
- [`@import`](https://drafts.csswg.org/css-cascade-5/#at-ruledef-import)
```
webref: @import [ <url> | <string> ] [ layer | layer(<layer-name>) ]? <import-conditions> ;
mdn:    @import [ <string> | <url> ]
        [ layer | layer(<layer-name>) ]?
        [ supports( [ <supports-condition> | <declaration> ] ) ]?
        <media-query-list>? ;
```
- [`@layer`](https://drafts.csswg.org/css-cascade-5/#at-ruledef-layer)
```
webref: @layer <layer-name>? { <rule-list> } | @layer <layer-name>#;
mdn:    @layer [ <layer-name># | <layer-name>?  {
  <stylesheet>
} ]
```
- [`@media`](https://drafts.csswg.org/css-conditional-3/#at-ruledef-media)
```
webref: @media <media-query-list> { <rule-list> }
mdn:    @media <media-query-list> {
  <group-rule-body>
}
```
- [`@namespace`](https://drafts.csswg.org/css-namespaces-3/#at-ruledef-namespace)
```
webref: @namespace <namespace-prefix>? [ <string> | <url> ] ;
mdn:    @namespace <namespace-prefix>? [ <string> | <url> ];
```
- [`@page`](https://drafts.csswg.org/css-page-3/#at-ruledef-page)
```
webref: @page <page-selector-list>? {
  [ size: [ <length [0,∞]>{1,2} | auto | [ <page-size> || [ portrait | landscape ] ] ]; ] ||
  [ page-orientation: [ upright | rotate-left | rotate-right ]; ] ||
  [ marks: [ none | [ crop || cross ] ]; ] ||
  [ bleed: [ auto | <length> ]; ]
}
mdn:    @page <page-selector-list> {
  <page-body>
}
```
- [`@property`](https://drafts.css-houdini.org/css-properties-values-api-1/#at-ruledef-property)
```
webref: @property <custom-property-name> {
  [ syntax: [ <string> ]; ] ||
  [ inherits: [ true | false ]; ] ||
  [ initial-value: [ <declaration-value>? ]; ]
}
mdn:    @property <custom-property-name> {
  <declaration-list>
}
```
- [`@scope`](https://drafts.csswg.org/css-cascade-6/#at-ruledef-scope)
```
webref: @scope [(<scope-start>)]? [to (<scope-end>)]? { <block-contents> }
mdn:    @scope [(<scope-start>)]? [to (<scope-end>)]? {
  <rule-list>
}
```
- [`@starting-style`](https://drafts.csswg.org/css-transitions-2/#at-ruledef-starting-style)
```
webref: unknown syntax
mdn:    @starting-style {
  <declaration-list> | <group-rule-body>
}
```
- [`@supports`](https://drafts.csswg.org/css-conditional-3/#at-ruledef-supports)
```
webref: @supports <supports-condition> { <rule-list> }
mdn:    @supports <supports-condition> {
  <group-rule-body>
}
```
- [`@view-transition`](https://drafts.csswg.org/css-view-transitions-2/#at-view-transition-rule)
```
webref: @view-transition {
  [ navigation: [ auto | none ]; ] ||
  [ types: [ none | <custom-ident>+ ]; ]
}
mdn:    @view-transition {
  <declaration-list>
}
```
</details>


<details>
<summary>23 functions mismatches (out of 116 functions in common)</summary>

- [`attr()`](https://drafts.csswg.org/css-values-5/#funcdef-attr)
```
webref: attr( <attr-name> <attr-type>? , <declaration-value>?)
mdn:    attr( <attr-name> <type-or-unit>? [, <attr-fallback> ]? )
```
- [`clamp()`](https://drafts.csswg.org/css-values-4/#funcdef-clamp)
```
webref: clamp( [ <calc-sum> | none ], <calc-sum>, [ <calc-sum> | none ] )
mdn:    clamp( <calc-sum>#{3} )
```
- [`cross-fade()`](https://drafts.csswg.org/css-images-4/#funcdef-cross-fade)
```
webref: cross-fade( <cf-image># )
mdn:    cross-fade( <cf-mixing-image> , <cf-final-image>? )
```
- [`env()`](https://drafts.csswg.org/css-env-1/#funcdef-env)
```
webref: env( <custom-ident> <integer [0,∞]>*, <declaration-value>? )
mdn:    env( <custom-ident> , <declaration-value>? )
```
- [`fit-content()`](https://drafts.csswg.org/css-grid-2/#funcdef-grid-template-columns-fit-content) for `grid-template-columns`
```
webref: fit-content( <length-percentage> )
mdn:    fit-content( <length-percentage [0,∞]> )
```
- [`fit-content()`](https://drafts.csswg.org/css-grid-2/#funcdef-grid-template-columns-fit-content) for `grid-template-rows`
```
webref: fit-content( <length-percentage> )
mdn:    fit-content( <length-percentage [0,∞]> )
```
- [`hsl()`](https://drafts.csswg.org/css-color-4/#funcdef-hsl)
```
webref: [ <legacy-hsl-syntax> | <modern-hsl-syntax> ]
mdn:    hsl( <hue>, <percentage>, <percentage>, <alpha-value>? ) | hsl( [ <hue> | none ] [ <percentage> | <number> | none ] [ <percentage> | <number> | none ] [ / [ <alpha-value> | none ] ]? )
```
- [`hsla()`](https://drafts.csswg.org/css-color-4/#funcdef-hsla)
```
webref: [ <legacy-hsla-syntax> | <modern-hsla-syntax> ]
mdn:    hsla( <hue>, <percentage>, <percentage>, <alpha-value>? ) | hsla( [ <hue> | none ] [ <percentage> | <number> | none ] [ <percentage> | <number> | none ] [ / [ <alpha-value> | none ] ]? )
```
- [`hwb()`](https://drafts.csswg.org/css-color-5/#funcdef-hwb)
```
webref: hwb([from <color>]? [<hue> | none] [<percentage> | <number> | none] [<percentage> | <number> | none] [ / [<alpha-value> | none] ]? )
mdn:    hwb( [ <hue> | none ] [ <percentage> | <number> | none ] [ <percentage> | <number> | none ] [ / [ <alpha-value> | none ] ]? )
```
- [`lab()`](https://drafts.csswg.org/css-color-5/#funcdef-lab)
```
webref: lab([from <color>]? [<percentage> | <number> | none] [<percentage> | <number> | none] [<percentage> | <number> | none] [ / [<alpha-value> | none] ]? )
mdn:    lab( [<percentage> | <number> | none] [ <percentage> | <number> | none] [ <percentage> | <number> | none] [ / [<alpha-value> | none] ]? )
```
- [`lch()`](https://drafts.csswg.org/css-color-5/#funcdef-lch)
```
webref: lch([from <color>]? [<percentage> | <number> | none] [<percentage> | <number> | none] [<hue> | none] [ / [<alpha-value> | none] ]? )
mdn:    lch( [<percentage> | <number> | none] [ <percentage> | <number> | none] [ <hue> | none] [ / [<alpha-value> | none] ]? )
```
- [`minmax()`](https://drafts.csswg.org/css-grid-2/#funcdef-grid-template-columns-minmax) for `grid-template-columns`
```
webref: minmax(min, max)
mdn:    minmax( [ <length-percentage> | min-content | max-content | auto ] , [ <length-percentage> | <flex> | min-content | max-content | auto ] )
```
- [`minmax()`](https://drafts.csswg.org/css-grid-2/#funcdef-grid-template-columns-minmax) for `grid-template-rows`
```
webref: minmax(min, max)
mdn:    minmax( [ <length-percentage> | min-content | max-content | auto ] , [ <length-percentage> | <flex> | min-content | max-content | auto ] )
```
- [`oklab()`](https://drafts.csswg.org/css-color-5/#funcdef-oklab)
```
webref: oklab([from <color>]? [<percentage> | <number> | none] [<percentage> | <number> | none] [<percentage> | <number> | none] [ / [<alpha-value> | none] ]? )
mdn:    oklab( [ <percentage> | <number> | none] [ <percentage> | <number> | none] [ <percentage> | <number> | none] [ / [<alpha-value> | none] ]? )
```
- [`oklch()`](https://drafts.csswg.org/css-color-5/#funcdef-oklch)
```
webref: oklch([from <color>]? [<percentage> | <number> | none] [<percentage> | <number> | none] [<hue> | none] [ / [<alpha-value> | none] ]? )
mdn:    oklch( [ <percentage> | <number> | none] [ <percentage> | <number> | none] [ <hue> | none] [ / [<alpha-value> | none] ]? )
```
- [`polygon()`](https://drafts.csswg.org/css-shapes-1/#funcdef-basic-shape-polygon) for `<basic-shape>`
```
webref: polygon( <'fill-rule'>? [ round <length> ]? , [<length-percentage> <length-percentage>]# )
mdn:    polygon( <'fill-rule'>? , [ <length-percentage> <length-percentage> ]# )
```
- [`rect()`](https://drafts.fxtf.org/css-masking-1/#funcdef-clip-rect) for `clip`
```
webref: rect( <top>, <right>, <bottom>, <left> )
mdn:    rect( [ <length-percentage> | auto ]{4} [ round <'border-radius'> ]? )
```
- [`rgb()`](https://drafts.csswg.org/css-color-4/#funcdef-rgb)
```
webref: [ <legacy-rgb-syntax> | <modern-rgb-syntax> ]
mdn:    rgb( <percentage>#{3} , <alpha-value>? ) | rgb( <number>#{3} , <alpha-value>? ) | rgb( [ <number> | <percentage> | none ]{3} [ / [ <alpha-value> | none ] ]? )
```
- [`rgba()`](https://drafts.csswg.org/css-color-4/#funcdef-rgba)
```
webref: [ <legacy-rgba-syntax> | <modern-rgba-syntax> ]
mdn:    rgba( <percentage>#{3} , <alpha-value>? ) | rgba( <number>#{3} , <alpha-value>? ) | rgba( [ <number> | <percentage> | none ]{3} [ / [ <alpha-value> | none ] ]? )
```
- [`round()`](https://drafts.csswg.org/css-values-4/#funcdef-round)
```
webref: round( <rounding-strategy>?, <calc-sum>, <calc-sum>? )
mdn:    round( <rounding-strategy>?, <calc-sum>, <calc-sum> )
```
- [`scale()`](https://drafts.csswg.org/css-transforms-1/#funcdef-transform-scale) for `transform`
```
webref: scale( <number> , <number>? )
mdn:    scale( [ <number> | <percentage> ]#{1,2} )
```
- [`scaleX()`](https://drafts.csswg.org/css-transforms-1/#funcdef-transform-scalex) for `transform`
```
webref: scaleX( <number> )
mdn:    scaleX( [ <number> | <percentage> ] )
```
- [`scaleY()`](https://drafts.csswg.org/css-transforms-1/#funcdef-transform-scaley) for `transform`
```
webref: scaleY( <number> )
mdn:    scaleY( [ <number> | <percentage> ] )
```
</details>


<details>
<summary>196 properties mismatches (out of 500 properties in common)</summary>

- [`-webkit-appearance`](https://drafts.csswg.org/css-ui-4/#propdef--webkit-appearance)
```
webref: none | auto | base | <compat-auto> | <compat-special> | base
mdn:    none | button | button-bevel | caret | checkbox | default-button | inner-spin-button | listbox | listitem | media-controls-background | media-controls-fullscreen-background | media-current-time-display | media-enter-fullscreen-button | media-exit-fullscreen-button | media-fullscreen-button | media-mute-button | media-overlay-play-button | media-play-button | media-seek-back-button | media-seek-forward-button | media-slider | media-sliderthumb | media-time-remaining-display | media-toggle-closed-captions-button | media-volume-slider | media-volume-slider-container | media-volume-sliderthumb | menulist | menulist-button | menulist-text | menulist-textfield | meter | progress-bar | progress-bar-value | push-button | radio | searchfield | searchfield-cancel-button | searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | square-button | textarea | textfield | -apple-pay-button
```
- [`-webkit-line-clamp`](https://drafts.csswg.org/css-overflow-4/#propdef--webkit-line-clamp)
```
webref: none | <integer [1,∞]>
mdn:    none | <integer>
```
- [`-webkit-mask`](https://compat.spec.whatwg.org/#propdef--webkit-mask)
```
webref: <mask-layer>#
mdn:    [ <mask-reference> || <position> [ / <bg-size> ]? || <repeat-style> || [ <visual-box> | border | padding | content | text ] || [ <visual-box> | border | padding | content ] ]#
```
- [`-webkit-mask-clip`](https://compat.spec.whatwg.org/#propdef--webkit-mask-clip)
```
webref: [ <coord-box> | no-clip ]#
mdn:    [ <coord-box> | no-clip | border | padding | content | text ]#
```
- [`-webkit-mask-composite`](https://compat.spec.whatwg.org/#propdef--webkit-mask-composite)
```
webref: <compositing-operator>#
mdn:    <composite-style>#
```
- [`-webkit-mask-origin`](https://compat.spec.whatwg.org/#propdef--webkit-mask-origin)
```
webref: <coord-box>#
mdn:    [ <coord-box> | border | padding | content ]#
```
- [`-webkit-text-stroke`](https://compat.spec.whatwg.org/#propdef--webkit-text-stroke)
```
webref: <line-width> || <color>
mdn:    <length> || <color>
```
- [`-webkit-text-stroke-width`](https://compat.spec.whatwg.org/#propdef--webkit-text-stroke-width)
```
webref: <line-width>
mdn:    <length>
```
- [`-webkit-user-select`](https://drafts.csswg.org/css-ui-4/#propdef--webkit-user-select)
```
webref: unknown syntax
mdn:    auto | text | none | all
```
- [`align-items`](https://drafts.csswg.org/css-align-3/#propdef-align-items)
```
webref: normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ] | anchor-center
mdn:    normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]
```
- [`align-self`](https://drafts.csswg.org/css-align-3/#propdef-align-self)
```
webref: auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position> | anchor-center
mdn:    auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>
```
- [`alignment-baseline`](https://drafts.csswg.org/css-inline-3/#propdef-alignment-baseline)
```
webref: baseline | text-bottom | alphabetic | ideographic | middle | central | mathematical | text-top
mdn:    baseline | alphabetic | ideographic | middle | central | mathematical | text-before-edge | text-after-edge
```
- [`animation-duration`](https://drafts.csswg.org/css-animations-2/#propdef-animation-duration)
```
webref: [ auto | <time [0s,∞]> ]#
mdn:    <time>#
```
- [`appearance`](https://drafts.csswg.org/css-ui-4/#propdef-appearance)
```
webref: none | auto | base | <compat-auto> | <compat-special> | base
mdn:    none | auto | textfield | menulist-button | <compat-auto>
```
- [`background`](https://drafts.csswg.org/css-backgrounds-3/#propdef-background)
```
webref: <bg-layer>#? , <final-bg-layer>
mdn:    [ <bg-layer> , ]* <final-bg-layer>
```
- [`background-blend-mode`](https://drafts.fxtf.org/compositing-2/#propdef-background-blend-mode)
```
webref: <mix-blend-mode>#
mdn:    <blend-mode>#
```
- [`baseline-shift`](https://drafts.csswg.org/css-inline-3/#propdef-baseline-shift)
```
webref: <length-percentage> | sub | super | top | center | bottom
mdn:    <length-percentage> | sub | super | baseline
```
- [`border-block-end`](https://drafts.csswg.org/css-borders-4/#propdef-border-block-end)
```
webref: <line-width> || <line-style> || <color>
mdn:    <'border-top-width'> || <'border-top-style'> || <color>
```
- [`border-block-end-color`](https://drafts.csswg.org/css-borders-4/#propdef-border-block-end-color)
```
webref: <color> | <image-1D>
mdn:    <'border-top-color'>
```
- [`border-block-end-style`](https://drafts.csswg.org/css-borders-4/#propdef-border-block-end-style)
```
webref: <line-style>
mdn:    <'border-top-style'>
```
- [`border-block-end-width`](https://drafts.csswg.org/css-borders-4/#propdef-border-block-end-width)
```
webref: <line-width>
mdn:    <'border-top-width'>
```
- [`border-block-start`](https://drafts.csswg.org/css-borders-4/#propdef-border-block-start)
```
webref: <line-width> || <line-style> || <color>
mdn:    <'border-top-width'> || <'border-top-style'> || <color>
```
- [`border-block-start-color`](https://drafts.csswg.org/css-borders-4/#propdef-border-block-start-color)
```
webref: <color> | <image-1D>
mdn:    <'border-top-color'>
```
- [`border-block-start-style`](https://drafts.csswg.org/css-borders-4/#propdef-border-block-start-style)
```
webref: <line-style>
mdn:    <'border-top-style'>
```
- [`border-block-start-width`](https://drafts.csswg.org/css-borders-4/#propdef-border-block-start-width)
```
webref: <line-width>
mdn:    <'border-top-width'>
```
- [`border-bottom-color`](https://drafts.csswg.org/css-borders-4/#propdef-border-bottom-color)
```
webref: <color> | <image-1D>
mdn:    <'border-top-color'>
```
- [`border-bottom-left-radius`](https://drafts.csswg.org/css-borders-4/#propdef-border-bottom-left-radius)
```
webref: <length-percentage [0,∞]>{1,2}
mdn:    <length-percentage>{1,2}
```
- [`border-bottom-right-radius`](https://drafts.csswg.org/css-borders-4/#propdef-border-bottom-right-radius)
```
webref: <length-percentage [0,∞]>{1,2}
mdn:    <length-percentage>{1,2}
```
- [`border-collapse`](https://drafts.csswg.org/css-tables-3/#propdef-border-collapse)
```
webref: separate | collapse
mdn:    collapse | separate
```
- [`border-color`](https://drafts.csswg.org/css-borders-4/#propdef-border-color)
```
webref: [ <color> | <image-1D> ]{1,4}
mdn:    <color>{1,4}
```
- [`border-end-end-radius`](https://drafts.csswg.org/css-borders-4/#propdef-border-end-end-radius)
```
webref: <length-percentage [0,∞]>{1,2}
mdn:    <'border-top-left-radius'>
```
- [`border-end-start-radius`](https://drafts.csswg.org/css-borders-4/#propdef-border-end-start-radius)
```
webref: <length-percentage [0,∞]>{1,2}
mdn:    <'border-top-left-radius'>
```
- [`border-image-outset`](https://drafts.csswg.org/css-backgrounds-3/#propdef-border-image-outset)
```
webref: [ <length [0,∞]> | <number [0,∞]> ]{1,4}
mdn:    [ <length> | <number> ]{1,4}
```
- [`border-image-slice`](https://drafts.csswg.org/css-backgrounds-3/#propdef-border-image-slice)
```
webref: [<number [0,∞]> | <percentage [0,∞]>]{1,4} && fill?
mdn:    <number-percentage>{1,4} && fill?
```
- [`border-image-width`](https://drafts.csswg.org/css-backgrounds-3/#propdef-border-image-width)
```
webref: [ <length-percentage [0,∞]> | <number [0,∞]> | auto ]{1,4}
mdn:    [ <length-percentage> | <number> | auto ]{1,4}
```
- [`border-inline-end`](https://drafts.csswg.org/css-borders-4/#propdef-border-inline-end)
```
webref: <line-width> || <line-style> || <color>
mdn:    <'border-top-width'> || <'border-top-style'> || <color>
```
- [`border-inline-end-color`](https://drafts.csswg.org/css-borders-4/#propdef-border-inline-end-color)
```
webref: <color> | <image-1D>
mdn:    <'border-top-color'>
```
- [`border-inline-end-style`](https://drafts.csswg.org/css-borders-4/#propdef-border-inline-end-style)
```
webref: <line-style>
mdn:    <'border-top-style'>
```
- [`border-inline-end-width`](https://drafts.csswg.org/css-borders-4/#propdef-border-inline-end-width)
```
webref: <line-width>
mdn:    <'border-top-width'>
```
- [`border-inline-start`](https://drafts.csswg.org/css-borders-4/#propdef-border-inline-start)
```
webref: <line-width> || <line-style> || <color>
mdn:    <'border-top-width'> || <'border-top-style'> || <color>
```
- [`border-inline-start-color`](https://drafts.csswg.org/css-borders-4/#propdef-border-inline-start-color)
```
webref: <color> | <image-1D>
mdn:    <'border-top-color'>
```
- [`border-inline-start-style`](https://drafts.csswg.org/css-borders-4/#propdef-border-inline-start-style)
```
webref: <line-style>
mdn:    <'border-top-style'>
```
- [`border-inline-start-width`](https://drafts.csswg.org/css-borders-4/#propdef-border-inline-start-width)
```
webref: <line-width>
mdn:    <'border-top-width'>
```
- [`border-left-color`](https://drafts.csswg.org/css-borders-4/#propdef-border-left-color)
```
webref: <color> | <image-1D>
mdn:    <color>
```
- [`border-radius`](https://drafts.csswg.org/css-borders-4/#propdef-border-radius)
```
webref: <length-percentage [0,∞]>{1,4} [ / <length-percentage [0,∞]>{1,4} ]?
mdn:    <length-percentage>{1,4} [ / <length-percentage>{1,4} ]?
```
- [`border-right-color`](https://drafts.csswg.org/css-borders-4/#propdef-border-right-color)
```
webref: <color> | <image-1D>
mdn:    <color>
```
- [`border-spacing`](https://drafts.csswg.org/css-tables-3/#propdef-border-spacing)
```
webref: <length>{1,2}
mdn:    <length> <length>?
```
- [`border-start-end-radius`](https://drafts.csswg.org/css-borders-4/#propdef-border-start-end-radius)
```
webref: <length-percentage [0,∞]>{1,2}
mdn:    <'border-top-left-radius'>
```
- [`border-start-start-radius`](https://drafts.csswg.org/css-borders-4/#propdef-border-start-start-radius)
```
webref: <length-percentage [0,∞]>{1,2}
mdn:    <'border-top-left-radius'>
```
- [`border-top-color`](https://drafts.csswg.org/css-borders-4/#propdef-border-top-color)
```
webref: <color> | <image-1D>
mdn:    <color>
```
- [`border-top-left-radius`](https://drafts.csswg.org/css-borders-4/#propdef-border-top-left-radius)
```
webref: <length-percentage [0,∞]>{1,2}
mdn:    <length-percentage>{1,2}
```
- [`border-top-right-radius`](https://drafts.csswg.org/css-borders-4/#propdef-border-top-right-radius)
```
webref: <length-percentage [0,∞]>{1,2}
mdn:    <length-percentage>{1,2}
```
- [`bottom`](https://drafts.csswg.org/css-position-3/#propdef-bottom)
```
webref: auto | <length-percentage> | <anchor()> | <anchor-size()>
mdn:    <length> | <percentage> | auto
```
- [`box-shadow`](https://drafts.csswg.org/css-borders-4/#propdef-box-shadow)
```
webref: <spread-shadow>#
mdn:    none | <shadow>#
```
- [`caret`](https://drafts.csswg.org/css-ui-4/#propdef-caret)
```
webref: <'caret-color'> || <'caret-animation'> || <'caret-shape'>
mdn:    <'caret-color'> || <'caret-shape'>
```
- [`clear`](https://drafts.csswg.org/css-page-floats-3/#propdef-clear)
```
webref: inline-start | inline-end | block-start | block-end | left | right | top | bottom | both-inline | both-block | both | none
mdn:    none | left | right | both | inline-start | inline-end
```
- [`clip`](https://drafts.fxtf.org/css-masking-1/#propdef-clip)
```
webref: <rect()> | auto
mdn:    <shape> | auto
```
- [`column-count`](https://drafts.csswg.org/css-multicol-2/#propdef-column-count)
```
webref: auto | <integer [1,∞]>
mdn:    <integer> | auto
```
- [`column-fill`](https://drafts.csswg.org/css-multicol-2/#propdef-column-fill)
```
webref: auto | balance | balance-all
mdn:    auto | balance
```
- [`column-gap`](https://drafts.csswg.org/css-align-3/#propdef-column-gap)
```
webref: normal | <length-percentage [0,∞]>
mdn:    normal | <length-percentage>
```
- [`column-rule`](https://drafts.csswg.org/css-gaps-1/#propdef-column-rule)
```
webref: <gap-rule-list> | <gap-auto-rule-list>
mdn:    <'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>
```
- [`column-rule-color`](https://drafts.csswg.org/css-gaps-1/#propdef-column-rule-color)
```
webref: <line-color-list> | <auto-line-color-list>
mdn:    <color>
```
- [`column-rule-style`](https://drafts.csswg.org/css-gaps-1/#propdef-column-rule-style)
```
webref: <line-style-list> | <auto-line-style-list>
mdn:    <'border-style'>
```
- [`column-rule-width`](https://drafts.csswg.org/css-gaps-1/#propdef-column-rule-width)
```
webref: <line-width-list> | <auto-line-width-list>
mdn:    <'border-width'>
```
- [`column-span`](https://drafts.csswg.org/css-multicol-2/#propdef-column-span)
```
webref: none | <integer [1,∞]> | all | auto
mdn:    none | all
```
- [`column-width`](https://drafts.csswg.org/css-multicol-2/#propdef-column-width)
```
webref: auto | <length [0,∞]> | min-content | max-content | fit-content(<length-percentage>)
mdn:    <length> | auto
```
- [`columns`](https://drafts.csswg.org/css-multicol-2/#propdef-columns)
```
webref: <'column-width'> || <'column-count'> [ / <'column-height'> ]?
mdn:    <'column-width'> || <'column-count'>
```
- [`contain`](https://drafts.csswg.org/css-contain-2/#propdef-contain)
```
webref: none | strict | content | [ [size | inline-size] || layout || style || paint ]
mdn:    none | strict | content | [ [ size || inline-size ] || layout || style || paint ]
```
- [`contain-intrinsic-block-size`](https://drafts.csswg.org/css-sizing-4/#propdef-contain-intrinsic-block-size)
```
webref: auto? [ none | <length [0,∞]> ]
mdn:    auto? [ none | <length> ]
```
- [`contain-intrinsic-height`](https://drafts.csswg.org/css-sizing-4/#propdef-contain-intrinsic-height)
```
webref: auto? [ none | <length [0,∞]> ]
mdn:    auto? [ none | <length> ]
```
- [`contain-intrinsic-inline-size`](https://drafts.csswg.org/css-sizing-4/#propdef-contain-intrinsic-inline-size)
```
webref: auto? [ none | <length [0,∞]> ]
mdn:    auto? [ none | <length> ]
```
- [`contain-intrinsic-width`](https://drafts.csswg.org/css-sizing-4/#propdef-contain-intrinsic-width)
```
webref: auto? [ none | <length [0,∞]> ]
mdn:    auto? [ none | <length> ]
```
- [`content`](https://drafts.csswg.org/css-content-3/#propdef-content)
```
webref: normal | none | [ <content-replacement> | <content-list> ] [/ [ <string> | <counter> | <attr()> ]+ ]? | <element()>
mdn:    normal | none | [ <content-replacement> | <content-list> ] [/ [ <string> | <counter> ]+ ]?
```
- [`cursor`](https://drafts.csswg.org/css-ui-4/#propdef-cursor)
```
webref: [ [ <url> | <url-set> ] [<x> <y>]? ]#? [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | grab | grabbing | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out ]
mdn:    [ [ <url> [ <x> <y> ]? , ]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing ] ]
```
- [`cx`](https://svgwg.org/svg2-draft/geometry.html#CxProperty)
```
webref: <length-percentage>
mdn:    <length> | <percentage>
```
- [`cy`](https://svgwg.org/svg2-draft/geometry.html#CyProperty)
```
webref: <length-percentage>
mdn:    <length> | <percentage>
```
- [`d`](https://svgwg.org/svg2-draft/paths.html#DProperty)
```
webref: none | <string>
mdn:    none | path(<string>)
```
- [`display`](https://drafts.csswg.org/css-display-4/#propdef-display)
```
webref: [ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy> | <display-outside> || [ <display-inside> | math ]
mdn:    [ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>
```
- [`field-sizing`](https://drafts.csswg.org/css-forms-1/#propdef-field-sizing)
```
webref: fixed | content
mdn:    content | fixed
```
- [`flex-grow`](https://drafts.csswg.org/css-flexbox-1/#propdef-flex-grow)
```
webref: <number [0,∞]>
mdn:    <number>
```
- [`flex-shrink`](https://drafts.csswg.org/css-flexbox-1/#propdef-flex-shrink)
```
webref: <number [0,∞]>
mdn:    <number>
```
- [`float`](https://drafts.csswg.org/css-page-floats-3/#propdef-float)
```
webref: block-start | block-end | inline-start | inline-end | snap-block | <snap-block()> | snap-inline | <snap-inline()> | left | right | top | bottom | none | footnote
mdn:    left | right | none | inline-start | inline-end
```
- [`font`](https://drafts.csswg.org/css-fonts-4/#propdef-font)
```
webref: [ [ <'font-style'> || <font-variant-css2> || <'font-weight'> || <font-width-css3> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'># ] | <system-family-name>
mdn:    [ [ <'font-style'> || <font-variant-css21> || <'font-weight'> || <'font-stretch'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] | caption | icon | menu | message-box | small-caption | status-bar
```
- [`font-size-adjust`](https://drafts.csswg.org/css-fonts-5/#propdef-font-size-adjust)
```
webref: none | [ ex-height | cap-height | ch-width | ic-width | ic-height ]? [ from-font | <number [0,∞]> ]
mdn:    none | [ ex-height | cap-height | ch-width | ic-width | ic-height ]? [ from-font | <number> ]
```
- [`font-stretch`](https://drafts.csswg.org/css-fonts-4/#propdef-font-stretch)
```
webref: normal | <percentage [0,∞]> | ultra-condensed | extra-condensed | condensed | semi-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded
mdn:    <font-stretch-absolute>
```
- [`font-style`](https://drafts.csswg.org/css-fonts-4/#propdef-font-style)
```
webref: normal | italic | left | right | oblique <angle [-90deg,90deg]>?
mdn:    normal | italic | oblique <angle>?
```
- [`font-synthesis-style`](https://drafts.csswg.org/css-fonts-4/#propdef-font-synthesis-style)
```
webref: auto | none | oblique-only
mdn:    auto | none
```
- [`font-variant`](https://drafts.csswg.org/css-fonts-4/#propdef-font-variant)
```
webref: normal | none | [ [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ] || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || [ stylistic(<feature-value-name>) || historical-forms || styleset(<feature-value-name>#) || character-variant(<feature-value-name>#) || swash(<feature-value-name>) || ornaments(<feature-value-name>) || annotation(<feature-value-name>) ] || [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ] || [ <east-asian-variant-values> || <east-asian-width-values> || ruby ] || [ sub | super ] || [ text | emoji | unicode ] ]
mdn:    normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero || <east-asian-variant-values> || <east-asian-width-values> || ruby ]
```
- [`font-variation-settings`](https://drafts.csswg.org/css-fonts-4/#propdef-font-variation-settings)
```
webref: normal | [ <opentype-tag> <number>]#
mdn:    normal | [ <string> <number> ]#
```
- [`grid-column-gap`](https://drafts.csswg.org/css-align-3/#propdef-grid-column-gap)
```
webref: normal | <length-percentage [0,∞]>
mdn:    <length-percentage>
```
- [`grid-gap`](https://drafts.csswg.org/css-align-3/#propdef-grid-gap)
```
webref: <'row-gap'> <'column-gap'>?
mdn:    <'grid-row-gap'> <'grid-column-gap'>?
```
- [`grid-row-gap`](https://drafts.csswg.org/css-align-3/#propdef-grid-row-gap)
```
webref: normal | <length-percentage [0,∞]>
mdn:    <length-percentage>
```
- [`height`](https://drafts.csswg.org/css-sizing-3/#propdef-height)
```
webref: auto | <length-percentage [0,∞]> | min-content | max-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()> | stretch | fit-content | contain
mdn:    auto | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>
```
- [`image-orientation`](https://drafts.csswg.org/css-images-3/#propdef-image-orientation)
```
webref: from-image | none | [ <angle> || flip ]
mdn:    from-image | <angle> | [ <angle>? flip ]
```
- [`image-rendering`](https://drafts.csswg.org/css-images-3/#propdef-image-rendering)
```
webref: auto | smooth | high-quality | pixelated | crisp-edges
mdn:    auto | crisp-edges | pixelated | smooth
```
- [`initial-letter`](https://drafts.csswg.org/css-inline-3/#propdef-initial-letter)
```
webref: normal | <number [1,∞]> <integer [1,∞]> | <number [1,∞]> && [ drop | raise ]?
mdn:    normal | [ <number> <integer>? ]
```
- [`initial-letter-align`](https://drafts.csswg.org/css-inline-3/#propdef-initial-letter-align)
```
webref: [ border-box? [ alphabetic | ideographic | hanging | leading ]? ]!
mdn:    [ auto | alphabetic | hanging | ideographic ]
```
- [`inset-block-end`](https://drafts.csswg.org/css-position-3/#propdef-inset-block-end)
```
webref: auto | <length-percentage>
mdn:    <'top'>
```
- [`inset-block-start`](https://drafts.csswg.org/css-position-3/#propdef-inset-block-start)
```
webref: auto | <length-percentage>
mdn:    <'top'>
```
- [`inset-inline-end`](https://drafts.csswg.org/css-position-3/#propdef-inset-inline-end)
```
webref: auto | <length-percentage>
mdn:    <'top'>
```
- [`inset-inline-start`](https://drafts.csswg.org/css-position-3/#propdef-inset-inline-start)
```
webref: auto | <length-percentage>
mdn:    <'top'>
```
- [`isolation`](https://drafts.fxtf.org/compositing-2/#propdef-isolation)
```
webref: <isolation-mode>
mdn:    auto | isolate
```
- [`justify-items`](https://drafts.csswg.org/css-align-3/#propdef-justify-items)
```
webref: normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | legacy | legacy && [ left | right | center ] | anchor-center
mdn:    normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | legacy | legacy && [ left | right | center ]
```
- [`justify-self`](https://drafts.csswg.org/css-align-3/#propdef-justify-self)
```
webref: auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | anchor-center
mdn:    auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ]
```
- [`left`](https://drafts.csswg.org/css-position-3/#propdef-left)
```
webref: auto | <length-percentage> | <anchor()> | <anchor-size()>
mdn:    <length> | <percentage> | auto
```
- [`letter-spacing`](https://drafts.csswg.org/css-text-4/#propdef-letter-spacing)
```
webref: normal | <length-percentage>
mdn:    normal | <length>
```
- [`line-clamp`](https://drafts.csswg.org/css-overflow-4/#propdef-line-clamp)
```
webref: none | <integer [1,∞]> || <'block-ellipsis'>
mdn:    none | <integer>
```
- [`line-height`](https://drafts.csswg.org/css-inline-3/#propdef-line-height)
```
webref: normal | <number [0,∞]> | <length-percentage [0,∞]>
mdn:    normal | <number> | <length> | <percentage>
```
- [`line-height-step`](https://drafts.csswg.org/css-rhythm-1/#propdef-line-height-step)
```
webref: <length [0,∞]>
mdn:    <length>
```
- [`list-style`](https://drafts.csswg.org/css-lists-3/#propdef-list-style)
```
webref: <'list-style-position'> || <'list-style-image'> || <'list-style-type'>
mdn:    <'list-style-type'> || <'list-style-position'> || <'list-style-image'>
```
- [`margin-bottom`](https://drafts.csswg.org/css-box-4/#propdef-margin-bottom)
```
webref: <length-percentage> | auto | <anchor-size()>
mdn:    <length-percentage> | auto
```
- [`margin-left`](https://drafts.csswg.org/css-box-4/#propdef-margin-left)
```
webref: <length-percentage> | auto | <anchor-size()>
mdn:    <length-percentage> | auto
```
- [`margin-right`](https://drafts.csswg.org/css-box-4/#propdef-margin-right)
```
webref: <length-percentage> | auto | <anchor-size()>
mdn:    <length-percentage> | auto
```
- [`margin-top`](https://drafts.csswg.org/css-box-4/#propdef-margin-top)
```
webref: <length-percentage> | auto | <anchor-size()>
mdn:    <length-percentage> | auto
```
- [`margin-trim`](https://drafts.csswg.org/css-box-4/#propdef-margin-trim)
```
webref: none | [ block || inline ] | [ block-start || inline-start || block-end || inline-end ]
mdn:    none | in-flow | all
```
- [`marker`](https://svgwg.org/svg2-draft/painting.html#MarkerProperty)
```
webref: none | <marker-ref>
mdn:    none | <url>
```
- [`marker-end`](https://svgwg.org/svg2-draft/painting.html#MarkerEndProperty)
```
webref: none | <marker-ref>
mdn:    none | <url>
```
- [`marker-mid`](https://svgwg.org/svg2-draft/painting.html#MarkerMidProperty)
```
webref: none | <marker-ref>
mdn:    none | <url>
```
- [`marker-start`](https://svgwg.org/svg2-draft/painting.html#MarkerStartProperty)
```
webref: none | <marker-ref>
mdn:    none | <url>
```
- [`mask-border-slice`](https://drafts.fxtf.org/css-masking-1/#propdef-mask-border-slice)
```
webref: [ <number> | <percentage> ]{1,4} fill?
mdn:    <number-percentage>{1,4} fill?
```
- [`max-height`](https://drafts.csswg.org/css-sizing-3/#propdef-max-height)
```
webref: none | <length-percentage [0,∞]> | min-content | max-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()> | stretch | fit-content | contain
mdn:    none | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>
```
- [`max-lines`](https://drafts.csswg.org/css-overflow-4/#propdef-max-lines)
```
webref: none | <integer [1,∞]>
mdn:    none | <integer>
```
- [`max-width`](https://drafts.csswg.org/css-sizing-3/#propdef-max-width)
```
webref: none | <length-percentage [0,∞]> | min-content | max-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()> | stretch | fit-content | contain
mdn:    none | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>
```
- [`min-height`](https://drafts.csswg.org/css-sizing-3/#propdef-min-height)
```
webref: auto | <length-percentage [0,∞]> | min-content | max-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()> | stretch | fit-content | contain
mdn:    auto | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>
```
- [`min-width`](https://drafts.csswg.org/css-sizing-3/#propdef-min-width)
```
webref: auto | <length-percentage [0,∞]> | min-content | max-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()> | stretch | fit-content | contain
mdn:    auto | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>
```
- [`mix-blend-mode`](https://drafts.fxtf.org/compositing-2/#propdef-mix-blend-mode)
```
webref: <blend-mode> | plus-darker | plus-lighter
mdn:    <blend-mode> | plus-lighter
```
- [`object-fit`](https://drafts.csswg.org/css-images-4/#propdef-object-fit)
```
webref: fill | none | [contain | cover] || scale-down
mdn:    fill | contain | cover | none | scale-down
```
- [`orphans`](https://drafts.csswg.org/css-break-4/#propdef-orphans)
```
webref: <integer [1,∞]>
mdn:    <integer>
```
- [`outline-color`](https://drafts.csswg.org/css-ui-4/#propdef-outline-color)
```
webref: auto | <color> | <image-1D>
mdn:    auto | <color>
```
- [`overflow`](https://drafts.csswg.org/css-overflow-3/#propdef-overflow)
```
webref: <'overflow-block'>{1,2}
mdn:    [ visible | hidden | clip | scroll | auto ]{1,2}
```
- [`page-break-after`](https://drafts.csswg.org/css2/#propdef-page-break-after)
```
webref: auto | always | avoid | left | right | inherit
mdn:    auto | always | avoid | left | right | recto | verso
```
- [`page-break-before`](https://drafts.csswg.org/css2/#propdef-page-break-before)
```
webref: auto | always | avoid | left | right | inherit
mdn:    auto | always | avoid | left | right | recto | verso
```
- [`page-break-inside`](https://drafts.csswg.org/css2/#propdef-page-break-inside)
```
webref: avoid | auto | inherit
mdn:    auto | avoid
```
- [`perspective`](https://drafts.csswg.org/css-transforms-2/#propdef-perspective)
```
webref: none | <length [0,∞]>
mdn:    none | <length>
```
- [`pointer-events`](https://svgwg.org/svg2-draft/interact.html#PointerEventsProperty)
```
webref: auto | bounding-box | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | none
mdn:    auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit
```
- [`position`](https://drafts.csswg.org/css-position-3/#propdef-position)
```
webref: static | relative | absolute | sticky | fixed | <running()>
mdn:    static | relative | absolute | sticky | fixed
```
- [`quotes`](https://drafts.csswg.org/css-content-3/#propdef-quotes)
```
webref: auto | none | match-parent | [ <string> <string> ]+
mdn:    none | auto | [ <string> <string> ]+
```
- [`r`](https://svgwg.org/svg2-draft/geometry.html#RProperty)
```
webref: <length-percentage>
mdn:    <length> | <percentage>
```
- [`right`](https://drafts.csswg.org/css-position-3/#propdef-right)
```
webref: auto | <length-percentage> | <anchor()> | <anchor-size()>
mdn:    <length> | <percentage> | auto
```
- [`row-gap`](https://drafts.csswg.org/css-align-3/#propdef-row-gap)
```
webref: normal | <length-percentage [0,∞]>
mdn:    normal | <length-percentage>
```
- [`ruby-merge`](https://drafts.csswg.org/css-ruby-1/#propdef-ruby-merge)
```
webref: separate | merge | auto
mdn:    separate | collapse | auto
```
- [`rx`](https://svgwg.org/svg2-draft/geometry.html#RxProperty)
```
webref: <length-percentage> | auto
mdn:    <length> | <percentage>
```
- [`ry`](https://svgwg.org/svg2-draft/geometry.html#RyProperty)
```
webref: <length-percentage> | auto
mdn:    <length> | <percentage>
```
- [`scroll-padding`](https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding)
```
webref: [ auto | <length-percentage [0,∞]> ]{1,4}
mdn:    [ auto | <length-percentage> ]{1,4}
```
- [`scroll-padding-block`](https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-block)
```
webref: [ auto | <length-percentage [0,∞]> ]{1,2}
mdn:    [ auto | <length-percentage> ]{1,2}
```
- [`scroll-padding-block-end`](https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-block-end)
```
webref: auto | <length-percentage [0,∞]>
mdn:    auto | <length-percentage>
```
- [`scroll-padding-block-start`](https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-block-start)
```
webref: auto | <length-percentage [0,∞]>
mdn:    auto | <length-percentage>
```
- [`scroll-padding-bottom`](https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-bottom)
```
webref: auto | <length-percentage [0,∞]>
mdn:    auto | <length-percentage>
```
- [`scroll-padding-inline`](https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-inline)
```
webref: [ auto | <length-percentage [0,∞]> ]{1,2}
mdn:    [ auto | <length-percentage> ]{1,2}
```
- [`scroll-padding-inline-end`](https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-inline-end)
```
webref: auto | <length-percentage [0,∞]>
mdn:    auto | <length-percentage>
```
- [`scroll-padding-inline-start`](https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-inline-start)
```
webref: auto | <length-percentage [0,∞]>
mdn:    auto | <length-percentage>
```
- [`scroll-padding-left`](https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-left)
```
webref: auto | <length-percentage [0,∞]>
mdn:    auto | <length-percentage>
```
- [`scroll-padding-right`](https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-right)
```
webref: auto | <length-percentage [0,∞]>
mdn:    auto | <length-percentage>
```
- [`scroll-padding-top`](https://drafts.csswg.org/css-scroll-snap-1/#propdef-scroll-padding-top)
```
webref: auto | <length-percentage [0,∞]>
mdn:    auto | <length-percentage>
```
- [`shape-margin`](https://drafts.csswg.org/css-shapes-1/#propdef-shape-margin)
```
webref: <length-percentage [0,∞]>
mdn:    <length-percentage>
```
- [`shape-outside`](https://drafts.csswg.org/css-shapes-1/#propdef-shape-outside)
```
webref: none | [ <basic-shape> || <shape-box> ] | <image>
mdn:    none | [ <shape-box> || <basic-shape> ] | <image>
```
- [`stop-color`](https://svgwg.org/svg2-draft/pservers.html#StopColorProperty)
```
webref: unknown syntax
mdn:    <'color'>
```
- [`stop-opacity`](https://svgwg.org/svg2-draft/pservers.html#StopOpacityProperty)
```
webref: unknown syntax
mdn:    <'opacity'>
```
- [`stroke-dasharray`](https://drafts.fxtf.org/fill-stroke-3/#propdef-stroke-dasharray)
```
webref: none | [<length-percentage> | <number>]+#
mdn:    none | <dasharray>
```
- [`stroke-linejoin`](https://drafts.fxtf.org/fill-stroke-3/#propdef-stroke-linejoin)
```
webref: [ crop | arcs | miter ] || [ bevel | round | fallback ]
mdn:    miter | miter-clip | round | bevel | arcs
```
- [`stroke-width`](https://drafts.fxtf.org/fill-stroke-3/#propdef-stroke-width)
```
webref: [<length-percentage> | <number>]#
mdn:    <length-percentage> | <number>
```
- [`tab-size`](https://drafts.csswg.org/css-text-4/#propdef-tab-size)
```
webref: <number [0,∞]> | <length [0,∞]>
mdn:    <integer> | <length>
```
- [`text-align`](https://drafts.csswg.org/css-text-4/#propdef-text-align)
```
webref: start | end | left | right | center | <string> | justify | match-parent | justify-all
mdn:    start | end | left | right | center | justify | match-parent
```
- [`text-align-last`](https://drafts.csswg.org/css-text-4/#propdef-text-align-last)
```
webref: auto | start | end | left | right | center | justify | match-parent
mdn:    auto | start | end | left | right | center | justify
```
- [`text-combine-upright`](https://drafts.csswg.org/css-writing-modes-4/#propdef-text-combine-upright)
```
webref: none | all | [ digits <integer [2,4]>? ]
mdn:    none | all | [ digits <integer>? ]
```
- [`text-decoration`](https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration)
```
webref: <'text-decoration-line'> || <'text-decoration-thickness'> || <'text-decoration-style'> || <'text-decoration-color'>
mdn:    <'text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'> || <'text-decoration-thickness'>
```
- [`text-decoration-skip`](https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-skip)
```
webref: none | auto
mdn:    none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]
```
- [`text-decoration-skip-ink`](https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-skip-ink)
```
webref: auto | none | all
mdn:    auto | all | none
```
- [`text-decoration-thickness`](https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration-thickness)
```
webref: auto | from-font | <length-percentage>
mdn:    auto | from-font | <length> | <percentage> 
```
- [`text-emphasis-position`](https://drafts.csswg.org/css-text-decor-4/#propdef-text-emphasis-position)
```
webref: [ over | under ] && [ right | left ]?
mdn:    auto | [ over | under ] && [ right | left ]?
```
- [`text-indent`](https://drafts.csswg.org/css-text-4/#propdef-text-indent)
```
webref: [ <length-percentage> ] && hanging? && each-line?
mdn:    <length-percentage> && hanging? && each-line?
```
- [`text-justify`](https://drafts.csswg.org/css-text-4/#propdef-text-justify)
```
webref: [ auto | none | inter-word | inter-character | ruby ] || no-compress
mdn:    auto | inter-character | inter-word | none
```
- [`text-overflow`](https://drafts.csswg.org/css-overflow-4/#propdef-text-overflow)
```
webref: [ clip | ellipsis | <string> | fade | <fade()> ]{1,2}
mdn:    [ clip | ellipsis | <string> ]{1,2}
```
- [`text-shadow`](https://drafts.csswg.org/css-text-decor-4/#propdef-text-shadow)
```
webref: none | <shadow>#
mdn:    none | <shadow-t>#
```
- [`text-size-adjust`](https://drafts.csswg.org/css-size-adjust-1/#propdef-text-size-adjust)
```
webref: auto | none | <percentage [0,∞]>
mdn:    none | auto | <percentage>
```
- [`text-spacing-trim`](https://drafts.csswg.org/css-text-4/#propdef-text-spacing-trim)
```
webref: <spacing-trim> | auto
mdn:    space-all | normal | space-first | trim-start
```
- [`text-underline-offset`](https://drafts.csswg.org/css-text-decor-4/#propdef-text-underline-offset)
```
webref: auto | <length-percentage>
mdn:    auto | <length> | <percentage> 
```
- [`text-underline-position`](https://drafts.csswg.org/css-text-decor-4/#propdef-text-underline-position)
```
webref: auto | [ from-font | under ] || [ left | right ]
mdn:    auto | from-font | [ under || [ left | right ] ]
```
- [`text-wrap-style`](https://drafts.csswg.org/css-text-4/#propdef-text-wrap-style)
```
webref: auto | balance | stable | pretty | avoid-orphans
mdn:    auto | balance | stable | pretty
```
- [`timeline-scope`](https://drafts.csswg.org/scroll-animations-1/#propdef-timeline-scope)
```
webref: none | all | <dashed-ident>#
mdn:    none | <dashed-ident>#
```
- [`top`](https://drafts.csswg.org/css-position-3/#propdef-top)
```
webref: auto | <length-percentage> | <anchor()> | <anchor-size()>
mdn:    <length> | <percentage> | auto
```
- [`transform-origin`](https://drafts.csswg.org/css-transforms-1/#propdef-transform-origin)
```
webref: [ left | center | right | top | bottom | <length-percentage> ] | [ left | center | right | <length-percentage> ] [ top | center | bottom | <length-percentage> ] <length>? | [ [ center | left | right ] && [ center | top | bottom ] ] <length>?
mdn:    [ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?
```
- [`transition-duration`](https://drafts.csswg.org/css-transitions-1/#propdef-transition-duration)
```
webref: <time [0s,∞]>#
mdn:    <time>#
```
- [`user-select`](https://drafts.csswg.org/css-ui-4/#propdef-user-select)
```
webref: auto | text | none | contain | all
mdn:    auto | text | none | all
```
- [`vertical-align`](https://drafts.csswg.org/css-inline-3/#propdef-vertical-align)
```
webref: [ first | last] || <'alignment-baseline'> || <'baseline-shift'>
mdn:    baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>
```
- [`white-space`](https://drafts.csswg.org/css-text-4/#propdef-white-space)
```
webref: normal | pre | pre-wrap | pre-line | <'white-space-collapse'> || <'text-wrap-mode'> || <'white-space-trim'>
mdn:    normal | pre | pre-wrap | pre-line | <'white-space-collapse'> || <'text-wrap-mode'>
```
- [`white-space-collapse`](https://drafts.csswg.org/css-text-4/#propdef-white-space-collapse)
```
webref: collapse | discard | preserve | preserve-breaks | preserve-spaces | break-spaces
mdn:    collapse | preserve | preserve-breaks | preserve-spaces | break-spaces
```
- [`widows`](https://drafts.csswg.org/css-break-4/#propdef-widows)
```
webref: <integer [1,∞]>
mdn:    <integer>
```
- [`width`](https://drafts.csswg.org/css-sizing-3/#propdef-width)
```
webref: auto | <length-percentage [0,∞]> | min-content | max-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()> | stretch | fit-content | contain
mdn:    auto | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>
```
- [`word-break`](https://drafts.csswg.org/css-text-4/#propdef-word-break)
```
webref: normal | break-all | keep-all | manual | auto-phrase | break-word
mdn:    normal | break-all | keep-all | break-word | auto-phrase
```
- [`word-spacing`](https://drafts.csswg.org/css-text-4/#propdef-word-spacing)
```
webref: normal | <length-percentage>
mdn:    normal | <length>
```
- [`word-wrap`](https://drafts.csswg.org/css-text-4/#propdef-word-wrap)
```
webref: normal | break-word | anywhere
mdn:    normal | break-word
```
- [`x`](https://svgwg.org/svg2-draft/geometry.html#XProperty)
```
webref: <length-percentage>
mdn:    <length> | <percentage>
```
- [`y`](https://svgwg.org/svg2-draft/geometry.html#YProperty)
```
webref: <length-percentage>
mdn:    <length> | <percentage>
```
- [`z-index`](https://drafts.csswg.org/css2/#propdef-z-index)
```
webref: auto | <integer> | inherit
mdn:    auto | <integer>
```
- [`zoom`](https://drafts.csswg.org/css-viewport/#propdef-zoom)
```
webref: <number [0,∞]> || <percentage [0,∞]>
mdn:    normal | reset | <number [0,∞]> || <percentage [0,∞]>
```
</details>


<details>
<summary>21 selectors mismatches (out of 106 selectors in common)</summary>

- [`::cue-region()`](https://w3c.github.io/webvtt/#selectordef-cue-region-selector)
```
webref: ::cue-region(selector)
mdn:    ::cue-region( <selector> )
```
- [`::cue()`](https://w3c.github.io/webvtt/#selectordef-cue-selector)
```
webref: ::cue(selector)
mdn:    ::cue( <selector> )
```
- [`::slotted()`](https://drafts.csswg.org/css-scoping-1/#selectordef-slotted)
```
webref: unknown syntax
mdn:    ::slotted( <compound-selector> )
```
- [`::view-transition-group()`](https://drafts.csswg.org/css-view-transitions-1/#selectordef-view-transition-group)
```
webref: unknown syntax
mdn:    ::view-transition-group([ '*' | <custom-ident> ])
```
- [`::view-transition-image-pair()`](https://drafts.csswg.org/css-view-transitions-1/#selectordef-view-transition-image-pair)
```
webref: unknown syntax
mdn:    ::view-transition-image-pair([ '*' | <custom-ident> ])
```
- [`::view-transition-new()`](https://drafts.csswg.org/css-view-transitions-1/#selectordef-view-transition-new)
```
webref: unknown syntax
mdn:    ::view-transition-new([ '*' | <custom-ident> ])
```
- [`::view-transition-old()`](https://drafts.csswg.org/css-view-transitions-1/#selectordef-view-transition-old)
```
webref: unknown syntax
mdn:    ::view-transition-old([ '*' | <custom-ident> ])
```
- [`:active-view-transition-type()`](https://drafts.csswg.org/css-view-transitions-2/#active-view-transition-type-pseudo)
```
webref: unknown syntax
mdn:    :active-view-transition-type( <custom-ident># )
```
- [`:dir()`](https://drafts.csswg.org/selectors-4/#dir-pseudo)
```
webref: unknown syntax
mdn:    :dir( [ ltr | rtl ] )
```
- [`:has()`](https://drafts.csswg.org/selectors-4/#has-pseudo)
```
webref: unknown syntax
mdn:    :has( <forgiving-relative-selector-list> )
```
- [`:host-context()`](https://drafts.csswg.org/css-scoping-1/#selectordef-host-context)
```
webref: unknown syntax
mdn:    :host-context( <compound-selector> )
```
- [`:host()`](https://drafts.csswg.org/css-scoping-1/#selectordef-host-function)
```
webref: unknown syntax
mdn:    :host( <compound-selector> )
```
- [`:is()`](https://drafts.csswg.org/selectors-4/#matches-pseudo)
```
webref: unknown syntax
mdn:    :is( <forgiving-selector-list> )
```
- [`:lang()`](https://drafts.csswg.org/selectors-4/#lang-pseudo)
```
webref: unknown syntax
mdn:    :lang( <language-code> )
```
- [`:not()`](https://drafts.csswg.org/selectors-4/#negation-pseudo)
```
webref: unknown syntax
mdn:    :not( <complex-selector-list> )
```
- [`:nth-child()`](https://drafts.csswg.org/selectors-4/#nth-child-pseudo)
```
webref: :nth-child(An+B [of S]? )
mdn:    :nth-child( <an+b> [ of <complex-selector-list> ]? )
```
- [`:nth-last-child()`](https://drafts.csswg.org/selectors-4/#nth-last-child-pseudo)
```
webref: :nth-last-child(An+B [of S]? )
mdn:    :nth-last-child( <an+b> [ of <complex-selector-list> ]? )
```
- [`:nth-last-of-type()`](https://drafts.csswg.org/selectors-4/#nth-last-of-type-pseudo)
```
webref: :nth-last-of-type(An+B)
mdn:    :nth-last-of-type( <an+b> )
```
- [`:nth-of-type()`](https://drafts.csswg.org/selectors-4/#nth-of-type-pseudo)
```
webref: :nth-of-type(An+B)
mdn:    :nth-of-type( <an+b> )
```
- [`:state()`](https://drafts.csswg.org/selectors-5/#state-pseudo)
```
webref: :state( <ident> )
mdn:    :state( <custom-ident> )
```
- [`:where()`](https://drafts.csswg.org/selectors-4/#where-pseudo)
```
webref: unknown syntax
mdn:    :where( <complex-selector-list> )
```
</details>


<details>
<summary>103 syntaxes mismatches (out of 360 syntaxes in common)</summary>

- [`<absolute-size>`](https://drafts.csswg.org/css2/#value-def-absolute-size)
```
webref: unknown syntax
mdn:    xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large
```
- [`<an+b>`](https://drafts.csswg.org/css-syntax-3/#anb-production)
```
webref: odd | even | <integer> | <n-dimension> | '+'? n | -n | <ndashdigit-dimension> | '+'? <ndashdigit-ident> | <dashndashdigit-ident> | <n-dimension> <signed-integer> | '+'? n <signed-integer> | -n <signed-integer> | <ndash-dimension> <signless-integer> | '+'? n- <signless-integer> | -n- <signless-integer> | <n-dimension> ['+' | '-'] <signless-integer> | '+'? n ['+' | '-'] <signless-integer> | -n ['+' | '-'] <signless-integer>
mdn:    odd | even | <integer> | <n-dimension> | '+'?† n | -n | <ndashdigit-dimension> | '+'?† <ndashdigit-ident> | <dashndashdigit-ident> | <n-dimension> <signed-integer> | '+'?† n <signed-integer> | -n <signed-integer> | <ndash-dimension> <signless-integer> | '+'?† n- <signless-integer> | -n- <signless-integer> | <n-dimension> ['+' | '-'] <signless-integer> | '+'?† n ['+' | '-'] <signless-integer> | -n ['+' | '-'] <signless-integer>
```
- [`<baseline-position>`](https://drafts.csswg.org/css-align-3/#typedef-baseline-position)
```
webref: [ first | last ]? && baseline
mdn:    [ first | last ]? baseline
```
- [`<basic-shape>`](https://drafts.csswg.org/css-shapes-1/#typedef-basic-shape)
```
webref: unknown syntax
mdn:    <inset()> | <xywh()> | <rect()> | <circle()> | <ellipse()> | <polygon()> | <path()>
```
- [`<bg-clip>`](https://drafts.csswg.org/css-backgrounds-4/#typedef-bg-clip)
```
webref: <visual-box> | border-area| text
mdn:    <visual-box> | border-area | text
```
- [`<bg-image>`](https://drafts.csswg.org/css-backgrounds-3/#typedef-bg-image)
```
webref: <image> | none
mdn:    none | <image>
```
- [`<bg-position>`](https://drafts.csswg.org/css-backgrounds-4/#typedef-bg-position)
```
webref: <position> | <position-three>
mdn:    [ [ left | center | right | top | bottom | <length-percentage> ] | [ left | center | right | <length-percentage> ] [ top | center | bottom | <length-percentage> ] | [ center | [ left | right ] <length-percentage>? ] && [ center | [ top | bottom ] <length-percentage>? ] ]
```
- [`<bg-size>`](https://drafts.csswg.org/css-backgrounds-3/#typedef-bg-size)
```
webref: [ <length-percentage [0,∞]> | auto ]{1,2} | cover | contain
mdn:    [ <length-percentage> | auto ]{1,2} | cover | contain
```
- [`<blend-mode>`](https://drafts.fxtf.org/compositing-2/#ltblendmodegt)
```
webref: normal | multiply | screen | overlay | darken | lighten | color-dodge |color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity
mdn:    normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity
```
- [`<calc-product>`](https://drafts.csswg.org/css-values-4/#typedef-calc-product)
```
webref: <calc-value> [ [ '*' | / ] <calc-value> ]*
mdn:    <calc-value> [ '*' <calc-value> | '/' <number> ]*
```
- [`<calc-value>`](https://drafts.csswg.org/css-values-4/#typedef-calc-value)
```
webref: <number> | <dimension> | <percentage> | <calc-keyword> | ( <calc-sum> )
mdn:    <number> | <dimension> | <percentage> | <calc-constant> | ( <calc-sum> )
```
- [`<color-function>`](https://drafts.csswg.org/css-color-hdr-1/#typedef-color-function)
```
webref: <rgb()> | <rgba()> | <hsl()> | <hsla()> | <hwb()> | <lab()> | <lch()> | <oklab()> | <oklch()> | <ictcp()> | <jzazbz()> | <jzczhz()> | <color()>
mdn:    <rgb()> | <rgba()> | <hsl()> | <hsla()> | <hwb()> | <lab()> | <lch()> | <oklab()> | <oklch()> | <color()>
```
- [`<color>`](https://drafts.csswg.org/css-color-5/#typedef-color)
```
webref: <color-base> | currentColor | <system-color> | <contrast-color()> | <device-cmyk()> | <light-dark()>
mdn:    <color-base> | currentColor | <system-color> | <light-dark()> | <deprecated-system-color>
```
- [`<combinator>`](https://drafts.csswg.org/selectors-4/#typedef-combinator)
```
webref: '>' | '+' | '~' | [ '|' '|' ]
mdn:    '>' | '+' | '~' | [ '||' ]
```
- [`<compat-auto>`](https://drafts.csswg.org/css-ui-4/#typedef-appearance-compat-auto) for `appearance`
```
webref: searchfield | textarea | checkbox | radio | menulist | listbox | meter | progress-bar | button
mdn:    searchfield | textarea | push-button | slider-horizontal | checkbox | radio | square-button | menulist | listbox | meter | progress-bar | button
```
- [`<complex-selector>`](https://drafts.csswg.org/selectors-4/#typedef-complex-selector)
```
webref: <complex-selector-unit> [ <combinator>? <complex-selector-unit> ]*
mdn:    <compound-selector> [ <combinator>? <compound-selector> ]*
```
- [`<compound-selector>`](https://drafts.csswg.org/selectors-4/#typedef-compound-selector)
```
webref: [ <type-selector>? <subclass-selector>* ]!
mdn:    [ <type-selector>? <subclass-selector>* [ <pseudo-element-selector> <pseudo-class-selector>* ]* ]!
```
- [`<content-list>`](https://drafts.csswg.org/css-content-3/#typedef-content-content-list) for `content`
```
webref: [ <string> | <image> | <attr()> | contents | <quote> | <leader()> | <target> | <string()> | <content()> | <counter> ]+
mdn:    [ <string> | contents | <image> | <counter> | <quote> | <target> | <leader()> ]+
```
- [`<content-list>`](https://drafts.csswg.org/css-gcpm-3/#content-list)
```
webref: [ <string> | <counter()> | <counters()> | <content()> | <attr()> ]+
mdn:    [ <string> | contents | <image> | <counter> | <quote> | <target> | <leader()> ]+
```
- [`<counter-name>`](https://drafts.csswg.org/css-lists-3/#typedef-counter-name)
```
webref: unknown syntax
mdn:    <custom-ident>
```
- [`<counter-style-name>`](https://drafts.csswg.org/css-counter-styles-3/#typedef-counter-style-name)
```
webref: unknown syntax
mdn:    <custom-ident>
```
- [`<counter-style>`](https://drafts.csswg.org/css-counter-styles-3/#typedef-counter-style)
```
webref: <counter-style-name> | <symbols()>
mdn:    <counter-style-name> | symbols()
```
- [`<dashndashdigit-ident>`](https://drafts.csswg.org/css-syntax-3/#typedef-dashndashdigit-ident)
```
webref: unknown syntax
mdn:    <ident-token>
```
- [`<display-legacy>`](https://drafts.csswg.org/css-display-4/#typedef-display-legacy)
```
webref: inline-block | inline-table | inline-flex | inline-grid
mdn:    inline-block | inline-list-item | inline-table | inline-flex | inline-grid
```
- [`<feature-value-name>`](https://drafts.csswg.org/css-fonts-4/#feature-value-name-value)
```
webref: <ident>
mdn:    <custom-ident>
```
- [`<filter-function>`](https://drafts.fxtf.org/filter-effects-1/#typedef-filter-function)
```
webref: <blur()> | <brightness()> | <contrast()> | <drop-shadow()> | <grayscale()> | <hue-rotate()> | <invert()> | <opacity()> | <sepia()> | <saturate()>
mdn:    <blur()> | <brightness()> | <contrast()> | <drop-shadow()> | <grayscale()> | <hue-rotate()> | <invert()> | <opacity()> | <saturate()> | <sepia()>
```
- [`<final-bg-layer>`](https://drafts.csswg.org/css-backgrounds-3/#typedef-final-bg-layer)
```
webref: <bg-image> || <bg-position> [ / <bg-size> ]? || <repeat-style> || <attachment> || <visual-box> || <visual-box> || <'background-color'>
mdn:    <'background-color'> || <bg-image> || <bg-position> [ / <bg-size> ]? || <repeat-style> || <attachment> || <visual-box> || <visual-box>
```
- [`<fixed-breadth>`](https://drafts.csswg.org/css-grid-2/#typedef-fixed-breadth)
```
webref: <length-percentage [0,∞]>
mdn:    <length-percentage>
```
- [`<general-enclosed>`](https://drafts.csswg.org/mediaqueries-5/#typedef-general-enclosed)
```
webref: [ <function-token> <any-value>? ) ] | [ ( <any-value>? ) ]
mdn:    [ <function-token> <any-value> ) ] | ( <ident> <any-value> )
```
- [`<generic-family>`](https://drafts.csswg.org/css-fonts-4/#typedef-generic-family)
```
webref: <generic-script-specific>| <generic-complete> | <generic-incomplete>
mdn:    <generic-complete> | <generic-incomplete> | emoji | fangsong
```
- [`<grid-line>`](https://drafts.csswg.org/css-grid-2/#typedef-grid-row-start-grid-line) for `grid-row-start`
```
webref: auto | <custom-ident> | [ [ <integer [-∞,-1]> | <integer [1,∞]> ] && <custom-ident>? ] | [ span && [ <integer [1,∞]> || <custom-ident> ] ]
mdn:    auto | <custom-ident> | [ <integer> && <custom-ident>? ] | [ span && [ <integer> || <custom-ident> ] ]
```
- [`<grid-line>`](https://drafts.csswg.org/css-grid-2/#typedef-grid-row-start-grid-line) for `grid-column-start`
```
webref: auto | <custom-ident> | [ [ <integer [-∞,-1]> | <integer [1,∞]> ] && <custom-ident>? ] | [ span && [ <integer [1,∞]> || <custom-ident> ] ]
mdn:    auto | <custom-ident> | [ <integer> && <custom-ident>? ] | [ span && [ <integer> || <custom-ident> ] ]
```
- [`<grid-line>`](https://drafts.csswg.org/css-grid-2/#typedef-grid-row-start-grid-line) for `grid-row-end`
```
webref: auto | <custom-ident> | [ [ <integer [-∞,-1]> | <integer [1,∞]> ] && <custom-ident>? ] | [ span && [ <integer [1,∞]> || <custom-ident> ] ]
mdn:    auto | <custom-ident> | [ <integer> && <custom-ident>? ] | [ span && [ <integer> || <custom-ident> ] ]
```
- [`<grid-line>`](https://drafts.csswg.org/css-grid-2/#typedef-grid-row-start-grid-line) for `grid-column-end`
```
webref: auto | <custom-ident> | [ [ <integer [-∞,-1]> | <integer [1,∞]> ] && <custom-ident>? ] | [ span && [ <integer [1,∞]> || <custom-ident> ] ]
mdn:    auto | <custom-ident> | [ <integer> && <custom-ident>? ] | [ span && [ <integer> || <custom-ident> ] ]
```
- [`<image-set-option>`](https://drafts.csswg.org/css-images-4/#typedef-image-set-option)
```
webref: [ <image> | <string> ] [ <resolution> || type(<string>) ]?
mdn:    [ <image> | <string> ] [ <resolution> || type(<string>) ]
```
- [`<image>`](https://drafts.csswg.org/css-images-4/#typedef-image)
```
webref: <url> | <image()> | <image-set()> | <cross-fade()> | <element()> | <gradient>
mdn:    <url> | <image()> | <image-set()> | <element()> | <paint()> | <cross-fade()> | <gradient>
```
- [`<inflexible-breadth>`](https://drafts.csswg.org/css-grid-2/#typedef-inflexible-breadth)
```
webref: <length-percentage [0,∞]> | min-content | max-content | auto
mdn:    <length-percentage> | min-content | max-content | auto
```
- [`<integer>`](https://drafts.csswg.org/css-values-4/#integer-value)
```
webref: unknown syntax
mdn:    <number-token>
```
- [`<keyframe-selector>`](https://drafts.csswg.org/css-animations-1/#typedef-keyframe-selector)
```
webref: from | to | <percentage [0,100]>
mdn:    from | to | <percentage [0,100]> | <timeline-range-name> <percentage>
```
- [`<line-width>`](https://drafts.csswg.org/css-backgrounds-3/#typedef-line-width)
```
webref: <length [0,∞]> | thin | medium | thick
mdn:    <length> | thin | medium | thick
```
- [`<media-and>`](https://drafts.csswg.org/mediaqueries-5/#typedef-media-and)
```
webref: and <media-in-parens>
mdn:    <media-in-parens> [ and <media-in-parens> ]+
```
- [`<media-condition-without-or>`](https://drafts.csswg.org/mediaqueries-5/#typedef-media-condition-without-or)
```
webref: <media-not> | <media-in-parens> <media-and>*
mdn:    <media-not> | <media-and> | <media-in-parens>
```
- [`<media-condition>`](https://drafts.csswg.org/mediaqueries-5/#typedef-media-condition)
```
webref: <media-not> | <media-in-parens> [ <media-and>* | <media-or>* ]
mdn:    <media-not> | <media-and> | <media-or> | <media-in-parens>
```
- [`<media-or>`](https://drafts.csswg.org/mediaqueries-5/#typedef-media-or)
```
webref: or <media-in-parens>
mdn:    <media-in-parens> [ or <media-in-parens> ]+
```
- [`<media-query-list>`](https://drafts.csswg.org/mediaqueries-5/#typedef-media-query-list)
```
webref: unknown syntax
mdn:    <media-query>#
```
- [`<mf-range>`](https://drafts.csswg.org/mediaqueries-5/#typedef-mf-range)
```
webref: <mf-name> <mf-comparison> <mf-value> | <mf-value> <mf-comparison> <mf-name> | <mf-value> <mf-lt> <mf-name> <mf-lt> <mf-value> | <mf-value> <mf-gt> <mf-name> <mf-gt> <mf-value>
mdn:    <mf-name> [ '<' | '>' ]? '='? <mf-value>
| <mf-value> [ '<' | '>' ]? '='? <mf-name>
| <mf-value> '<' '='? <mf-name> '<' '='? <mf-value>
| <mf-value> '>' '='? <mf-name> '>' '='? <mf-value>
```
- [`<n-dimension>`](https://drafts.csswg.org/css-syntax-3/#typedef-n-dimension)
```
webref: unknown syntax
mdn:    <dimension-token>
```
- [`<named-color>`](https://drafts.csswg.org/css-color-4/#typedef-named-color)
```
webref: unknown syntax
mdn:    aliceblue | antiquewhite | aqua | aquamarine | azure | beige | bisque | black | blanchedalmond | blue | blueviolet | brown | burlywood | cadetblue | chartreuse | chocolate | coral | cornflowerblue | cornsilk | crimson | cyan | darkblue | darkcyan | darkgoldenrod | darkgray | darkgreen | darkgrey | darkkhaki | darkmagenta | darkolivegreen | darkorange | darkorchid | darkred | darksalmon | darkseagreen | darkslateblue | darkslategray | darkslategrey | darkturquoise | darkviolet | deeppink | deepskyblue | dimgray | dimgrey | dodgerblue | firebrick | floralwhite | forestgreen | fuchsia | gainsboro | ghostwhite | gold | goldenrod | gray | green | greenyellow | grey | honeydew | hotpink | indianred | indigo | ivory | khaki | lavender | lavenderblush | lawngreen | lemonchiffon | lightblue | lightcoral | lightcyan | lightgoldenrodyellow | lightgray | lightgreen | lightgrey | lightpink | lightsalmon | lightseagreen | lightskyblue | lightslategray | lightslategrey | lightsteelblue | lightyellow | lime | limegreen | linen | magenta | maroon | mediumaquamarine | mediumblue | mediumorchid | mediumpurple | mediumseagreen | mediumslateblue | mediumspringgreen | mediumturquoise | mediumvioletred | midnightblue | mintcream | mistyrose | moccasin | navajowhite | navy | oldlace | olive | olivedrab | orange | orangered | orchid | palegoldenrod | palegreen | paleturquoise | palevioletred | papayawhip | peachpuff | peru | pink | plum | powderblue | purple | rebeccapurple | red | rosybrown | royalblue | saddlebrown | salmon | sandybrown | seagreen | seashell | sienna | silver | skyblue | slateblue | slategray | slategrey | snow | springgreen | steelblue | tan | teal | thistle | tomato | turquoise | violet | wheat | white | whitesmoke | yellow | yellowgreen
```
- [`<ndash-dimension>`](https://drafts.csswg.org/css-syntax-3/#typedef-ndash-dimension)
```
webref: unknown syntax
mdn:    <dimension-token>
```
- [`<ndashdigit-dimension>`](https://drafts.csswg.org/css-syntax-3/#typedef-ndashdigit-dimension)
```
webref: unknown syntax
mdn:    <dimension-token>
```
- [`<ndashdigit-ident>`](https://drafts.csswg.org/css-syntax-3/#typedef-ndashdigit-ident)
```
webref: unknown syntax
mdn:    <ident-token>
```
- [`<outline-line-style>`](https://drafts.csswg.org/css-ui-4/#typedef-outline-line-style)
```
webref: unknown syntax
mdn:    none | dotted | dashed | solid | double | groove | ridge | inset | outset
```
- [`<page-selector-list>`](https://drafts.csswg.org/css-page-3/#typedef-page-selector-list)
```
webref: <page-selector>#
mdn:    [ <page-selector># ]?
```
- [`<page-selector>`](https://drafts.csswg.org/css-page-3/#typedef-page-selector)
```
webref: [ <ident-token>? <pseudo-page>* ]!
mdn:    <pseudo-page>+ | <ident> <pseudo-page>*
```
- [`<paint>`](https://drafts.fxtf.org/fill-stroke-3/#typedef-paint)
```
webref: none | <image> | <svg-paint>
mdn:    none | <color> | <url> [none | <color>]? | context-fill | context-stroke
```
- [`<palette-identifier>`](https://drafts.csswg.org/css-fonts-4/#typedef-font-palette-palette-identifier) for `font-palette`
```
webref: unknown syntax
mdn:    <dashed-ident>
```
- [`<palette-mix()>`](https://drafts.csswg.org/css-fonts-4/#typedef-font-palette-palette-mix) for `font-palette`
```
webref: unknown syntax
mdn:    palette-mix(<color-interpolation-method> , [ [normal | light | dark | <palette-identifier> | <palette-mix()> ] && <percentage [0,100]>? ]#{2})
```
- [`<position>`](https://drafts.csswg.org/css-values-5/#typedef-position)
```
webref: <position-one> | <position-two> | <position-four>
mdn:    [ [ left | center | right ] || [ top | center | bottom ] | [ left | center | right | <length-percentage> ] [ top | center | bottom | <length-percentage> ]? | [ [ left | right ] <length-percentage> ] && [ [ top | bottom ] <length-percentage> ] ]
```
- [`<predefined-rgb>`](https://drafts.csswg.org/css-color-hdr-1/#typedef-predefined-rgb)
```
webref: srgb | srgb-linear | display-p3 | a98-rgb | prophoto-rgb | rec2020 | rec2100-pq | rec2100-hlg | rec2100-linear
mdn:    srgb | srgb-linear | display-p3 | a98-rgb | prophoto-rgb | rec2020
```
- [`<pseudo-class-selector>`](https://drafts.csswg.org/selectors-4/#typedef-pseudo-class-selector)
```
webref: : <ident-token> | : <function-token> <any-value> )
mdn:    ':' <ident-token> | ':' <function-token> <any-value> ')'
```
- [`<pseudo-element-selector>`](https://drafts.csswg.org/selectors-4/#typedef-pseudo-element-selector)
```
webref: : <pseudo-class-selector> | <legacy-pseudo-element-selector>
mdn:    ':' <pseudo-class-selector>
```
- [`<relative-size>`](https://drafts.csswg.org/css2/#value-def-relative-size)
```
webref: unknown syntax
mdn:    larger | smaller
```
- [`<repeat-style>`](https://drafts.csswg.org/css-backgrounds-4/#typedef-repeat-style)
```
webref: repeat-x | repeat-y | <repetition>{1,2}
mdn:    repeat-x | repeat-y | [ repeat | space | round | no-repeat ]{1,2}
```
- [`<scope-end>`](https://drafts.csswg.org/css-cascade-6/#typedef-scope-end)
```
webref: unknown syntax
mdn:    <selector-list>
```
- [`<scope-start>`](https://drafts.csswg.org/css-cascade-6/#typedef-scope-start)
```
webref: unknown syntax
mdn:    <selector-list>
```
- [`<scroll-state-feature>`](https://drafts.csswg.org/css-conditional-5/#typedef-scroll-state-feature)
```
webref: unknown syntax
mdn:    <media-query-list>
```
- [`<shadow>`](https://drafts.csswg.org/css-backgrounds-3/#typedef-shadow)
```
webref: <color>? && [<length>{2} <length [0,∞]>? <length>?] && inset?
mdn:    inset? && <length>{2,4} && <color>?
```
- [`<shape>`](https://drafts.csswg.org/css2/#value-def-shape)
```
webref: unknown syntax
mdn:    rect(<top>, <right>, <bottom>, <left>)
```
- [`<signed-integer>`](https://drafts.csswg.org/css-syntax-3/#typedef-signed-integer)
```
webref: unknown syntax
mdn:    <number-token>
```
- [`<signless-integer>`](https://drafts.csswg.org/css-syntax-3/#typedef-signless-integer)
```
webref: unknown syntax
mdn:    <number-token>
```
- [`<single-animation-iteration-count>`](https://drafts.csswg.org/css-animations-1/#typedef-single-animation-iteration-count)
```
webref: infinite | <number [0,∞]>
mdn:    infinite | <number>
```
- [`<size-feature>`](https://drafts.csswg.org/css-conditional-5/#typedef-size-feature)
```
webref: unknown syntax
mdn:    <media-query-list>
```
- [`<style-feature>`](https://drafts.csswg.org/css-conditional-5/#typedef-style-feature)
```
webref: unknown syntax
mdn:    <declaration>
```
- [`<supports-feature>`](https://drafts.csswg.org/css-conditional-5/#typedef-supports-feature)
```
webref: <supports-selector-fn> | <supports-font-tech-fn> | <supports-font-format-fn> | <supports-decl>
mdn:    <supports-decl> | <supports-selector-fn>
```
- [`<system-color>`](https://drafts.csswg.org/css-color-4/#typedef-system-color)
```
webref: unknown syntax
mdn:    AccentColor | AccentColorText | ActiveText | ButtonBorder | ButtonFace | ButtonText | Canvas | CanvasText | Field | FieldText | GrayText | Highlight | HighlightText | LinkText | Mark | MarkText | SelectedItem | SelectedItemText | VisitedText
```
- [`<text-edge>`](https://drafts.csswg.org/css-inline-3/#typedef-text-edge)
```
webref: [ text | ideographic | ideographic-ink ] | [ text | ideographic | ideographic-ink | cap | ex ] [ text | ideographic | ideographic-ink | alphabetic ]
mdn:    [ text | cap | ex | ideographic | ideographic-ink ] [ text | alphabetic | ideographic | ideographic-ink ]?
```
- [`<timeline-range-name>`](https://drafts.csswg.org/scroll-animations-1/#typedef-timeline-range-name)
```
webref: unknown syntax
mdn:    cover | contain | entry | exit | entry-crossing | exit-crossing
```
- [`<track-breadth>`](https://drafts.csswg.org/css-grid-2/#typedef-track-breadth)
```
webref: <length-percentage [0,∞]> | <flex [0,∞]> | min-content | max-content | auto
mdn:    <length-percentage> | <flex> | min-content | max-content | auto
```
- [`<track-size>`](https://drafts.csswg.org/css-grid-2/#typedef-track-size)
```
webref: <track-breadth> | minmax( <inflexible-breadth> , <track-breadth> ) | fit-content( <length-percentage [0,∞]> )
mdn:    <track-breadth> | minmax( <inflexible-breadth> , <track-breadth> ) | fit-content( <length-percentage> )
```
- [`<transform-function>`](https://drafts.csswg.org/css-transforms-2/#typedef-transform-function)
```
webref: unknown syntax
mdn:    <matrix()> | <translate()> | <translateX()> | <translateY()> | <scale()> | <scaleX()> | <scaleY()> | <rotate()> | <skew()> | <skewX()> | <skewY()> | <matrix3d()> | <translate3d()> | <translateZ()> | <scale3d()> | <scaleZ()> | <rotate3d()> | <rotateX()> | <rotateY()> | <rotateZ()> | <perspective()>
```
- [`attr()`](https://drafts.csswg.org/css-values-5/#funcdef-attr)
```
webref: attr( <attr-name> <attr-type>? , <declaration-value>?)
mdn:    attr( <attr-name> <type-or-unit>? [, <attr-fallback> ]? )
```
- [`clamp()`](https://drafts.csswg.org/css-values-4/#funcdef-clamp)
```
webref: clamp( [ <calc-sum> | none ], <calc-sum>, [ <calc-sum> | none ] )
mdn:    clamp( <calc-sum>#{3} )
```
- [`cross-fade()`](https://drafts.csswg.org/css-images-4/#funcdef-cross-fade)
```
webref: cross-fade( <cf-image># )
mdn:    cross-fade( <cf-mixing-image> , <cf-final-image>? )
```
- [`env()`](https://drafts.csswg.org/css-env-1/#funcdef-env)
```
webref: env( <custom-ident> <integer [0,∞]>*, <declaration-value>? )
mdn:    env( <custom-ident> , <declaration-value>? )
```
- [`fit-content()`](https://drafts.csswg.org/css-grid-2/#funcdef-grid-template-columns-fit-content) for `grid-template-columns`
```
webref: fit-content( <length-percentage> )
mdn:    fit-content( <length-percentage [0,∞]> )
```
- [`fit-content()`](https://drafts.csswg.org/css-grid-2/#funcdef-grid-template-columns-fit-content) for `grid-template-rows`
```
webref: fit-content( <length-percentage> )
mdn:    fit-content( <length-percentage [0,∞]> )
```
- [`hsl()`](https://drafts.csswg.org/css-color-4/#funcdef-hsl)
```
webref: [ <legacy-hsl-syntax> | <modern-hsl-syntax> ]
mdn:    hsl( <hue>, <percentage>, <percentage>, <alpha-value>? ) | hsl( [ <hue> | none ] [ <percentage> | <number> | none ] [ <percentage> | <number> | none ] [ / [ <alpha-value> | none ] ]? )
```
- [`hsla()`](https://drafts.csswg.org/css-color-4/#funcdef-hsla)
```
webref: [ <legacy-hsla-syntax> | <modern-hsla-syntax> ]
mdn:    hsla( <hue>, <percentage>, <percentage>, <alpha-value>? ) | hsla( [ <hue> | none ] [ <percentage> | <number> | none ] [ <percentage> | <number> | none ] [ / [ <alpha-value> | none ] ]? )
```
- [`hwb()`](https://drafts.csswg.org/css-color-5/#funcdef-hwb)
```
webref: hwb([from <color>]? [<hue> | none] [<percentage> | <number> | none] [<percentage> | <number> | none] [ / [<alpha-value> | none] ]? )
mdn:    hwb( [ <hue> | none ] [ <percentage> | <number> | none ] [ <percentage> | <number> | none ] [ / [ <alpha-value> | none ] ]? )
```
- [`lab()`](https://drafts.csswg.org/css-color-5/#funcdef-lab)
```
webref: lab([from <color>]? [<percentage> | <number> | none] [<percentage> | <number> | none] [<percentage> | <number> | none] [ / [<alpha-value> | none] ]? )
mdn:    lab( [<percentage> | <number> | none] [ <percentage> | <number> | none] [ <percentage> | <number> | none] [ / [<alpha-value> | none] ]? )
```
- [`lch()`](https://drafts.csswg.org/css-color-5/#funcdef-lch)
```
webref: lch([from <color>]? [<percentage> | <number> | none] [<percentage> | <number> | none] [<hue> | none] [ / [<alpha-value> | none] ]? )
mdn:    lch( [<percentage> | <number> | none] [ <percentage> | <number> | none] [ <hue> | none] [ / [<alpha-value> | none] ]? )
```
- [`minmax()`](https://drafts.csswg.org/css-grid-2/#funcdef-grid-template-columns-minmax) for `grid-template-columns`
```
webref: minmax(min, max)
mdn:    minmax( [ <length-percentage> | min-content | max-content | auto ] , [ <length-percentage> | <flex> | min-content | max-content | auto ] )
```
- [`minmax()`](https://drafts.csswg.org/css-grid-2/#funcdef-grid-template-columns-minmax) for `grid-template-rows`
```
webref: minmax(min, max)
mdn:    minmax( [ <length-percentage> | min-content | max-content | auto ] , [ <length-percentage> | <flex> | min-content | max-content | auto ] )
```
- [`oklab()`](https://drafts.csswg.org/css-color-5/#funcdef-oklab)
```
webref: oklab([from <color>]? [<percentage> | <number> | none] [<percentage> | <number> | none] [<percentage> | <number> | none] [ / [<alpha-value> | none] ]? )
mdn:    oklab( [ <percentage> | <number> | none] [ <percentage> | <number> | none] [ <percentage> | <number> | none] [ / [<alpha-value> | none] ]? )
```
- [`oklch()`](https://drafts.csswg.org/css-color-5/#funcdef-oklch)
```
webref: oklch([from <color>]? [<percentage> | <number> | none] [<percentage> | <number> | none] [<hue> | none] [ / [<alpha-value> | none] ]? )
mdn:    oklch( [ <percentage> | <number> | none] [ <percentage> | <number> | none] [ <hue> | none] [ / [<alpha-value> | none] ]? )
```
- [`polygon()`](https://drafts.csswg.org/css-shapes-1/#funcdef-basic-shape-polygon) for `<basic-shape>`
```
webref: polygon( <'fill-rule'>? [ round <length> ]? , [<length-percentage> <length-percentage>]# )
mdn:    polygon( <'fill-rule'>? , [ <length-percentage> <length-percentage> ]# )
```
- [`rect()`](https://drafts.fxtf.org/css-masking-1/#funcdef-clip-rect) for `clip`
```
webref: rect( <top>, <right>, <bottom>, <left> )
mdn:    rect( [ <length-percentage> | auto ]{4} [ round <'border-radius'> ]? )
```
- [`rgb()`](https://drafts.csswg.org/css-color-4/#funcdef-rgb)
```
webref: [ <legacy-rgb-syntax> | <modern-rgb-syntax> ]
mdn:    rgb( <percentage>#{3} , <alpha-value>? ) | rgb( <number>#{3} , <alpha-value>? ) | rgb( [ <number> | <percentage> | none ]{3} [ / [ <alpha-value> | none ] ]? )
```
- [`rgba()`](https://drafts.csswg.org/css-color-4/#funcdef-rgba)
```
webref: [ <legacy-rgba-syntax> | <modern-rgba-syntax> ]
mdn:    rgba( <percentage>#{3} , <alpha-value>? ) | rgba( <number>#{3} , <alpha-value>? ) | rgba( [ <number> | <percentage> | none ]{3} [ / [ <alpha-value> | none ] ]? )
```
- [`round()`](https://drafts.csswg.org/css-values-4/#funcdef-round)
```
webref: round( <rounding-strategy>?, <calc-sum>, <calc-sum>? )
mdn:    round( <rounding-strategy>?, <calc-sum>, <calc-sum> )
```
- [`scale()`](https://drafts.csswg.org/css-transforms-1/#funcdef-transform-scale) for `transform`
```
webref: scale( <number> , <number>? )
mdn:    scale( [ <number> | <percentage> ]#{1,2} )
```
- [`scaleX()`](https://drafts.csswg.org/css-transforms-1/#funcdef-transform-scalex) for `transform`
```
webref: scaleX( <number> )
mdn:    scaleX( [ <number> | <percentage> ] )
```
- [`scaleY()`](https://drafts.csswg.org/css-transforms-1/#funcdef-transform-scaley) for `transform`
```
webref: scaleY( <number> )
mdn:    scaleY( [ <number> | <percentage> ] )
```
</details>


<details>
<summary>12 types mismatches (out of 38 types in common)</summary>

- [`<basic-shape>`](https://drafts.csswg.org/css-shapes-1/#typedef-basic-shape)
```
webref: unknown syntax
mdn:    <inset()> | <xywh()> | <rect()> | <circle()> | <ellipse()> | <polygon()> | <path()>
```
- [`<blend-mode>`](https://drafts.fxtf.org/compositing-2/#ltblendmodegt)
```
webref: normal | multiply | screen | overlay | darken | lighten | color-dodge |color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity
mdn:    normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity
```
- [`<color>`](https://drafts.csswg.org/css-color-5/#typedef-color)
```
webref: <color-base> | currentColor | <system-color> | <contrast-color()> | <device-cmyk()> | <light-dark()>
mdn:    <color-base> | currentColor | <system-color> | <light-dark()> | <deprecated-system-color>
```
- [`<display-legacy>`](https://drafts.csswg.org/css-display-4/#typedef-display-legacy)
```
webref: inline-block | inline-table | inline-flex | inline-grid
mdn:    inline-block | inline-list-item | inline-table | inline-flex | inline-grid
```
- [`<filter-function>`](https://drafts.fxtf.org/filter-effects-1/#typedef-filter-function)
```
webref: <blur()> | <brightness()> | <contrast()> | <drop-shadow()> | <grayscale()> | <hue-rotate()> | <invert()> | <opacity()> | <sepia()> | <saturate()>
mdn:    <blur()> | <brightness()> | <contrast()> | <drop-shadow()> | <grayscale()> | <hue-rotate()> | <invert()> | <opacity()> | <saturate()> | <sepia()>
```
- [`<image>`](https://drafts.csswg.org/css-images-4/#typedef-image)
```
webref: <url> | <image()> | <image-set()> | <cross-fade()> | <element()> | <gradient>
mdn:    <url> | <image()> | <image-set()> | <element()> | <paint()> | <cross-fade()> | <gradient>
```
- [`<integer>`](https://drafts.csswg.org/css-values-4/#integer-value)
```
webref: unknown syntax
mdn:    <number-token>
```
- [`<position>`](https://drafts.csswg.org/css-values-5/#typedef-position)
```
webref: <position-one> | <position-two> | <position-four>
mdn:    [ [ left | center | right ] || [ top | center | bottom ] | [ left | center | right | <length-percentage> ] [ top | center | bottom | <length-percentage> ]? | [ [ left | right ] <length-percentage> ] && [ [ top | bottom ] <length-percentage> ] ]
```
- [`<shape>`](https://drafts.csswg.org/css2/#value-def-shape)
```
webref: unknown syntax
mdn:    rect(<top>, <right>, <bottom>, <left>)
```
- [`<text-edge>`](https://drafts.csswg.org/css-inline-3/#typedef-text-edge)
```
webref: [ text | ideographic | ideographic-ink ] | [ text | ideographic | ideographic-ink | cap | ex ] [ text | ideographic | ideographic-ink | alphabetic ]
mdn:    [ text | cap | ex | ideographic | ideographic-ink ] [ text | alphabetic | ideographic | ideographic-ink ]?
```
- [`<transform-function>`](https://drafts.csswg.org/css-transforms-2/#typedef-transform-function)
```
webref: unknown syntax
mdn:    <matrix()> | <translate()> | <translateX()> | <translateY()> | <scale()> | <scaleX()> | <scaleY()> | <rotate()> | <skew()> | <skewX()> | <skewY()> | <matrix3d()> | <translate3d()> | <translateZ()> | <scale3d()> | <scaleZ()> | <rotate3d()> | <rotateX()> | <rotateY()> | <rotateZ()> | <perspective()>
```
- [`<url>`](https://drafts.csswg.org/css-values-4/#url-value)
```
webref: <url()> | <src()>
mdn:    unknown syntax
```
</details>
