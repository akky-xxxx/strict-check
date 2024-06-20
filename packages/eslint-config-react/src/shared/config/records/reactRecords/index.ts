import { getCompatExtends } from "../../../../libs/shared-for-config/utilities/getCompatExtends"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const reactRecords = [
  ...getCompatExtends("plugin:react/jsx-runtime", "plugin:react/recommended"),
] as const satisfies EslintFlatConfig[]
