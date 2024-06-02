import { ESLINT_RULES } from "./ESLINT_RULES/index.mjs"
import { IMPORT_RULES } from "./IMPORT_RULES/index.mjs"

export const CONFIGS_RULES = {
  ...ESLINT_RULES,
  ...IMPORT_RULES,
}
