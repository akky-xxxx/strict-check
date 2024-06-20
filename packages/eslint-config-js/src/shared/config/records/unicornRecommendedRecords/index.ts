import { getCompatExtends } from "../../../../libs/shared-for-config/utilities/getCompatExtends"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const unicornRecommendedRecords = [
  ...getCompatExtends("plugin:unicorn/recommended"),
] as const satisfies EslintFlatConfig[]
