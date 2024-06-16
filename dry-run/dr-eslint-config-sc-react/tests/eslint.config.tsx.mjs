import eslintConfigSCReact from "eslint-config-sc-react"
import eslintConfigSCTs from "eslint-config-sc-ts"
import typescriptEslintParser from "@typescript-eslint/parser"

export default [
  ...eslintConfigSCTs.configs.baseRecords1,
  ...eslintConfigSCReact.configs.baseRecords1,
  ...eslintConfigSCReact.configs.baseRecords2,

  ...eslintConfigSCTs.configs.customRecords,
  ...eslintConfigSCReact.configs.customRecords,
  ...eslintConfigSCReact.configs.customRecordsWithTypescript,

  ...eslintConfigSCReact.configs.resetRecordsForStylistic,
  {
    languageOptions: {
      parserOptions: {
        project: "tests/tsconfig.json",
      },
      parser: typescriptEslintParser,
    },
    files: ["**/*.tsx"],
  },
]
