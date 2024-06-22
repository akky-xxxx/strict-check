import eslintPluginNext from "@next/eslint-plugin-next"

import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const nextRecord = {
  name: `${PACKAGE_NAME}/nextRecord`,
  plugins: {
    "@next/next": eslintPluginNext,
  },
  rules: {
    ...eslintPluginNext.configs["core-web-vitals"].rules,
  },
} as const satisfies EslintFlatConfig
