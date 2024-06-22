import eslintConfigSCJs from "eslint-config-sc-js"

import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const airbnbBaseRecords = [
  {
    name: `${PACKAGE_NAME}/airbnbBaseRecords`,
  },
  ...eslintConfigSCJs.configs.airbnbBaseRecords,
] as const satisfies EslintFlatConfig[]
