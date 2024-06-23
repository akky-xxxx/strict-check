import { FILES } from "../../../const/FILES"
import { overrideEslintRules } from "../../rules/overrideEslintRules"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

// TODO: 0.0.4 以降で削除
export const eslintOverrideRecords = [
  {
    files: FILES.JS,
    rules: {
      ...overrideEslintRules,
    },
  },
] as const satisfies EslintFlatConfig[]
