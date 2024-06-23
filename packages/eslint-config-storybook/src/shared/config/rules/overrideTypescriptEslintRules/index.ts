import { typescriptEslintRules } from "./rules/typescriptEslintRules"

import type { EslintRules } from "../../../../libs/shared-for-config/types/EslintRules"

export const overrideTypescriptEslintRules = {
  ...typescriptEslintRules,
} as const satisfies EslintRules
