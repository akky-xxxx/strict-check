import { FILES } from "../../../const/FILES"
import { baseRules } from "../../rules/baseRules"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

// TODO: 0.0.4 以降で削除
export const customRecords = [
  {
    files: FILES.BASE,
    rules: {
      ...baseRules,
    },
  },
] as const satisfies EslintFlatConfig[]
