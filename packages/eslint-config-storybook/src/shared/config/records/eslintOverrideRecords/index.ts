import { FILES } from "../../../const/FILES"
import { eslintOverrideRules } from "../../rules/eslintOverrideRules"
import { importOverrideRules } from "../../rules/importOverrideRules"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

// TODO: 0.0.4 以降で削除
export const eslintOverrideRecords = [
  {
    files: FILES.JS,
    rules: {
      ...eslintOverrideRules,
      ...importOverrideRules,
    },
  },
] as const satisfies EslintFlatConfig[]
