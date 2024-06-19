import { resetRulesForStylistic } from "../../rules/resetRulesForStylistic"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const resetRecordForStylistic = {
  rules: {
    ...resetRulesForStylistic,
  },
} as const satisfies EslintFlatConfig
