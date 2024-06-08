import plugin from "../../dist/index.js"
import typescriptEslint from "typescript-eslint"
import typescriptEslintParser from "@typescript-eslint/parser"

export default typescriptEslint.config(
  ...plugin.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        project: "dry-run/flat/tsconfig.json",
      },
      parser: typescriptEslintParser,
    },
  },
  {
    files: ["**/*.jsx", "**/*.tsx"],
  },
)
