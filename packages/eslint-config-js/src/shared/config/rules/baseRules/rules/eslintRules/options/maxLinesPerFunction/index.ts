import { SEVERITY } from "../../../../../../../../libs/shared-for-config/constants/SEVERITY"

import type {
  EslintRuleLevelAndOptions,
} from "../../../../../../../../libs/shared-for-config/types/EslintRuleLevelAndOptions"

export const maxLinesPerFunction = [
  SEVERITY.ERROR,
  {
    IIFEs: true,
    skipBlankLines: true,
    skipComments: true,
  },
] as const satisfies EslintRuleLevelAndOptions
