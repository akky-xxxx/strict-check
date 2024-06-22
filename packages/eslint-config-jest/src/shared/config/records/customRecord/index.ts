import { FILES } from "../../../const/FILES"
import { PACKAGE_NAME } from "../../../const/PACKAGE_NAME"
import { baseRules } from "../../rules/baseRules"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const customRecord = {
  name: `${PACKAGE_NAME}/customRecord`,

  files: FILES.BASE,
  rules: {
    ...baseRules,
  },
} as const satisfies EslintFlatConfig
