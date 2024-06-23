import { getCompatExtends } from "../../../../libs/shared-for-config/utilities/getCompatExtends"
import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const airbnbRecords = [
  {
    name: `${PACKAGE_NAME}/airbnbRecords`,
  },
  ...getCompatExtends("eslint-config-airbnb", "eslint-config-airbnb/hooks"),
] as const satisfies EslintFlatConfig[]
