import { getCompatExtends } from "../../../../libs/shared-for-config/utilities/getCompatExtends"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

// TODO: 0.0.3 以降で削除
export const baseRecords2 = [
  ...getCompatExtends("plugin:react/jsx-runtime", "plugin:react/recommended"),
  ...getCompatExtends("eslint-config-airbnb", "eslint-config-airbnb/hooks"),
] as const satisfies EslintFlatConfig[]
