import { SEVERITY } from "../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../../../libs/shared-for-config/types/EslintRules"

export const eslintRules = {
  "brace-style": SEVERITY.OFF,
  "comma-dangle": SEVERITY.OFF,
  "key-spacing": SEVERITY.OFF,
  "keyword-spacing": SEVERITY.OFF,
  "max-len": SEVERITY.OFF,
  "no-multi-spaces": SEVERITY.OFF,
  "object-curly-newline": SEVERITY.OFF,
  "quote-props": SEVERITY.OFF,
  "quotes": SEVERITY.OFF,
  "semi": SEVERITY.OFF,
  "space-before-blocks": SEVERITY.OFF,
} as const satisfies EslintRules
