import { SEVERITY } from "../../../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRuleLevelAndOptions } from "../../../../../../../../libs/shared-for-config/types/EslintRuleLevelAndOptions"

export const jsxNoLeakedRender = [
  SEVERITY.ERROR,
  { validStrategies: ["ternary", "coerce"] },
] as const satisfies EslintRuleLevelAndOptions
