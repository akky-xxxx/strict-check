import { eslintRules } from "./rules/eslintRules"

import type { EslintRules } from "../../../../libs/shared-for-config/types/EslintRules"

export const resetRulesForStyle = {
  ...eslintRules,
} as const satisfies EslintRules
