import { SEVERITY } from "../../../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRuleLevelAndOptions } from "../../../../../../../../libs/shared-for-config/types/EslintRuleLevelAndOptions"

export const noUnnecessaryCondition = [
  SEVERITY.ERROR,
  {
    allowConstantLoopConditions: false,
    allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
  },
] as const satisfies EslintRuleLevelAndOptions
