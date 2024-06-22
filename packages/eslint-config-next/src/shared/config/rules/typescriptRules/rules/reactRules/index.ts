import { SEVERITY } from "../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../../../libs/shared-for-config/types/EslintRules"

export const reactRules = {
  "react/jsx-props-no-spreading": SEVERITY.OFF,
  "react/prop-types": SEVERITY.OFF,
  "react/require-default-props": SEVERITY.OFF,
} as const satisfies EslintRules
