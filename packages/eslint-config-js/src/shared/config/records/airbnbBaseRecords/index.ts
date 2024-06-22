import { getCompatExtends } from "../../../../libs/shared-for-config/utilities/getCompatExtends"
import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const airbnbBaseRecords = [
  {
    name: `${PACKAGE_NAME}/airbnbBaseRecords`,
  },
  ...getCompatExtends("eslint-config-airbnb-base"),
] as const satisfies EslintFlatConfig[]
