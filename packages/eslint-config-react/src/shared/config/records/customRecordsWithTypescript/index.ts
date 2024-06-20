import { typescriptRules } from "../../rules/typescriptRules"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

// TODO: 0.0.3 以降で削除
export const customRecordsWithTypescript = [
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      ...typescriptRules,
    },
  },
] as const satisfies EslintFlatConfig[]
