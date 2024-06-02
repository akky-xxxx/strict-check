import { ESLINT_RULES } from "./ESLINT_RULES/index.mjs"
import { IMPORT_RULES } from "./IMPORT_RULES/index.mjs"
import { TYPESCRIPT_ESLINT_RULES } from "./TYPESCRIPT_ESLINT_RULES/index.mjs"

export const TYPESCRIPT_RULES = {
  ...ESLINT_RULES,
  ...IMPORT_RULES,
  ...TYPESCRIPT_ESLINT_RULES,
}
