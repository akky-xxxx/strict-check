import eslintConfigSCStorybook from "eslint-config-sc-storybook"
import typescriptEslintParser from "@typescript-eslint/parser"

export default [
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
