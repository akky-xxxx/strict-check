import eslintConfigSCJest from "eslint-config-sc-jest"
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
    files: ["**/*.ts{,x}"],
  },
]
