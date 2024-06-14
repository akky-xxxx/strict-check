import eslintConfigSCJest from "eslint-config-sc-jest"
import eslintConfigSCJs from "eslint-config-sc-js"
import eslintConfigSCTs from "eslint-config-sc-ts"

export default [
  ...eslintConfigSCJest.configs.baseRecords,
  ...eslintConfigSCJest.configs.customRecords,
  ...eslintConfigSCTs.configs.recommended,
  ...eslintConfigSCJest.configs.typescriptEslintOverrideRecords,
  {
    languageOptions: {
      parserOptions: {
        project: "tests/tsconfig.json",
      },
    },
  },
  {
    files: ["**/*.ts"],
  },

  ...eslintConfigSCJest.configs.baseRecords,
  ...eslintConfigSCJest.configs.customRecords,
  ...eslintConfigSCJs.configs.recommended,
  ...eslintConfigSCJest.configs.eslintOverrideRecords,
  {
    files: ["**/*.js"],
  },
]
