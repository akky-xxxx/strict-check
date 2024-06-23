import { FILES } from "../../../const/FILES"
import { overrideEslintRules } from "../../rules/overrideEslintRules"
import { overrideImportRules } from "../../rules/overrideImportRules"
import { typescriptEslintOverrideRules } from "../../rules/typescriptEslintOverrideRules"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

// TODO: 0.0.4 以降で削除
export const typescriptEslintOverrideRecords = [
  {
    files: FILES.TS,
    rules: {
      ...overrideEslintRules,
      ...overrideImportRules,
      ...typescriptEslintOverrideRules,
    },
  },
] as const satisfies EslintFlatConfig[]
