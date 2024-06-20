import { typescriptRules } from "../../rules/typescriptRules"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const customRecordWithTypescript = {
  files: ["**/*.ts", "**/*.tsx"],
  rules: {
    ...typescriptRules,
  },
} as const satisfies EslintFlatConfig
