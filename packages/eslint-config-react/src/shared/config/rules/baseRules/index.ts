import { eslintRules } from "./rules/eslintRules"
import { jsxA11yRules } from "./rules/jsxA11yRules"
import { reactRules as pluginReactRules } from "./rules/reactRules"

import type { EslintRules } from "../../../../libs/shared-for-config/types/EslintRules"

export const baseRules = {
  ...eslintRules,
  ...jsxA11yRules,
  ...pluginReactRules,
} as const satisfies EslintRules
