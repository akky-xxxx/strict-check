import plugin from "../../dist/index.js"
import typescriptEslint from "@typescript-eslint/eslint-plugin"
import typescriptEslintParser from "@typescript-eslint/parser"

const baseRules = {
  "max-lines": [2, 1],
  "max-nested-callbacks": [2, 1],
  "max-statements": [2, 1],
  "no-console": 2,
  "no-magic-numbers": 2,
  "sort-keys": 2,
}

export default [
  {
    languageOptions: {
      parserOptions: {
        project: "dry-run/flat/tsconfig.json",
      },
      parser: typescriptEslintParser,
    },
  },
  {
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },
  },
  {
    files: ["**/*.js"],
    rules: baseRules,
  },
  {
    files: ["**/*.ts"],
    rules: {
      ...baseRules,

      "@typescript-eslint/no-magic-numbers": 2,
      "@typescript-eslint/no-unsafe-call": 2,
      "@typescript-eslint/no-unsafe-member-access": 2,
    },
  },
  ...plugin.configs.recommended,
]
