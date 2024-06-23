import { SEVERITY } from "../../../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRuleLevelAndOptions } from "../../../../../../../../libs/shared-for-config/types/EslintRuleLevelAndOptions"

export const booleanPropNaming = [
  SEVERITY.ERROR,
  { rule: "^(is|has|enable|exist)[A-Z]([A-Za-z0-9]?)+" },
] as const satisfies EslintRuleLevelAndOptions
