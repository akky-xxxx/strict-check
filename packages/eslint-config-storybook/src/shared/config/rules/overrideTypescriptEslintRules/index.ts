import type { EslintRules } from "../../../../libs/shared-for-config/types/EslintRules"
import {SEVERITY} from "../../../../libs/shared-for-config/constants/SEVERITY"

export const overrideTypescriptEslintRules = {
  "@typescript-eslint/no-magic-numbers": SEVERITY.OFF,
} as const satisfies EslintRules
