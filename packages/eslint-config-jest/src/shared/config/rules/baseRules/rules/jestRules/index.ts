import { consistentTestIt } from "./options/consistentTestIt"
import { SEVERITY } from "../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../../../libs/shared-for-config/types/EslintRules"

export const jestRules = {
  "jest/consistent-test-it": consistentTestIt,
  "jest/max-expects": [SEVERITY.WARN, { max: 3 }],
  "jest/max-nested-describe": [SEVERITY.WARN, { max: 3 }],
  "jest/no-conditional-in-test": SEVERITY.ERROR,
  "jest/no-duplicate-hooks": SEVERITY.ERROR,
  "jest/prefer-called-with": SEVERITY.ERROR,
  "jest/prefer-comparison-matcher": SEVERITY.WARN,
  "jest/prefer-each": SEVERITY.WARN,
  "jest/prefer-equality-matcher": SEVERITY.WARN,
  "jest/prefer-expect-resolves": SEVERITY.WARN,
  "jest/prefer-hooks-in-order": SEVERITY.WARN,
  "jest/prefer-hooks-on-top": SEVERITY.WARN,
  "jest/prefer-jest-mocked": SEVERITY.WARN,
  "jest/prefer-spy-on": SEVERITY.WARN,
  "jest/prefer-strict-equal": SEVERITY.WARN,
  "jest/prefer-todo": SEVERITY.WARN,
  "jest/require-to-throw-message": SEVERITY.ERROR,
  "jest/require-top-level-describe": SEVERITY.ERROR,
} as const satisfies EslintRules
