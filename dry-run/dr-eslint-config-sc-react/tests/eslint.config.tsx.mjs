import eslintConfigSCReact from "eslint-config-sc-react"
import typescriptEslintParser from "@typescript-eslint/parser"

export default [
  ...eslintConfigSCReact.configs.recommended,
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
