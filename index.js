"use strict";

module.exports = {
  "plugins": [
    "stylelint-order",
    "stylelint-scss"
  ],
  "rules": {
    "block-closing-brace-empty-line-before": "never",
    "block-closing-brace-newline-after": [
      "always",
      {
        "ignoreAtRules": [
          "if",
          "else"
        ]
      }
    ],
    "block-closing-brace-newline-before": "always",
    "block-no-empty": true,
    "block-opening-brace-newline-after": "always",
    "color-hex-case": "upper",
    "color-hex-length": "long",
    "color-named": "always-where-possible",
    "color-no-hex": true,
    "color-no-invalid-hex": true,
    "comment-empty-line-before": [
      "always",
      {
        "except": ["first-nested"],
        "ignore": [
          "after-comment",
          "stylelint-commands"
        ]
      }
    ],
    "comment-no-empty": true,
    "comment-whitespace-inside": "always",
    "comment-word-blacklist": [],
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-block-no-duplicate-properties": [
      true,
      {
        "ignore": [
          "consecutive-duplicates"
        ]
      }
    ],
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-single-line-max-declarations": 1,
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",
    "declaration-empty-line-before": [
      "always",
      {
        "except": [
          "first-nested"
        ],
        "ignore": [
          "after-declaration"
        ]
      }
    ],
    "declaration-no-important": true,
    "declaration-property-unit-blacklist": {},
    "declaration-property-unit-whitelist": {},
    "declaration-property-value-blacklist": {},
    "declaration-property-value-whitelist": {},
    "font-family-name-quotes": "always-unless-keyword",
    "font-family-no-duplicate-names": true,
    "font-weight-notation": "numeric",
    "function-blacklist": [],
    "function-calc-no-unspaced-operator": true,
    "function-comma-newline-after": "always-multi-line",
    "function-comma-space-after": "always",
    "function-comma-space-before": "never",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-max-empty-lines": 0,
    "function-name-case": "lower",
    "function-parentheses-newline-inside": "always-multi-line",
    "function-parentheses-space-inside": "never",
    "function-url-no-scheme-relative": true,
    "function-url-quotes": "always",
    "function-whitespace-after": "always",
    "indentation": 2,
    "keyframe-declaration-no-important": true,
    "length-zero-no-unit": true,
    "max-empty-lines": 1,
    "max-line-length": 140,
    "max-nesting-depth": 5,
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-blacklist": [],
    "media-feature-name-case": "lower",
    "media-feature-name-no-unknown": true,
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    "media-query-list-comma-newline-after": "always-multi-line",
    "media-query-list-comma-space-after": "always",
    "media-query-list-comma-space-before": "never",
    "no-duplicate-selectors": true,
    "no-empty-source": true,
    "no-eol-whitespace": [
      true,
      {
        "ignore": [
          "empty-lines"
        ]
      }
    ],
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "no-missing-end-of-source-newline": true,
    "no-unknown-animations": true,
    "number-leading-zero": "always",
    "number-max-precision": 3,
    "number-no-trailing-zeros": true,
    "property-blacklist": [],
    "property-case": "lower",
    "property-no-unknown": true,
    "property-no-vendor-prefix": [
      true,
      {}
    ],
    "rule-empty-line-before": [
      "always",
      {
        "except": [
          "first-nested"
        ]
      }
    ],
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-blacklist": [],
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-quotes": "always",
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-descendant-combinator-no-non-space": true,
    "selector-list-comma-newline-after": "always-multi-line",
    "selector-list-comma-space-after": "always-single-line",
    "selector-list-comma-space-before": "never",
    "selector-max-attribute": 2,
    "selector-max-class": 6,
    "selector-max-combinators": 4,
    "selector-max-empty-lines": 0,
    "selector-max-id": 1,
    "selector-max-specificity": "1,3,1",
    "selector-max-type": 3,
    "selector-max-universal": 1,
    "selector-no-qualifying-type": [
      true,
      {
        "ignore": [
          "attribute",
          "class"
        ]
      }
    ],
    "selector-no-vendor-prefix": true,
    "selector-pseudo-class-blacklist": [],
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "single",
    "selector-pseudo-element-no-unknown": true,
    "selector-type-case": "lower",
    "selector-type-no-unknown": true,
    "shorthand-property-no-redundant-values": true,
    "string-no-newline": true,
    "string-quotes": "double",
    "unit-blacklist": [
      "rem",
      "em"
    ],
    "unit-case": "lower",
    "unit-no-unknown": true,
    "unit-whitelist": [
      "px",
      "fr",
      "deg",
      "%",
      "s",
      "ms",
      "vh",
      "vw"
    ],
    "value-keyword-case": "lower",
    "value-list-comma-newline-after": "always-multi-line",
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-space-before": "never",
    "value-list-max-empty-lines": 0,
    "value-no-vendor-prefix": true,
    "scss/at-mixin-pattern": "[a-z]+(-[a-z]+)*",
    "scss/dollar-variable-pattern": "[a-z]+(-[a-z]+)*",
    "order/order": [
      [
        "dollar-variables",
        "custom-properties",
        {
          "type": "at-rule",
          "name": "include",
          "hasBlock": false
        },
        "declarations",
        "rules",
        "at-rules"
      ]
    ],
    "order/properties-order": [
      [
        {
          "emptyLineBefore": "always",
          "properties": [
            "position",
            "top",
            "bottom",
            "left",
            "right",
            "z-index"
          ]
        },
        {
          "emptyLineBefore": "always",
          "properties": [
            "display",
            "flex-direction",
            "flex-wrap",
            "flex-flow",
            "align-items",
            "align-content",
            "justify-items",
            "justify-content",
            "grid",
            "grid-template",
            "grid-template-rows",
            "grid-template-columns",
            "grid-template-areas",
            "grid-gap",
            "grid-row-gap",
            "grid-column-gap",
            "grid-auto-flow",
            "grid-auto-rows",
            "grid-auto-columns"
          ]
        },
        {
          "emptyLineBefore": "always",
          "properties": [
            "width",
            "min-width",
            "max-width",
            "height",
            "min-height",
            "max-height",
            "flex",
            "flex-basis",
            "flex-grow",
            "flex-shrink",
            "grid-area",
            "grid-column",
            "grid-row",
            "grid-column-start",
            "grid-column-end",
            "grid-row-start",
            "grid-row-end"
          ]
        },
        {
          "emptyLineBefore": "always",
          "properties": [
            "box-sizing",
            "visibility",
            "clear",
            "overflow",
            "overflow-x",
            "overflow-y",
            "clip",
            "zoom"
          ]
        },
        {
          "emptyLineBefore": "always",
          "properties": [
            "float",
            "clear",
            "vertical-align",
            "align-self",
            "justify-self"
          ]
        },
        {
          "emptyLineBefore": "always",
          "properties": [
            "margin",
            "margin-top",
            "margin-bottom",
            "margin-left",
            "margin-right",
            "padding",
            "padding-top",
            "padding-bottom",
            "padding-left",
            "padding-right"
          ]
        },
        {
          "emptyLineBefore": "always",
          "properties": [
            "color",
            "background",
            "background-color",
            "background-image",
            "background-repeat",
            "background-attachment",
            "background-position",
            "background-position-x",
            "background-position-y",
            "background-clip",
            "background-origin",
            "background-size",
            "border",
            "border-width",
            "border-style",
            "border-color",
            "border-top",
            "border-top-width",
            "border-top-style",
            "border-top-color",
            "border-right",
            "border-right-width",
            "border-right-style",
            "border-right-color",
            "border-bottom",
            "border-bottom-width",
            "border-bottom-style",
            "border-bottom-color",
            "border-left",
            "border-left-width",
            "border-left-style",
            "border-left-color",
            "border-radius",
            "border-top-left-radius",
            "border-top-right-radius",
            "border-bottom-right-radius",
            "border-bottom-left-radius",
            "border-collapse",
            "border-image",
            "border-image-source",
            "border-image-slice",
            "border-image-width",
            "border-image-outset",
            "border-image-repeat",
            "border-spacing",
            "outline",
            "outline-width",
            "outline-style",
            "outline-color",
            "outline-offset",
            "box-decoration-break",
            "box-shadow",
            "visibility",
            "opacity"
          ]
        },
        {
          "emptyLineBefore": "always",
          "properties": [
            "content",
            "quotes",
            "counter-reset",
            "counter-increment",
            "resize",
            "cursor",
            "user-select",
            "nav-index",
            "nav-up",
            "nav-right",
            "nav-down",
            "nav-left",
            "pointer-events"
          ]
        },
        {
          "emptyLineBefore": "always",
          "properties": [
            "font",
            "font-family",
            "font-size",
            "font-weight",
            "font-style",
            "font-variant",
            "font-size-adjust",
            "font-stretch",
            "font-effect",
            "font-emphasize",
            "font-emphasize-position",
            "font-emphasize-style",
            "font-smooth",
            "line-height",
            "text-align",
            "text-align-last",
            "white-space",
            "text-decoration",
            "text-emphasis",
            "text-emphasis-color",
            "text-emphasis-style",
            "text-emphasis-position",
            "text-indent",
            "text-justify",
            "letter-spacing",
            "word-spacing",
            "text-outline",
            "text-overflow",
            "text-overflow-ellipsis",
            "text-overflow-mode",
            "text-shadow",
            "text-transform",
            "text-wrap",
            "word-wrap",
            "word-break",
            "tab-size",
            "hyphens"
          ]
        },
        {
          "emptyLineBefore": "always",
          "properties": [
            "transform",
            "transform-origin",
            "animation",
            "animation-name",
            "animation-duration",
            "animation-play-state",
            "animation-timing-function",
            "animation-delay",
            "animation-iteration-count",
            "animation-direction",
            "transition",
            "transition-delay",
            "transition-timing-function",
            "transition-duration",
            "transition-property"
          ]
        }
      ],
      {
        "unspecified": "ignore"
      }
    ]
  }
};
