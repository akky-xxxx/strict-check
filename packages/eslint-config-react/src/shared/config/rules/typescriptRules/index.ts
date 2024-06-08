import { reactRules as pluginReactRules } from "./rules/reactRules"

import type { EslintRules } from "../../../../libs/shared-for-config/types/EslintRules"

export const typescriptRules = {
  ...pluginReactRules,
} as const satisfies EslintRules
