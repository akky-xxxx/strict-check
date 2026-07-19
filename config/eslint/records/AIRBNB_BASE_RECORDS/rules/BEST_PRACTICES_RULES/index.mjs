/* eslint-disable max-lines */
// cspell:ignore nonoctal
// eslint-config-airbnb-base@15.0.0 の compat.extends() 出力から機械生成。手編集しない。詳細は README.md を参照。
export const BEST_PRACTICES_RULES = {
  "accessor-pairs": "off",
  "array-callback-return": [
    "error",
    {
      allowImplicit: true,
    },
  ],
  "block-scoped-var": "error",
  "class-methods-use-this": [
    "error",
    {
      exceptMethods: [],
    },
  ],
  complexity: ["off", 20],
  "consistent-return": "error",
  curly: ["error", "multi-line"],
  "default-case": [
    "error",
    {
      commentPattern: "^no default$",
    },
  ],
  "default-case-last": "error",
  "default-param-last": "error",
  "dot-location": ["error", "property"],
  "dot-notation": [
    "error",
    {
      allowKeywords: true,
    },
  ],
  eqeqeq: [
    "error",
    "always",
    {
      null: "ignore",
    },
  ],
  "grouped-accessor-pairs": "error",
  "guard-for-in": "error",
  "max-classes-per-file": ["error", 1],
  "no-alert": "warn",
  "no-caller": "error",
  "no-case-declarations": "error",
  "no-constructor-return": "error",
  "no-div-regex": "off",
  "no-else-return": [
    "error",
    {
      allowElseIf: false,
    },
  ],
  "no-empty-function": [
    "error",
    {
      allow: ["arrowFunctions", "functions", "methods"],
    },
  ],
  "no-empty-pattern": "error",
  "no-eq-null": "off",
  "no-eval": "error",
  "no-extend-native": "error",
  "no-extra-bind": "error",
  "no-extra-label": "error",
  "no-fallthrough": "error",
  "no-floating-decimal": "error",
  "no-global-assign": [
    "error",
    {
      exceptions: [],
    },
  ],
  "no-implicit-coercion": [
    "off",
    {
      allow: [],
      boolean: false,
      number: true,
      string: true,
    },
  ],
  "no-implicit-globals": "off",
  "no-implied-eval": "error",
  "no-invalid-this": "off",
  "no-iterator": "error",
  "no-labels": [
    "error",
    {
      allowLoop: false,
      allowSwitch: false,
    },
  ],
  "no-lone-blocks": "error",
  "no-loop-func": "error",
  "no-magic-numbers": [
    "off",
    {
      detectObjects: false,
      enforceConst: true,
      ignore: [],
      ignoreArrayIndexes: true,
    },
  ],
  "no-multi-spaces": [
    "error",
    {
      ignoreEOLComments: false,
    },
  ],
  "no-multi-str": "error",
  "no-native-reassign": "off",
  "no-new": "error",
  "no-new-func": "error",
  "no-new-wrappers": "error",
  "no-nonoctal-decimal-escape": "error",
  "no-octal": "error",
  "no-octal-escape": "error",
  "no-param-reassign": [
    "error",
    {
      ignorePropertyModificationsFor: [
        "acc",
        "accumulator",
        "e",
        "ctx",
        "context",
        "req",
        "request",
        "res",
        "response",
        "$scope",
        "staticContext",
      ],
      props: true,
    },
  ],
  "no-proto": "error",
  "no-redeclare": "error",
  "no-restricted-properties": [
    "error",
    {
      message: "arguments.callee is deprecated",
      object: "arguments",
      property: "callee",
    },
    {
      message: "Please use Number.isFinite instead",
      object: "global",
      property: "isFinite",
    },
    {
      message: "Please use Number.isFinite instead",
      object: "self",
      property: "isFinite",
    },
    {
      message: "Please use Number.isFinite instead",
      object: "window",
      property: "isFinite",
    },
    {
      message: "Please use Number.isNaN instead",
      object: "global",
      property: "isNaN",
    },
    {
      message: "Please use Number.isNaN instead",
      object: "self",
      property: "isNaN",
    },
    {
      message: "Please use Number.isNaN instead",
      object: "window",
      property: "isNaN",
    },
    {
      message: "Please use Object.defineProperty instead.",
      property: "__defineGetter__",
    },
    {
      message: "Please use Object.defineProperty instead.",
      property: "__defineSetter__",
    },
    {
      message: "Use the exponentiation operator (**) instead.",
      object: "Math",
      property: "pow",
    },
  ],
  "no-return-assign": ["error", "always"],
  "no-return-await": "error",
  "no-script-url": "error",
  "no-self-assign": [
    "error",
    {
      props: true,
    },
  ],
  "no-self-compare": "error",
  "no-sequences": "error",
  "no-throw-literal": "error",
  "no-unmodified-loop-condition": "off",
  "no-unused-expressions": [
    "error",
    {
      allowShortCircuit: false,
      allowTaggedTemplates: false,
      allowTernary: false,
    },
  ],
  "no-unused-labels": "error",
  "no-useless-call": "off",
  "no-useless-catch": "error",
  "no-useless-concat": "error",
  "no-useless-escape": "error",
  "no-useless-return": "error",
  "no-void": "error",
  "no-warning-comments": [
    "off",
    {
      location: "start",
      terms: ["todo", "fixme", "xxx"],
    },
  ],
  "no-with": "error",
  "prefer-named-capture-group": "off",
  "prefer-promise-reject-errors": [
    "error",
    {
      allowEmptyReject: true,
    },
  ],
  "prefer-regex-literals": [
    "error",
    {
      disallowRedundantWrapping: true,
    },
  ],
  radix: "error",
  "require-await": "off",
  "require-unicode-regexp": "off",
  "vars-on-top": "error",
  "wrap-iife": [
    "error",
    "outside",
    {
      functionPrototypeMethods: false,
    },
  ],
  yoda: "error",
}
