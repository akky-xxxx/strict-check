import eslintConfigSCJs from "eslint-config-sc-js"

import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const scJsCustomRecord = {
  ...eslintConfigSCJs.configs.customRecord,
  name: `${PACKAGE_NAME}/scJsCustomRecord`,
} as const satisfies EslintFlatConfig
