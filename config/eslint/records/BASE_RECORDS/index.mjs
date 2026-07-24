import eslint from "@eslint/js"

import { BASE_RULES } from "../../rules/BASE_RULES/index.mjs"
import { AIRBNB_BASE_RECORDS } from "../AIRBNB_BASE_RECORDS/index.mjs"

export const BASE_RECORDS = [
  eslint.configs.recommended,
  ...AIRBNB_BASE_RECORDS,
  {
    ignores: ["{modules,packages}/*", ".pnpm-store", "node_modules/**"],
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
