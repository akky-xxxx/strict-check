import { baseRules } from "../shared/config/rules/baseRules"
import { typescriptRules } from "../shared/config/rules/typescriptRules"

import type { EslintLegacyConfig } from "../libs/shared-for-config/types/EslintLegacyConfig"

export const legacyConfig = {
  extends: [
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "prettier", // TODO: stylistic に委譲
  ],
  plugins: ["react", "react-hooks"],
  rules: {
    ...baseRules,
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
