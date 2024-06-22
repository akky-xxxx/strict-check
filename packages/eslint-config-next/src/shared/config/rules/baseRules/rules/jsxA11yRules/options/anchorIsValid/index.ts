import { SEVERITY } from "../../../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRuleLevelAndOptions } from "../../../../../../../../libs/shared-for-config/types/EslintRuleLevelAndOptions"

export const anchorIsValid = [
  SEVERITY.ERROR,
  {
    aspects: ["invalidHref", "preferButton"],
    components: ["Link"],
    specialLink: ["hrefLeft", "hrefRight"],
  },
] as const satisfies EslintRuleLevelAndOptions
