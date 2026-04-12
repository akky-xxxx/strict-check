import { SEVERITY } from "../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../../../libs/shared-for-config/types/EslintRules"

const INDENT_SIZE = 2

export const eslintRules = {
  indent: [
    SEVERITY.ERROR,
    INDENT_SIZE,
    {
      ignoredNodes: ["JSXElement", "JSXElement *"],
    },
  ],
  "no-use-before-define": SEVERITY.OFF,
} as const satisfies EslintRules
