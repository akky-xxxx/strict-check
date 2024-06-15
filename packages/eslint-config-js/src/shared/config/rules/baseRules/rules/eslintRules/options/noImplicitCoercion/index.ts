import { SEVERITY } from "../../../../../../../../libs/shared-for-config/constants/SEVERITY"

import type {
  EslintRuleLevelAndOptions,
} from "../../../../../../../../libs/shared-for-config/types/EslintRuleLevelAndOptions"

export const noImplicitCoercion = [
  SEVERITY.WARN,
  {
    boolean: true,
    number: true,
    string: true,
  },
] as const satisfies EslintRuleLevelAndOptions
