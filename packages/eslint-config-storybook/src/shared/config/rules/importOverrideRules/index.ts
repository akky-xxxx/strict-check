import { importRules } from "./rules/importRules"

import type { EslintRules } from "../../../../libs/shared-for-config/types/EslintRules"

export const importOverrideRules = {
  ...importRules,
} as const satisfies EslintRules
