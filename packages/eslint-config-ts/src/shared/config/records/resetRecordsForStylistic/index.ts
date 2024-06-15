import { baseRules } from "../../rules/baseRules"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const resetRecordsForStylistic = [
  {
    rules: {
      ...baseRules,
    },
  },
] as const satisfies EslintFlatConfig[]
