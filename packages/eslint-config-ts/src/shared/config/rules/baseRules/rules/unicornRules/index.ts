import { preventAbbreviations } from "./options/preventAbbreviations"
import { SEVERITY } from "../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../../../libs/shared-for-config/types/EslintRules"

export const unicornRules = {
  "unicorn/consistent-destructuring": SEVERITY.WARN,
  "unicorn/explicit-length-check": SEVERITY.OFF,
  "unicorn/filename-case": SEVERITY.OFF,
  "unicorn/new-for-builtins": SEVERITY.OFF,
  "unicorn/no-array-callback-reference": SEVERITY.OFF,
  "unicorn/no-array-for-each": SEVERITY.OFF,
  "unicorn/no-array-reduce": SEVERITY.OFF,
  "unicorn/no-lonely-if": SEVERITY.OFF,
  "unicorn/no-new-array": SEVERITY.OFF,
  "unicorn/no-null": SEVERITY.OFF,
  "unicorn/no-useless-undefined": SEVERITY.OFF,
  "unicorn/prefer-module": SEVERITY.OFF,
  "unicorn/prefer-node-protocol": SEVERITY.OFF,
  "unicorn/prefer-number-properties": SEVERITY.OFF,
  "unicorn/prevent-abbreviations": preventAbbreviations,
} as const satisfies EslintRules
