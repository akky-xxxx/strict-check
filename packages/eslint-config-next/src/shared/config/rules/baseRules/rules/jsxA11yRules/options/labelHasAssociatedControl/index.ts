import { SEVERITY } from "../../../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRuleLevelAndOptions } from "../../../../../../../../libs/shared-for-config/types/EslintRuleLevelAndOptions"

export const labelHasAssociatedControl = [
  SEVERITY.ERROR,
  {
    controlComponents: ["StyledTextarea"],
  },
] as const satisfies EslintRuleLevelAndOptions
