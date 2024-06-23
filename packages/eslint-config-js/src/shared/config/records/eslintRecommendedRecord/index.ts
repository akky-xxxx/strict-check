import eslint from "@eslint/js"

import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const eslintRecommendedRecord = {
  ...eslint.configs.recommended,
  name: `${PACKAGE_NAME}/eslintRecommendedRecord`,
} as const satisfies EslintFlatConfig
