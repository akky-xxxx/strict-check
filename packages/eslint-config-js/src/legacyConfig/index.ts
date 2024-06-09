import { baseRules } from "../shared/config/rules/baseRules"

import type { EslintLegacyConfig } from "../libs/shared-for-config/types/EslintLegacyConfig"

export const legacyConfig = {
  extends: [
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "airbnb-base",
  ],
  plugins: ["unicorn"],
  rules: {
    ...baseRules,
  },
} satisfies EslintLegacyConfig
