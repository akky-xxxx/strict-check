import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"
import { baseRules } from "../../rules/baseRules"
import { customRulesForStylistic } from "../../rules/customRulesForStylistic"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const customRecord = {
  name: `${PACKAGE_NAME}/customRecord`,
  rules: {
    ...baseRules,
    ...customRulesForStylistic,
  },
} as const satisfies EslintFlatConfig
