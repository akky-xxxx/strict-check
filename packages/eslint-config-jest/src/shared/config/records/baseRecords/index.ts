import { getCompatExtends } from "../../../../libs/shared-for-config/utilities/getCompatExtends"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

// TODO: 0.0.4 以降で削除
export const baseRecords = [
  ...getCompatExtends("plugin:jest/recommended", "plugin:jest/style"),
] as const satisfies EslintFlatConfig[]
