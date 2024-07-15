import eslintConfigSCJs from "eslint-config-sc-js"

import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"
import { settings } from "../../settings"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const initialRecord = {
  ...eslintConfigSCJs.configs.initialRecord,
  name: `${PACKAGE_NAME}/initialRecord`,
  settings,
} as const satisfies EslintFlatConfig
