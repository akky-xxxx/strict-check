import { FILES } from "../../../const/FILES"
import { PACKAGE_NAME } from "../../../const/PACKAGE_NAME"
import { eslintOverrideRules } from "../../rules/eslintOverrideRules"
import { importOverrideRules } from "../../rules/importOverrideRules"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const eslintOverrideRecord = {
  name: `${PACKAGE_NAME}/eslintOverrideRecord`,

  files: FILES.JS,
  rules: {
    ...eslintOverrideRules,
    ...importOverrideRules,
  },
} as const satisfies EslintFlatConfig
