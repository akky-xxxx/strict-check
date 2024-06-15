import { maxLinesPerFunction } from "./options/maxLinesPerFunction"
import { noImplicitCoercion } from "./options/noImplicitCoercion"
import { SEVERITY } from "../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../../../libs/shared-for-config/types/EslintRules"

export const eslintRules = {
  /* eslint-disable @typescript-eslint/no-magic-numbers */
  "complexity": [SEVERITY.ERROR, 5],
  "curly": [SEVERITY.WARN, "multi-or-nest"],
  "max-depth": [SEVERITY.ERROR, 3],
  "max-lines": [SEVERITY.ERROR, { max: 100 }],
  "max-lines-per-function": maxLinesPerFunction,
  "max-nested-callbacks": [SEVERITY.ERROR, 3],
  "max-params": [SEVERITY.ERROR, 2],
  "max-statements": [SEVERITY.ERROR, 10],
  "multiline-comment-style": SEVERITY.OFF,
  "no-implicit-coercion": noImplicitCoercion,
  "no-magic-numbers": SEVERITY.WARN,
  "no-use-before-define": SEVERITY.ERROR,
  "prefer-named-capture-group": SEVERITY.WARN,
  "sort-keys": [SEVERITY.WARN, "asc", { allowLineSeparatedGroups: true }],
  /* eslint-enable @typescript-eslint/no-magic-numbers */
} as const satisfies EslintRules
