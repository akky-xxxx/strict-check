import eslintPluginNext from "@next/eslint-plugin-next"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const nextRecord = {
  plugins: {
    "@next/next": eslintPluginNext,
  },
  rules: {
    ...eslintPluginNext.configs["core-web-vitals"].rules,
  },
} as const satisfies EslintFlatConfig
