import { SEVERITY } from "../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const initialRecord = {
  linterOptions: {
    reportUnusedDisableDirectives: SEVERITY.ERROR,
  },
} as const satisfies EslintFlatConfig
