import { eslintRules } from "./rules/eslintRules"
import { typescriptEslintRules } from "./rules/typescriptEslintRules"

import type { EslintRules } from "../../../../libs/shared-for-config/types/EslintRules"

export const baseRules = {
  ...eslintRules,
  ...typescriptEslintRules,
} as const satisfies EslintRules
