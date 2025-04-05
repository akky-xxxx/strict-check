import { indent } from "./rules/indent"

import type { EslintRules } from "../../../../libs/shared-for-config/types/EslintRules"

export const customRulesForStylistic = {
  ...indent,
} as const satisfies EslintRules
