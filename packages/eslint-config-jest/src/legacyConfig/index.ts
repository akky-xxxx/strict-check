import { baseRules } from "../shared/config/rules/baseRules"
import { overrideEslintRules } from "../shared/config/rules/overrideEslintRules"
import { overrideTypescriptEslintRules } from "../shared/config/rules/overrideTypescriptEslintRules"
import { FILES } from "../shared/const/FILES"

import type { EslintLegacyConfig } from "../libs/shared-for-config/types/EslintLegacyConfig"

export const legacyConfig = {
  extends: [
    "plugin:jest/recommended",
    "plugin:jest/style",
  ],
  plugins: ["jest"],

  overrides: [
    {
      files: FILES.BASE,
      rules: {
        ...baseRules,
      },
    },
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
