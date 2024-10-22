import { namingConvention } from "./options/namingConvention"
import { SEVERITY } from "../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../../../libs/shared-for-config/types/EslintRules"

export const typescriptEslintRules = {
  "@typescript-eslint/naming-convention": namingConvention,
  "@typescript-eslint/no-use-before-define": SEVERITY.OFF,
} as const satisfies EslintRules
