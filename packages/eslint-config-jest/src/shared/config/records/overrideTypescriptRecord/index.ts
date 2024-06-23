import { FILES } from "../../../const/FILES"
import { PACKAGE_NAME } from "../../../const/PACKAGE_NAME"
import { overrideTypescriptEslintRules } from "../../rules/overrideTypescriptEslintRules"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const overrideTypescriptRecord = {
  name: `${PACKAGE_NAME}/overrideTypescriptRecord`,

  files: FILES.TS,
  rules: {
    ...overrideTypescriptEslintRules,
  },
} as const satisfies EslintFlatConfig
