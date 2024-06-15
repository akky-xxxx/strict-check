import { SEVERITY } from "../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../../../libs/shared-for-config/types/EslintRules"

export const unicornRules = {
  "unicorn/prefer-array-find": SEVERITY.OFF,
} as const satisfies EslintRules
