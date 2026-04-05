import { SEVERITY } from "../../../../libs/shared-for-config/constants/SEVERITY"
import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const resetRecordForStyle = {
  name: `${PACKAGE_NAME}/resetRecordForStyle`,
  rules: {
    "arrow-parens": SEVERITY.OFF,
    "brace-style": SEVERITY.OFF,
    "comma-dangle": SEVERITY.OFF,
    "key-spacing": SEVERITY.OFF,
    "keyword-spacing": SEVERITY.OFF,
    "max-len": SEVERITY.OFF,
    "no-multi-spaces": SEVERITY.OFF,
    "object-curly-newline": SEVERITY.OFF,
    "quote-props": SEVERITY.OFF,
    "quotes": SEVERITY.OFF,
    "semi": SEVERITY.OFF,
    "space-before-blocks": SEVERITY.OFF,
  },
} as const satisfies EslintFlatConfig
