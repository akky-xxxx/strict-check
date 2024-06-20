import { getCompatExtends } from "../../../../libs/shared-for-config/utilities/getCompatExtends"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const airbnbRecords = [
  ...getCompatExtends("eslint-config-airbnb", "eslint-config-airbnb/hooks"),
] as const satisfies EslintFlatConfig[]
