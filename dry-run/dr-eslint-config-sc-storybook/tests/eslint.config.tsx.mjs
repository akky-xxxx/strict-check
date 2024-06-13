import eslintConfigSCTs from "eslint-config-sc-ts"
import eslintConfigSCStorybook from "eslint-config-sc-storybook"
import eslintConfigSCReact from "eslint-config-sc-react"
import typescriptEslintParser from "@typescript-eslint/parser"

export default [
  ...eslintConfigSCTs.configs.baseRecords1,
  ...eslintConfigSCTs.configs.baseRecords2,
  ...eslintConfigSCReact.configs.baseRecords,
  ...eslintConfigSCReact.configs.customRecords,
  ...eslintConfigSCReact.configs.customRecordsWithTypescript,
  ...eslintConfigSCStorybook.configs.recommended,
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
