import eslintConfigSCReact from "eslint-config-sc-react"

import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const airbnbRecords = [
  {
    name: `${PACKAGE_NAME}/airbnbRecords`,
  },
  ...eslintConfigSCReact.configs.airbnbRecords,
] as const satisfies EslintFlatConfig[]
