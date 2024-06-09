import { eslintOverrideRules } from "../shared/config/rules/eslintOverrideRules"
import { eslintRules } from "../shared/config/rules/eslintOverrideRules/rules/eslintRules"
import { typescriptEslintRules } from "../shared/config/rules/typescriptEslintOverrideRules/rules/typescriptEslintRules"
import { FILES } from "../shared/const/FILES"

import type { EslintLegacyConfig } from "../libs/shared-for-config/types/EslintLegacyConfig"

export const legacyConfig = {
  extends: [
    "plugin:storybook/addon-interactions",
    "plugin:storybook/csf",
    "plugin:storybook/csf-strict",
    "plugin:storybook/recommended",
  ],
  plugins: ["storybook"],

  overrides: [
    {
      files: FILES.JS,
      rules: {
        ...eslintOverrideRules,
      },
    },
    {
      files: FILES.TS,
      rules: {
        ...eslintRules,
        ...typescriptEslintRules,
      },
    },
  ],
} satisfies EslintLegacyConfig
