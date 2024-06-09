import { eslintRules } from "./rules/eslintRules"

import type { EslintRules } from "../../../../libs/shared-for-config/types/EslintRules"

export const eslintOverrideRules = {
  ...eslintRules,
} as const satisfies EslintRules
