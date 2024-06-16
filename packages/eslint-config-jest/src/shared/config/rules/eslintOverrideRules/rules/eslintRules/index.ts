import { SEVERITY } from "../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../../../libs/shared-for-config/types/EslintRules"

export const eslintRules = {
  /* eslint-disable @typescript-eslint/no-magic-numbers */
  "complexity": SEVERITY.OFF,
  "max-lines": [SEVERITY.WARN, 200],
  "max-nested-callbacks": [SEVERITY.ERROR, 5],
  "no-console": SEVERITY.OFF,
  "no-magic-numbers": SEVERITY.OFF,
  "no-undefined": SEVERITY.OFF,
  "sort-keys": SEVERITY.OFF,
  /* eslint-enable @typescript-eslint/no-magic-numbers */
} as const satisfies EslintRules
