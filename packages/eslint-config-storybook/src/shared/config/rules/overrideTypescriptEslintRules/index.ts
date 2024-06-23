import { SEVERITY } from "../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../libs/shared-for-config/types/EslintRules"

export const overrideTypescriptEslintRules = {
  "@typescript-eslint/no-magic-numbers": SEVERITY.OFF,
} as const satisfies EslintRules
