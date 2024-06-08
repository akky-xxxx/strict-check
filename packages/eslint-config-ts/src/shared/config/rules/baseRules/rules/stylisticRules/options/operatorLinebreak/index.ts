import { SEVERITY } from "../../../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRuleLevelAndOptions } from "../../../../../../../../libs/shared-for-config/types/EslintRuleLevelAndOptions"

export const operatorLinebreak = [
  SEVERITY.WARN,
  "after",
  {
    overrides: {
      ":": "ignore",
      "?": "ignore",
    },
  },
] as const satisfies EslintRuleLevelAndOptions
