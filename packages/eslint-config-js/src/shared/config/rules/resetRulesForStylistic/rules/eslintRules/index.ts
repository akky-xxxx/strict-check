import { SEVERITY } from "../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../../../libs/shared-for-config/types/EslintRules"

export const eslintRules = {
  "max-len": SEVERITY.OFF,
  "no-multi-spaces": SEVERITY.OFF,
  "object-curly-newline": SEVERITY.OFF,
  "quotes": SEVERITY.OFF,
  "semi": SEVERITY.OFF,
} as const satisfies EslintRules
