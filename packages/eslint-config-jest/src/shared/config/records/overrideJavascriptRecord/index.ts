import { FILES } from "../../../const/FILES"
import { PACKAGE_NAME } from "../../../const/PACKAGE_NAME"
import { overrideEslintRules } from "../../rules/overrideEslintRules"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const overrideJavascriptRecord = {
  name: `${PACKAGE_NAME}/overrideJavascriptRecord`,

  files: FILES.JS,
  rules: {
    ...overrideEslintRules,
  },
} as const satisfies EslintFlatConfig
