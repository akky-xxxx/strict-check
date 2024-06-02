import typescriptEslint from "typescript-eslint"

import { TYPESCRIPT_RULES } from "../../rules/TYPESCRIPT_RULES/index.mjs"

export const TYPESCRIPT_RECORDS = typescriptEslint.config(
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
  },
  ...typescriptEslint.configs.strict,
  {
    rules: TYPESCRIPT_RULES,
  },
)
