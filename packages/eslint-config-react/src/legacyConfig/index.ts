import eslintConfigSCJs from "eslint-config-sc-js"

import { baseRules } from "../shared/config/rules/baseRules"
import { resetRulesForStylistic } from "../shared/config/rules/resetRulesForStylistic"
import { typescriptRules } from "../shared/config/rules/typescriptRules"

import type { EslintLegacyConfig } from "../libs/shared-for-config/types/EslintLegacyConfig"

const ZERO = 0

export const legacyConfig = {
  extends: [
    "plugin:@stylistic/recommended-extends",
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
  ],
  plugins: ["react", "react-hooks"],
  rules: {
    ...eslintConfigSCJs.configs.customRecords[ZERO].rules,
    ...baseRules,
    ...resetRulesForStylistic,
    ...eslintConfigSCJs.configs.resetRecordsForStylistic[ZERO].rules,
  },

  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        ...typescriptRules,
      },
    },
  ],
} satisfies EslintLegacyConfig
