import stylistic from "@stylistic/eslint-plugin"

import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const stylisticRecord = {
  ...stylistic.configs["recommended-flat"],
  name: `${PACKAGE_NAME}/stylisticRecord`,
} as const satisfies EslintFlatConfig
