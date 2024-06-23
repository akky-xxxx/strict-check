import type { EslintRules } from "../../../../libs/shared-for-config/types/EslintRules"
import {SEVERITY} from "../../../../libs/shared-for-config/constants/SEVERITY"

export const overrideImportRules = {
  "import/no-default-export": SEVERITY.OFF,
} as const satisfies EslintRules
