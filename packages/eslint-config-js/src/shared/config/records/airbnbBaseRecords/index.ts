import { BEST_PRACTICES } from "./constants/BEST_PRACTICES"
import { ERRORS } from "./constants/ERRORS"
import { ES6 } from "./constants/ES6"
import { IMPORTS } from "./constants/IMPORTS"
import { NODE } from "./constants/NODE"
import { STRICT } from "./constants/STRICT"
import { STYLE } from "./constants/STYLE"
import { VARIABLES } from "./constants/VARIABLES"
import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const airbnbBaseRecords = [
  {
    name: `${PACKAGE_NAME}/airbnbBaseRecords`,
  },
  BEST_PRACTICES,
  ERRORS,
  NODE,
  STYLE,
  VARIABLES,
  ES6,
  IMPORTS,
  STRICT,
] as const satisfies EslintFlatConfig[]
