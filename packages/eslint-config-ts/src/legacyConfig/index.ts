import { baseRules } from "../shared/config/rules/baseRules"
import { settings } from "../shared/config/settings"

import type { EslintLegacyConfig } from "../libs/shared-for-config/types/EslintLegacyConfig"

export const legacyConfig = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:unicorn/recommended",
    "airbnb-base",
    "prettier", // TODO: stylistic に委譲
  ],
  plugins: ["@typescript-eslint", "unicorn"],
  rules: {
    ...baseRules,
  },
  settings: {
    ...settings,
  },
} satisfies EslintLegacyConfig
