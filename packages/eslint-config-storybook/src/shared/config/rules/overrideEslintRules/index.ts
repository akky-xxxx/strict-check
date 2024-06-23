import type { EslintRules } from "../../../../libs/shared-for-config/types/EslintRules"
import {SEVERITY} from "../../../../libs/shared-for-config/constants/SEVERITY"

export const overrideEslintRules = {
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
