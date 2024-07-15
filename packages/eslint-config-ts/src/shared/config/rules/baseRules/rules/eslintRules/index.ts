import { SEVERITY } from "../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../../../libs/shared-for-config/types/EslintRules"

export const eslintRules = {
  "default-case": SEVERITY.OFF, // check by @typescript-eslint/switch-exhaustiveness-check
  "dot-notation": SEVERITY.OFF,
  "max-params": SEVERITY.OFF,
  "no-magic-numbers": SEVERITY.OFF,
  "no-multiple-empty-lines": SEVERITY.OFF,
  "no-shadow": SEVERITY.OFF,
  "no-unused-expressions": SEVERITY.OFF,
  "no-unused-vars": SEVERITY.OFF,
  "no-use-before-define": SEVERITY.OFF,
  "prefer-destructuring": SEVERITY.OFF,
} as const satisfies EslintRules
