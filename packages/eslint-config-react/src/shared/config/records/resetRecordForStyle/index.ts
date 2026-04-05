import eslintConfigSCJs from "eslint-config-sc-js"

import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"
import { resetRulesForStyle } from "../../rules/resetRulesForStyle"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const resetRecordForStyle = {
  name: `${PACKAGE_NAME}/resetRecordForStyle`,
  rules: {
    ...eslintConfigSCJs.configs.resetRecordForStyle.rules,
    ...resetRulesForStyle,
  },
} as const satisfies EslintFlatConfig
