import { SEVERITY } from "../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../libs/shared-for-config/types/EslintRules"

export const resetRulesForStylistic = {
  "react/jsx-curly-newline": SEVERITY.OFF,
  "react/jsx-one-expression-per-line": SEVERITY.OFF,
} as const satisfies EslintRules
