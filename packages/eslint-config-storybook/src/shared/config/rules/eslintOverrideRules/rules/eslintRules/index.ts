import { SEVERITY } from "../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../../../libs/shared-for-config/types/EslintRules"

export const eslintRules = {
  "complexity": SEVERITY.OFF,
  "max-lines": SEVERITY.OFF,
  "max-nested-callbacks": SEVERITY.OFF,
  "max-statements": SEVERITY.OFF,
  "no-console": SEVERITY.OFF,
  "no-magic-numbers": SEVERITY.OFF,
  "no-undefined": SEVERITY.OFF,
  "sort-keys": SEVERITY.OFF,
} as const satisfies EslintRules
