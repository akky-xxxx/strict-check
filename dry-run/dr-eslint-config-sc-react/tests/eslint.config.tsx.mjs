import eslintConfigSCReact from "eslint-config-sc-react"
import eslintConfigSCTs from "eslint-config-sc-ts"
import typescriptEslintParser from "@typescript-eslint/parser"
import eslintConfigPrettier from "eslint-config-prettier/flat"

export default [
  eslintConfigSCReact.configs.recommended,
  eslintConfigSCTs.configs.recommended,

  eslintConfigSCReact.configs.customRecordWithTypescript,
  {
    languageOptions: {
      parserOptions: {
        project: "tests/tsconfig.json",
      },
      parser: typescriptEslintParser,
    },
    files: ["**/*.tsx"],
    rules: {
      "react/jsx-one-expression-per-line": ["error", { allow: "single-child" }],
    },
  },
  eslintConfigPrettier,
].flat()
