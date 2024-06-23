import { importRules } from "./rules/importRules"

import type { EslintRules } from "../../../../libs/shared-for-config/types/EslintRules"

export const overrideImportRules = {
  ...importRules,
} as const satisfies EslintRules
