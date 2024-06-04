import { SEVERITY } from "../../../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRuleLevelAndOptions } from "../../../../../../../../libs/shared-for-config/types/EslintRuleLevelAndOptions"

export const noUnnecessaryBooleanLiteralCompare = [
  SEVERITY.WARN,
  {
    allowComparingNullableBooleansToFalse: false,
    allowComparingNullableBooleansToTrue: false,
  },
] as const satisfies EslintRuleLevelAndOptions
