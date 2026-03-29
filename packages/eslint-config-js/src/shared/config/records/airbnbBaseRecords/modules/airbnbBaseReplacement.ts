/* eslint-disable max-lines */
import { SEVERITY } from "../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../../libs/shared-for-config/types/EslintRules"

const eslintRulesFromAirbnbBase = {
  /* eslint-disable @typescript-eslint/no-magic-numbers */
  "array-callback-return": [SEVERITY.ERROR, { allowImplicit: true }],
  "camelcase": [SEVERITY.ERROR, { ignoreDestructuring: false, properties: "never" }],
  "complexity": [SEVERITY.OFF, 20],
  "curly": [SEVERITY.ERROR, "multi-line"],
  "max-depth": [SEVERITY.OFF, 4],
  "max-lines": [SEVERITY.OFF, { max: 300, skipBlankLines: true, skipComments: true }],
  "max-lines-per-function": [
    SEVERITY.OFF,
    { IIFEs: true, max: 50, skipBlankLines: true, skipComments: true },
  ],
  "max-nested-callbacks": SEVERITY.OFF,
  "max-params": [SEVERITY.OFF, 3],
  "max-statements": [SEVERITY.OFF, 10],
  "no-console": SEVERITY.WARN,
  "no-implicit-coercion": [
    SEVERITY.OFF,
    { allow: [], boolean: false, number: true, string: true },
  ],
  "no-magic-numbers": [
    SEVERITY.OFF,
    { detectObjects: false, enforceConst: true, ignore: [], ignoreArrayIndexes: true },
  ],
  "no-use-before-define": [SEVERITY.ERROR, { classes: true, functions: true, variables: true }],
  "prefer-const": [SEVERITY.ERROR, { destructuring: "any", ignoreReadBeforeAssign: true }],
  "prefer-named-capture-group": SEVERITY.OFF,
  "sort-keys": [SEVERITY.OFF, "asc", { caseSensitive: false, natural: true }],
  /* eslint-enable @typescript-eslint/no-magic-numbers */
} as const satisfies EslintRules

const importRulesFromAirbnbBase = {
  "import/default": SEVERITY.OFF,
  "import/dynamic-import-chunkname": [
    SEVERITY.OFF,
    { importFunctions: [], webpackChunknameFormat: "[0-9a-zA-Z-_/.]+" },
  ],
  "import/export": SEVERITY.ERROR,
  "import/exports-last": SEVERITY.OFF,
  "import/extensions": [
    SEVERITY.ERROR,
    "ignorePackages",
    { js: "never", jsx: "never", mjs: "never" },
  ],
  "import/first": SEVERITY.ERROR,
  "import/group-exports": SEVERITY.OFF,
  "import/max-dependencies": [SEVERITY.OFF, { max: 10 }],
  "import/named": SEVERITY.ERROR,
  "import/namespace": SEVERITY.OFF,
  "import/newline-after-import": SEVERITY.ERROR,
  "import/no-absolute-path": SEVERITY.ERROR,
  "import/no-amd": SEVERITY.ERROR,
  "import/no-anonymous-default-export": [
    SEVERITY.OFF,
    {
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowArray: false,
      allowArrowFunction: false,
      allowLiteral: false,
      allowObject: false,
    },
  ],
  "import/no-commonjs": SEVERITY.OFF,
  "import/no-cycle": [SEVERITY.ERROR, { maxDepth: "∞" }],
  "import/no-default-export": SEVERITY.OFF,
  "import/no-deprecated": SEVERITY.OFF,
  "import/no-duplicates": SEVERITY.ERROR,
  "import/no-dynamic-require": SEVERITY.ERROR,
  "import/no-extraneous-dependencies": [
    SEVERITY.ERROR,
    {
      devDependencies: [
        "test/**",
        "tests/**",
        "spec/**",
        "**/__tests__/**",
        "**/__mocks__/**",
        "test.{js,jsx}",
        "test-*.{js,jsx}",
        "**/*{.,_}{test,spec}.{js,jsx}",
        "**/jest.config.js",
        "**/jest.setup.js",
        "**/vue.config.js",
        "**/webpack.config.js",
        "**/webpack.config.*.js",
        "**/rollup.config.js",
        "**/rollup.config.*.js",
        "**/gulpfile.js",
        "**/gulpfile.*.js",
        "**/Gruntfile{,.js}",
        "**/protractor.conf.js",
        "**/protractor.conf.*.js",
        "**/karma.conf.js",
        "**/.eslintrc.js",
      ],
      optionalDependencies: false,
    },
  ],
  "import/no-import-module-exports": [SEVERITY.ERROR, { exceptions: [] }],
  "import/no-internal-modules": [SEVERITY.OFF, { allow: [] }],
  "import/no-mutable-exports": SEVERITY.ERROR,
  "import/no-named-as-default": SEVERITY.ERROR,
  "import/no-named-as-default-member": SEVERITY.ERROR,
  "import/no-named-default": SEVERITY.ERROR,
  "import/no-named-export": SEVERITY.OFF,
  "import/no-namespace": SEVERITY.OFF,
  "import/no-nodejs-modules": SEVERITY.OFF,
  "import/no-relative-packages": SEVERITY.ERROR,
  "import/no-relative-parent-imports": SEVERITY.OFF,
  "import/no-restricted-paths": SEVERITY.OFF,
  "import/no-self-import": SEVERITY.ERROR,
  "import/no-unassigned-import": SEVERITY.OFF,
  "import/no-unresolved": [SEVERITY.ERROR, { caseSensitive: true, commonjs: true }],
  "import/no-unused-modules": [
    SEVERITY.OFF,
    { ignoreExports: [], missingExports: true, unusedExports: true },
  ],
  "import/no-useless-path-segments": [SEVERITY.ERROR, { commonjs: true }],
  "import/no-webpack-loader-syntax": SEVERITY.ERROR,
  "import/order": [SEVERITY.ERROR, { groups: [["builtin", "external", "internal"]] }],
  "import/prefer-default-export": SEVERITY.ERROR,
  "import/unambiguous": SEVERITY.OFF,
} as const satisfies EslintRules

export const airbnbBaseReplacement = {
  languageOptions: {
    globals: {
      console: "readonly",
    },
  },
  rules: {
    eslint: eslintRulesFromAirbnbBase,
    import: importRulesFromAirbnbBase,
  },
} as const
