import { ESLINT_RULES } from "./ESLINT_RULES/index.mjs"
import { IMPORT_RULES } from "./IMPORT_RULES/index.mjs"
import { STYLISTIC_RULES } from "./STYLISTIC_RULES/index.mjs"

export const BASE_RULES = {
  ...ESLINT_RULES,
  ...IMPORT_RULES,
  ...STYLISTIC_RULES,
}
