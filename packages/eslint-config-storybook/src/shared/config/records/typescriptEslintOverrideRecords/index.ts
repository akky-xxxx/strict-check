import { FILES } from "../../../const/FILES"
import { eslintOverrideRules } from "../../rules/eslintOverrideRules"
import { importOverrideRules } from "../../rules/importOverrideRules"
import { typescriptEslintOverrideRules } from "../../rules/typescriptEslintOverrideRules"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

// TODO: 0.0.4 以降で削除
export const typescriptEslintOverrideRecords = [
  {
    files: FILES.TS,
    rules: {
      ...eslintOverrideRules,
      ...importOverrideRules,
      ...typescriptEslintOverrideRules,
    },
  },
] as const satisfies EslintFlatConfig[]
