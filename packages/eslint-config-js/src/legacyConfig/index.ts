import { baseRules } from "../shared/config/rules/baseRules"
import { resetRulesForStylistic } from "../shared/config/rules/resetRulesForStylistic"

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
    ...resetRulesForStylistic,
  },

  reportUnusedDisableDirectives: true,
} satisfies EslintLegacyConfig
