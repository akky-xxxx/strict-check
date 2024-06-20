import { FILES } from "../../../const/FILES"
import { typescriptEslintOverrideRules } from "../../rules/typescriptEslintOverrideRules"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const typescriptEslintOverrideRecord = {
  files: FILES.TS,
  rules: {
    ...typescriptEslintOverrideRules,
  },
} as const satisfies EslintFlatConfig
