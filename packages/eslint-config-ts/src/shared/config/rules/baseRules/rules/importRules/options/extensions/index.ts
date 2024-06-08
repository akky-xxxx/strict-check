import { SEVERITY } from "../../../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRuleLevelAndOptions } from "../../../../../../../../libs/shared-for-config/types/EslintRuleLevelAndOptions"

export const extensions = [
  SEVERITY.ERROR,
  {
    js: "never",
    ts: "never",
  },
] as const satisfies EslintRuleLevelAndOptions
