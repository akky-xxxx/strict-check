import { FILES } from "../../../const/FILES"
import { PACKAGE_NAME } from "../../../const/PACKAGE_NAME"
import { eslintOverrideRules } from "../../rules/eslintOverrideRules"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const overrideJavascriptRecord = {
  name: `${PACKAGE_NAME}/overrideJavascriptRecord`,

  files: FILES.JS,
  rules: {
    ...eslintOverrideRules,
  },
} as const satisfies EslintFlatConfig
