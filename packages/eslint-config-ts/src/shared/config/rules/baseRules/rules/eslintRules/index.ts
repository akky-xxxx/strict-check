import { SEVERITY } from "../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../../../libs/shared-for-config/types/EslintRules"

export const eslintRules = {
  /* eslint-disable @typescript-eslint/no-magic-numbers */
  "no-magic-numbers": SEVERITY.OFF,
  "no-unused-vars": SEVERITY.OFF,
  "no-use-before-define": SEVERITY.OFF,
  /* eslint-enable @typescript-eslint/no-magic-numbers */
} as const satisfies EslintRules
