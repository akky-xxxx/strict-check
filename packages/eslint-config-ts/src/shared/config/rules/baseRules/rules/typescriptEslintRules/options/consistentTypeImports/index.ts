import { SEVERITY } from "../../../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRuleLevelAndOptions } from "../../../../../../../../libs/shared-for-config/types/EslintRuleLevelAndOptions"

export const consistentTypeImports = [
  SEVERITY.ERROR,
  {
    fixStyle: "separate-type-imports",
    prefer: "type-imports",
  },
] as const satisfies EslintRuleLevelAndOptions
