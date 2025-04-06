import { SEVERITY } from "../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../../../libs/shared-for-config/types/EslintRules"

const INDENT_SIZE = 2

export const indent = {
  "@stylistic/indent": [
    SEVERITY.ERROR,
    INDENT_SIZE,
    {
      ignoredNodes: ["JSXElement", "JSXElement *"],
    },
  ],
} as const satisfies EslintRules
