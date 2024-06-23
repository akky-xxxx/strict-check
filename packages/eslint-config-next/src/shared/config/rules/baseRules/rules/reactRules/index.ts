import { booleanPropNaming } from "./options/booleanPropNaming"
import { functionComponentDefinition } from "./options/functionComponentDefinition"
import { jsxNoLeakedRender } from "./options/jsxNoLeakedRender"
import { jsxSortProps } from "./options/jsxSortProps"
import { SEVERITY } from "../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRules } from "../../../../../../libs/shared-for-config/types/EslintRules"

export const reactRules = {
  "react/boolean-prop-naming": booleanPropNaming,
  "react/function-component-definition": functionComponentDefinition,
  "react/iframe-missing-sandbox": SEVERITY.ERROR,
  "react/jsx-filename-extension": [
    SEVERITY.ERROR,
    { extensions: [".js", ".jsx", ".ts", ".tsx"] },
  ],
  "react/jsx-fragments": [SEVERITY.ERROR, "element"],
  "react/jsx-no-leaked-render": jsxNoLeakedRender,
  "react/jsx-sort-props": jsxSortProps,
} as const satisfies EslintRules
