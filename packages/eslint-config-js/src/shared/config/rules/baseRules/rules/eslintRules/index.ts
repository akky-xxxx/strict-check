import { SEVERITY } from "../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../../../libs/shared-for-config/types/EslintRules"

export const eslintRules = {
  /* eslint-disable @typescript-eslint/no-magic-numbers */
  "complexity": [SEVERITY.ERROR, 5],
  "max-depth": [SEVERITY.ERROR, 3],
  "max-len": SEVERITY.OFF, // check by stylistic
  "max-lines": [SEVERITY.ERROR, { max: 100 }],
  "max-nested-callbacks": [SEVERITY.ERROR, 3],
  "max-statements": [SEVERITY.ERROR, 10],
  "multiline-comment-style": SEVERITY.OFF,
  "no-magic-numbers": SEVERITY.WARN, // TODO: off にして typescript-eslint に移乗する
  "no-multi-spaces": SEVERITY.OFF, // check by stylistic
  "no-undefined": SEVERITY.WARN, // TODO: off にする
  "no-unused-vars": SEVERITY.OFF, // check by tsc
  "no-use-before-define": SEVERITY.OFF, // check by typescript-eslint
  "object-curly-newline": SEVERITY.OFF, // check by stylistic
  "quotes": SEVERITY.OFF, // check by stylistic
  "semi": SEVERITY.OFF, // check by stylistic
  "sort-keys": [SEVERITY.WARN, "asc", { allowLineSeparatedGroups: true }],
  /* eslint-enable @typescript-eslint/no-magic-numbers */
} as const satisfies EslintRules
