import eslint from "@eslint/js"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const eslintRecommendedRecord = {
  ...eslint.configs.recommended,
} as const satisfies EslintFlatConfig
