import { typescriptRules } from "../../rules/typescriptRules"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const customRecordsWithTypescript = [
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      ...typescriptRules,
    },
  },
] as const satisfies EslintFlatConfig[]
