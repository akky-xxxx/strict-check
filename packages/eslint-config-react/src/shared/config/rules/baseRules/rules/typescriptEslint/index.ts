import { SEVERITY } from "../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../../../libs/shared-for-config/types/EslintRules"

export const typescriptEslintConfig = {
  "@typescript-eslint/no-use-before-define": SEVERITY.OFF,
} as const satisfies EslintRules
