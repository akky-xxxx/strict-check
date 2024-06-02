import { extensions } from "./options/extensions"
import { order } from "./options/order"
import { SEVERITY } from "../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../../../libs/shared-for-config/types/EslintRules"

export const importRules = {
  "import/extensions": extensions,
  "import/no-default-export": SEVERITY.ERROR,
  "import/order": order,
  "import/prefer-default-export": SEVERITY.OFF,
} as const satisfies EslintRules
