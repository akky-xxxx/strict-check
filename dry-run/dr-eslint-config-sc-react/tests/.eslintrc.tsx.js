const eslintConfigSCReact = require("eslint-config-sc-react")
const eslintConfigSCTs = require("eslint-config-sc-ts")

module.exports = {
  extends: [
    "plugin:@stylistic/recommended-extends",
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:unicorn/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
  ],
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  parser: "@typescript-eslint/parser",
  rules: {
    ...eslintConfigSCTs.configs.customRecords[1].rules,
    ...eslintConfigSCReact.configs.customRecords[0].rules,
    ...eslintConfigSCReact.configs.customRecords[1].rules,
    ...eslintConfigSCReact.configs.customRecordsWithTypescript[0].rules,
    ...eslintConfigSCReact.configs.resetRecordsForStylistic[0].rules,
  },
}
