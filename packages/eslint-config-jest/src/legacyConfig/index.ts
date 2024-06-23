import { baseRules } from "../shared/config/rules/baseRules"
import { eslintOverrideRules } from "../shared/config/rules/eslintOverrideRules"
import { eslintRules } from "../shared/config/rules/eslintOverrideRules/rules/eslintRules"
import { typescriptEslintRules } from "../shared/config/rules/overrideTypescriptEslintRules/rules/typescriptEslintRules"
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
