import eslintConfigSCJs from "eslint-config-sc-js"

import { SEVERITY } from "../../../../libs/shared-for-config/constants/SEVERITY"
import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"
import { settings } from "../../settings"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const initialRecord = {
  ...eslintConfigSCJs.configs.initialRecord,
  linterOptions: {
    ...eslintConfigSCJs.configs.initialRecord.linterOptions,
    reportUnusedDisableDirectives: SEVERITY.OFF,
  },
  name: `${PACKAGE_NAME}/initialRecord`,
  settings,
} as const satisfies EslintFlatConfig
