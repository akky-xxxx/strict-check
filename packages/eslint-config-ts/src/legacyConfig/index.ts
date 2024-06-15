import eslintConfigSCJs from "eslint-config-sc-js"

import { baseRules } from "../shared/config/rules/baseRules"
import { settings } from "../shared/config/settings"

import type { EslintLegacyConfig } from "../libs/shared-for-config/types/EslintLegacyConfig"

const ZERO = 0

export const legacyConfig = {
  extends: [
    "plugin:@stylistic/recommended-extends",
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:unicorn/recommended",
    "airbnb-base",
  ],
  plugins: ["@typescript-eslint", "unicorn"],
  rules: {
    ...eslintConfigSCJs.configs.customRecords[ZERO].rules,
    ...baseRules,
    ...eslintConfigSCJs.configs.resetRecordsForStylistic[ZERO].rules,
  },
  settings: {
    ...settings,
  },
} satisfies EslintLegacyConfig
