import { resetRulesForStylistic } from "../../rules/resetRulesForStylistic"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const resetRecordsForStylistic = [
  {
    rules: {
      ...resetRulesForStylistic,
    },
  },
] as const satisfies EslintFlatConfig[]
