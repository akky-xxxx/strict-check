import eslintConfigSCJs from "eslint-config-sc-js"

import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"
import { languageOptions } from "../../languageOptions"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const initialRecord = {
  ...eslintConfigSCJs.configs.initialRecord,
  ...languageOptions,
  name: `${PACKAGE_NAME}/initialRecord`,
} as const satisfies EslintFlatConfig
