import eslintConfigSCJs from "eslint-config-sc-js"

import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"
import { resetRulesForStylistic } from "../../rules/resetRulesForStylistic"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const resetRecordForStylistic = {
  name: `${PACKAGE_NAME}/resetRecordForStylistic`,
  rules: {
    ...eslintConfigSCJs.configs.resetRecordForStylistic.rules,
    ...resetRulesForStylistic,
  },
} as const satisfies EslintFlatConfig
