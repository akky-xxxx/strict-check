import { baseRules } from "../shared/config/rules/baseRules"

import type { EslintLegacyConfig } from "../libs/shared-for-config/types/EslintLegacyConfig"

export const legacyConfig = {
  extends: [
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "airbnb-base",
    "prettier", // TODO: stylistic に委譲
  ],
  plugins: ["unicorn"],
  rules: {
    ...baseRules,
  },
} satisfies EslintLegacyConfig
