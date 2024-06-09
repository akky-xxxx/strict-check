import { getCompatExtends } from "../../../../libs/shared-for-config/utilities/getCompatExtends"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const baseRecords = [
  ...getCompatExtends("plugin:react/jsx-runtime", "plugin:react/recommended"),
  ...getCompatExtends("eslint-config-airbnb", "eslint-config-airbnb/hooks"),
] as const satisfies EslintFlatConfig[]
