import { typescriptEslintRules } from "./rules/typescriptEslintRules"
import { eslintRules } from "../overrideEslintRules/rules/eslintRules"

import type { EslintRules } from "../../../../libs/shared-for-config/types/EslintRules"

export const overrideTypescriptEslintRules = {
  ...eslintRules,
  ...typescriptEslintRules,
} as const satisfies EslintRules
