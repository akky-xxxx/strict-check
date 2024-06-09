import { consistentTestIt } from "./options/consistentTestIt"

import type { EslintRules } from "../../../../../../libs/shared-for-config/types/EslintRules"

export const jestRules = {
  "jest/consistent-test-it": consistentTestIt,
} as const satisfies EslintRules
