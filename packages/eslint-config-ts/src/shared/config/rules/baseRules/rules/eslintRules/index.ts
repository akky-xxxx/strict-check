import { SEVERITY } from "../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../../../libs/shared-for-config/types/EslintRules"

export const eslintRules = {
  "no-magic-numbers": SEVERITY.OFF,
  "no-unused-vars": SEVERITY.OFF,
  "no-use-before-define": SEVERITY.OFF,
} as const satisfies EslintRules
