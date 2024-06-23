import { SEVERITY } from "../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../../../libs/shared-for-config/types/EslintRules"

export const importRules = {
  "import/no-default-export": SEVERITY.OFF,
} as const satisfies EslintRules
