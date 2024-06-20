import { FILES } from "../../../const/FILES"
import { baseRules } from "../../rules/baseRules"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const customRecord = {
  files: FILES.BASE,
  rules: {
    ...baseRules,
  },
} as const satisfies EslintFlatConfig
