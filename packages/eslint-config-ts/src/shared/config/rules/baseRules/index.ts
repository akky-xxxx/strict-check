import { eslintRules } from "./rules/eslintRules"
import { typescriptEslintRules } from "./rules/typescriptEslintRules"
import { unicornRules } from "./rules/unicornRules"

import type { EslintRules } from "../../../../libs/shared-for-config/types/EslintRules"

export const baseRules = {
  ...eslintRules,
  ...typescriptEslintRules,
  ...unicornRules,
} as const satisfies EslintRules
