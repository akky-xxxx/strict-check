import { eslintRules } from "./rules/eslintRules"

import type { EslintRules } from "../../../../libs/shared-for-config/types/EslintRules"

export const resetRulesForStylistic = {
  ...eslintRules,
} as const satisfies EslintRules
