import { FILES } from "../../../const/FILES"
import { PACKAGE_NAME } from "../../../const/PACKAGE_NAME"
import { overrideEslintRules } from "../../rules/overrideEslintRules"
import { overrideImportRules } from "../../rules/overrideImportRules"
import { typescriptEslintOverrideRules } from "../../rules/typescriptEslintOverrideRules"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const overrideTypescriptRecord = {
  name: `${PACKAGE_NAME}/overrideTypescriptRecord`,

  files: FILES.TS,
  rules: {
    ...overrideEslintRules,
    ...overrideImportRules,
    ...typescriptEslintOverrideRules,
  },
} as const satisfies EslintFlatConfig
