import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const airbnbRecords = [
  {
    name: `${PACKAGE_NAME}/airbnbRecords`,
  },
] as const satisfies EslintFlatConfig[]
