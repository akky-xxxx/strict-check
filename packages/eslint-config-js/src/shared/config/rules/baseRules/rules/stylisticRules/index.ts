import { maxLength } from "./options/maxLength"
import { SEVERITY } from "../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../../../libs/shared-for-config/types/EslintRules"

export const stylisticRules = {
  "@stylistic/brace-style": [SEVERITY.ERROR, "1tbs"],
  "@stylistic/max-len": maxLength,
  "@stylistic/quotes": [SEVERITY.ERROR, "double", { avoidEscape: true }],
} as const satisfies EslintRules
