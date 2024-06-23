import eslintConfigSCJs from "eslint-config-sc-js"

import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const stylisticRecord = {
  ...eslintConfigSCJs.configs.stylisticRecord,
  name: `${PACKAGE_NAME}/stylisticRecord`,
} as const satisfies EslintFlatConfig
