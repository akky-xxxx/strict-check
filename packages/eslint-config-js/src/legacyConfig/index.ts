import { baseRules } from "../shared/config/rules/baseRules"

import type { EslintLegacyConfig } from "../libs/shared-for-config/types/EslintLegacyConfig"

export const legacyConfig = {
  extends: [
    "plugin:@stylistic/recommended-extends",
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "airbnb-base",
  ],
  plugins: ["unicorn"],
  rules: {
    ...baseRules,
  },

  reportUnusedDisableDirectives: true,
} satisfies EslintLegacyConfig
