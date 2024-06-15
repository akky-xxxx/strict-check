import { SEVERITY } from "../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../../../libs/shared-for-config/types/EslintRules"

export const eslintRules = {
  /* eslint-disable @typescript-eslint/no-magic-numbers */
  "complexity": [SEVERITY.ERROR, 5],
  "max-depth": [SEVERITY.ERROR, 3],
  "max-lines": [SEVERITY.ERROR, { max: 100 }],
  "max-nested-callbacks": [SEVERITY.ERROR, 3],
  "max-statements": [SEVERITY.ERROR, 10],
  "multiline-comment-style": SEVERITY.OFF,
  "no-magic-numbers": SEVERITY.WARN,
  "no-use-before-define": SEVERITY.ERROR,
  "sort-keys": [SEVERITY.WARN, "asc", { allowLineSeparatedGroups: true }],
  /* eslint-enable @typescript-eslint/no-magic-numbers */
} as const satisfies EslintRules
