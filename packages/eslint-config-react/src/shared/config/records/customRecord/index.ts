import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"
import { baseRules } from "../../rules/baseRules"
import { customRulesForStyle } from "../../rules/customRulesForStyle"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const customRecord = {
  name: `${PACKAGE_NAME}/customRecord`,
  rules: {
    ...baseRules,
    ...customRulesForStyle,
  },
} as const satisfies EslintFlatConfig
