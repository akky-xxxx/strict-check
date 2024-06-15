import { SEVERITY } from "../../../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRuleLevelAndOptions } from "../../../../../../../../libs/shared-for-config/types/EslintRuleLevelAndOptions"

export const preferDestructuring = [
  SEVERITY.ERROR,
  {
    AssignmentExpression: {
      array: true,
      object: false,
    },
    VariableDeclarator: {
      array: false,
      object: true,
    },
  },
  { enforceForRenamedProperties: false },
] as const satisfies EslintRuleLevelAndOptions
