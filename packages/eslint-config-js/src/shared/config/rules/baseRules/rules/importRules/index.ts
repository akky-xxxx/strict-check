import { extensions } from "./options/extensions"
import { order } from "./options/order"
import { SEVERITY } from "../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../../../libs/shared-for-config/types/EslintRules"

export const importRules = {
  "import/consistent-type-specifier-style": [SEVERITY.ERROR, "prefer-top-level"],
  "import/extensions": extensions,
  "import/no-cycle": [SEVERITY.ERROR, { maxDepth: 1 }],
  "import/no-default-export": SEVERITY.ERROR,
  "import/no-deprecated": SEVERITY.WARN,
  "import/no-empty-named-blocks": SEVERITY.ERROR,
  "import/no-extraneous-dependencies": SEVERITY.ERROR,
  "import/no-mutable-exports": SEVERITY.ERROR,
  "import/order": order,
  "import/prefer-default-export": SEVERITY.OFF,
} as const satisfies EslintRules
