import { SEVERITY } from "../../../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRuleLevelAndOptions } from "../../../../../../../../libs/shared-for-config/types/EslintRuleLevelAndOptions"

export const order = [
  SEVERITY.ERROR,
  {
    "newlines-between": "always",

    "alphabetize": { order: "asc" },

    "groups": [
      ["builtin", "external"],
      "internal",
      ["parent", "sibling", "index"],
      "object",
      "type",
    ],
  },
] as const satisfies EslintRuleLevelAndOptions
