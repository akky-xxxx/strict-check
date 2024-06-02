import { FlatCompat } from "@eslint/eslintrc"
import eslint from "@eslint/js"
import stylistic from "@stylistic/eslint-plugin"
import path from "node:path"
import { fileURLToPath } from "node:url"

import { BASE_RULES } from "../../rules/BASE_RULES/index.mjs"

const compat = new FlatCompat({
  baseDirectory: path.dirname(fileURLToPath(import.meta.url)),
})

export const BASE_RECORDS = [
  eslint.configs.recommended,
  ...compat.extends("eslint-config-airbnb-base"),
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
