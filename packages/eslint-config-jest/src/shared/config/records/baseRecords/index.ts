import { getCompatExtends } from "../../../../libs/shared-for-config/utilities/getCompatExtends"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const baseRecords = [
  ...getCompatExtends("plugin:jest/recommended", "plugin:jest/style"),
] as const satisfies EslintFlatConfig[]
