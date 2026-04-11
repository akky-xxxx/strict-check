import eslintConfigSCNext from "eslint-config-sc-next"
import eslintConfigSCTs from "eslint-config-sc-ts"
import typescriptEslintParser from "@typescript-eslint/parser"

export default [
  eslintConfigSCNext.configs.recommended,
  eslintConfigSCTs.configs.recommended,
  eslintConfigSCNext.configs.scRectCustomRecordWithTypescript,
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
