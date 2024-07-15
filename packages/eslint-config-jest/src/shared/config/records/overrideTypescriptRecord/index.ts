import { FILES } from "../../../const/FILES"
import { PACKAGE_NAME } from "../../../const/PACKAGE_NAME"
import { overrideEslintRules } from "../../rules/overrideEslintRules"
import { overrideImportRules } from "../../rules/overrideImportRules"
import { overrideTypescriptEslintRules } from "../../rules/overrideTypescriptEslintRules"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const overrideTypescriptRecord = {
  name: `${PACKAGE_NAME}/overrideTypescriptRecord`,

  files: FILES.TS,
  rules: {
    ...overrideEslintRules,
    ...overrideImportRules,
    ...overrideTypescriptEslintRules,
  },
} as const satisfies EslintFlatConfig
