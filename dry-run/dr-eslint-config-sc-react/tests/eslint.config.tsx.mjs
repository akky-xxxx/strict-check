import eslintConfigSCReact from "eslint-config-sc-react"
import eslintConfigSCTs from "eslint-config-sc-ts"
import typescriptEslintParser from "@typescript-eslint/parser"

export default [
  eslintConfigSCTs.configs.baseRecords1,
  eslintConfigSCReact.configs.baseRecords1,
  eslintConfigSCReact.configs.baseRecords2,

  eslintConfigSCTs.configs.customRecords,
  eslintConfigSCReact.configs.customRecord,
  eslintConfigSCReact.configs.customRecordWithTypescript,

  eslintConfigSCReact.configs.resetRecordForStylistic,
  {
    languageOptions: {
      parserOptions: {
        project: "tests/tsconfig.json",
      },
      parser: typescriptEslintParser,
    },
    files: ["**/*.tsx"],
  },
].flat()
