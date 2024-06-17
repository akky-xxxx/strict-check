import { SEVERITY } from "../../../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRuleLevelAndOptions } from "../../../../../../../../libs/shared-for-config/types/EslintRuleLevelAndOptions"

export const switchExhaustivenessCheck = [
  SEVERITY.ERROR,
  { requireDefaultForNonUnion: true },
] as const satisfies EslintRuleLevelAndOptions
