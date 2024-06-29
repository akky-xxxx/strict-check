import { SEVERITY } from "../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../libs/shared-for-config/types/EslintRules"

export const overrideImportRules = {
  "import/no-extraneous-dependencies": SEVERITY.OFF,
} as const satisfies EslintRules
