import { eslintRules } from "./rules/eslintRules"
import { importRules } from "./rules/importRules"
import { unicornRules } from "./rules/unicornRules"

import type { EslintRules } from "../../../../libs/shared-for-config/types/EslintRules"

export const baseRules = {
  ...eslintRules,
  ...importRules,
  ...unicornRules,
} as const satisfies EslintRules
