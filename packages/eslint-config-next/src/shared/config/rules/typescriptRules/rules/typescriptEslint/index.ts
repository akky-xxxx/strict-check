import { namingConvention } from "./options/namingConvention"

import type { EslintRules } from "../../../../../../libs/shared-for-config/types/EslintRules"

export const typescriptEslintRules = {
  "@typescript-eslint/naming-convention": namingConvention,
} as const satisfies EslintRules
