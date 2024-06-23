import { FILES } from "../../../const/FILES"
import { PACKAGE_NAME } from "../../../const/PACKAGE_NAME"
import { typescriptEslintOverrideRules } from "../../rules/typescriptEslintOverrideRules"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const overrideTypescriptRecord = {
  name: `${PACKAGE_NAME}/overrideTypescriptRecord`,

  files: FILES.TS,
  rules: {
    ...typescriptEslintOverrideRules,
  },
} as const satisfies EslintFlatConfig
