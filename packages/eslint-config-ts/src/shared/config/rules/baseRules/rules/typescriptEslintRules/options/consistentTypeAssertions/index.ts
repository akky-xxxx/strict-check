import { SEVERITY } from "../../../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRuleLevelAndOptions } from "../../../../../../../../libs/shared-for-config/types/EslintRuleLevelAndOptions"

export const consistentTypeAssertions = [
  SEVERITY.ERROR,
  { assertionStyle: "never" },
] as const satisfies EslintRuleLevelAndOptions
