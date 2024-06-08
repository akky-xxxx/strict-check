import { operatorLinebreak } from "./options/operatorLinebreak"
import { SEVERITY } from "../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../../../libs/shared-for-config/types/EslintRules"

export const stylisticRules = {
  "@stylistic/implicit-arrow-linebreak": [SEVERITY.OFF],
  "@stylistic/operator-linebreak": operatorLinebreak,
  "@stylistic/quotes": [SEVERITY.ERROR, "double", { avoidEscape: true }],
  "@stylistic/semi": [SEVERITY.ERROR, "never"],
} as const satisfies EslintRules
