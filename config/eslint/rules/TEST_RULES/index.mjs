import { ESLINT_RULES } from "./ESLINT_RULES/index.mjs"
import { TYPESCRIPT_ESLINT_RULES } from "./TYPESCRIPT_ESLINT_RULES/index.mjs"

export const TEST_RULES = {
  ...ESLINT_RULES,
  ...TYPESCRIPT_ESLINT_RULES,
}
