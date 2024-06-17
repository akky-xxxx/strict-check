import { SEVERITY } from "../../../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRuleLevelAndOptions } from "../../../../../../../../libs/shared-for-config/types/EslintRuleLevelAndOptions"

export const requireArraySortCompare = [
  SEVERITY.ERROR,
  { ignoreStringArrays: true },
] as const satisfies EslintRuleLevelAndOptions
