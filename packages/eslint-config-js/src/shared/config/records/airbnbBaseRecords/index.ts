import { getCompatExtends } from "../../../../libs/shared-for-config/utilities/getCompatExtends"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const airbnbBaseRecords = [
  ...getCompatExtends("eslint-config-airbnb-base"),
] as const satisfies EslintFlatConfig[]
