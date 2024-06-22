import { SEVERITY } from "../../../../libs/shared-for-config/constants/SEVERITY"
import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const initialRecord = {
  name: `${PACKAGE_NAME}/initialRecord`,

  linterOptions: {
    reportUnusedDisableDirectives: SEVERITY.ERROR,
  },
} as const satisfies EslintFlatConfig
