import { SEVERITY } from "../../../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRuleLevelAndOptions } from "../../../../../../../../libs/shared-for-config/types/EslintRuleLevelAndOptions"

export const arrayType =
  [SEVERITY.ERROR, { default: "array" }] as const satisfies EslintRuleLevelAndOptions
