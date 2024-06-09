const legacyConfig = require("../../dist/legacy")

const baseRules = {
  "max-lines": [2, 1],
  "max-nested-callbacks": [2, 1],
  "max-statements": [2, 1],
  "no-console": 2,
  "no-magic-numbers": 2,
  "sort-keys": 2,
}

module.exports = {
  ...legacyConfig,
  parserOptions: {
    ecmaVersion: "latest",
    project: ["./tsconfig.json"],
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],

  overrides: [
    {
      files: ["**/*.jsx"],
      rules: baseRules,
    },
    {
      files: ["**/*.tsx"],
      rules: {
        ...baseRules,

        "@typescript-eslint/no-magic-numbers": 2,
      },
    },
    ...legacyConfig.overrides,
  ],

  reportUnusedDisableDirectives: true,
}

