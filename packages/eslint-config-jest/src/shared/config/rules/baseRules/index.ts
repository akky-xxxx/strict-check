import { jestRules } from "./rules/jestRules"

import type { EslintRules } from "../../../../libs/shared-for-config/types/EslintRules"

export const baseRules = {
  ...jestRules,
} as const satisfies EslintRules
