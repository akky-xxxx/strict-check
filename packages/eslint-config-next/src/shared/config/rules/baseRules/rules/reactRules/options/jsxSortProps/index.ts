import { SEVERITY } from "../../../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRuleLevelAndOptions } from "../../../../../../../../libs/shared-for-config/types/EslintRuleLevelAndOptions"

export const jsxSortProps = [
  SEVERITY.ERROR,
  {
    callbacksLast: true,
    multiline: "last",
    reservedFirst: true,
    shorthandFirst: true,
  },
] as const satisfies EslintRuleLevelAndOptions
