import { SEVERITY } from "../../../../../../../../libs/shared-for-config/constants/SEVERITY"

import type {
  EslintRuleLevelAndOptions,
} from "../../../../../../../../libs/shared-for-config/types/EslintRuleLevelAndOptions"

export const maxLength = [
  SEVERITY.ERROR,
  {
    code: 100,
    ignoreComments: true,
    ignoreRegExpLiterals: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true,
    ignoreTrailingComments: true,
    ignoreUrls: true,
  },
] as const satisfies EslintRuleLevelAndOptions
