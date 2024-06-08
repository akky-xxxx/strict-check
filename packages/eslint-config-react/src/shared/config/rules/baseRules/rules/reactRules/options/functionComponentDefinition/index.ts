import { SEVERITY } from "../../../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRuleLevelAndOptions } from "../../../../../../../../libs/shared-for-config/types/EslintRuleLevelAndOptions"

export const functionComponentDefinition = [
  SEVERITY.ERROR,
  { namedComponents: "arrow-function" },
] as const satisfies EslintRuleLevelAndOptions
