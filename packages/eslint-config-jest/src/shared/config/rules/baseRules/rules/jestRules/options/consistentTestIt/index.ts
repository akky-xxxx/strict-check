import { SEVERITY } from "../../../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRuleLevelAndOptions } from "../../../../../../../../libs/shared-for-config/types/EslintRuleLevelAndOptions"

export const consistentTestIt = [
  SEVERITY.ERROR,
  {
    fn: "it",
    withinDescribe: "it",
  },
] as const satisfies EslintRuleLevelAndOptions
