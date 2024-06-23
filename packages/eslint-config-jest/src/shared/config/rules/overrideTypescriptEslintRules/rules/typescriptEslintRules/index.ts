import { SEVERITY } from "../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../../../libs/shared-for-config/types/EslintRules"

export const typescriptEslintRules = {
  "@typescript-eslint/no-magic-numbers": SEVERITY.OFF,
  "@typescript-eslint/no-unsafe-call": SEVERITY.OFF,
  "@typescript-eslint/no-unsafe-member-access": SEVERITY.OFF,
} as const satisfies EslintRules
