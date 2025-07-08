import eslint from "@eslint/js"
import stylistic from "@stylistic/eslint-plugin"

import { BASE_RULES } from "../../rules/BASE_RULES/index.mjs"

export const BASE_RECORDS = [
  eslint.configs.recommended,
  stylistic.configs["recommended-flat"],
  {
    ignores: [
      "{modules,packages}/*",
      ".yarn",
      "node_modules/**",
    ],
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 2,
    },
  },
  {
    rules: {
      ...BASE_RULES,
    },
  },
]
