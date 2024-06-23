import { overrideEslintRules } from "../shared/config/rules/overrideEslintRules"
import { overrideTypescriptEslintRules } from "../shared/config/rules/overrideTypescriptEslintRules"
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
        ...overrideEslintRules,
      },
    },
    {
      files: FILES.TS,
      rules: {
        ...overrideEslintRules,
        ...overrideTypescriptEslintRules,
      },
    },
  ],
} satisfies EslintLegacyConfig
