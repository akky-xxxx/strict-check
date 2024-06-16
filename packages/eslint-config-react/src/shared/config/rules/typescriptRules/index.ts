import { reactRules as pluginReactRules } from "./rules/reactRules"
import { typescriptEslintRules } from "./rules/typescriptEslint"

import type { EslintRules } from "../../../../libs/shared-for-config/types/EslintRules"

export const typescriptRules = {
  ...pluginReactRules,
  ...typescriptEslintRules,
} as const satisfies EslintRules
