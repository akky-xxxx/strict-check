import eslintConfigSCNext from "eslint-config-sc-next"
import eslintConfigSCTs from "eslint-config-sc-ts"
import typescriptEslintParser from "@typescript-eslint/parser"

export default [
  eslintConfigSCNext.configs.initialRecord,
  eslintConfigSCNext.configs.stylisticRecord,
  eslintConfigSCNext.configs.eslintRecommendedRecord,
  eslintConfigSCTs.configs.typescriptEslintStrictTypeCheckedRecords,
  eslintConfigSCTs.configs.typescriptEslintStylisticTypeCheckedRecords,
  eslintConfigSCNext.configs.unicornRecommendedRecords,
  eslintConfigSCNext.configs.reactRecords,
  eslintConfigSCNext.configs.nextRecord,
  eslintConfigSCNext.configs.airbnbRecords,
  eslintConfigSCNext.configs.scRectCustomRecord,
  eslintConfigSCTs.configs.customRecords,
  eslintConfigSCNext.configs.scRectCustomRecordWithTypescript,
  eslintConfigSCNext.configs.resetRecordForStylistic,
  {
    languageOptions: {
      parserOptions: {
        project: "tests/tsconfig.json",
      },
      parser: typescriptEslintParser,
    },
    files: ["**/*.tsx"],
    rules: {
      "@next/next/no-html-link-for-pages": 0,
    },
  },
].flat()
