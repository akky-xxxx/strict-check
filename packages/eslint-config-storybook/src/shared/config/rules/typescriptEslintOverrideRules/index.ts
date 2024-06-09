import { typescriptEslintRules } from "./rules/typescriptEslintRules"
import { eslintRules } from "../eslintOverrideRules/rules/eslintRules"

import type { EslintRules } from "../../../../libs/shared-for-config/types/EslintRules"

export const typescriptEslintOverrideRules = {
  ...eslintRules,
  ...typescriptEslintRules,
} as const satisfies EslintRules
