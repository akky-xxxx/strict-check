import { getCompatExtends } from "../../../../libs/shared-for-config/utilities/getCompatExtends"
import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const unicornRecommendedRecords = [
  {
    name: `${PACKAGE_NAME}/unicornRecommendedRecords`,
  },
  ...getCompatExtends("plugin:unicorn/recommended"),
] as const satisfies EslintFlatConfig[]
