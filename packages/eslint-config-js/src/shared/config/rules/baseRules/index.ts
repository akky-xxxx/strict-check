import { eslintRules } from "./rules/eslintRules"
import { importRules } from "./rules/importRules"
import { stylisticRules } from "./rules/stylisticRules"
import { unicornRules } from "./rules/unicornRules"

import type { EslintRules } from "../../../../libs/shared-for-config/types/EslintRules"

export const baseRules = {
  ...eslintRules,
  ...importRules,
  ...stylisticRules,
  ...unicornRules,
} as const satisfies EslintRules
