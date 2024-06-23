import { getCompatExtends } from "../../../../libs/shared-for-config/utilities/getCompatExtends"
import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const reactRecords = [
  {
    name: `${PACKAGE_NAME}/reactRecords`,
  },
  ...getCompatExtends("plugin:react/jsx-runtime", "plugin:react/recommended"),
] as const satisfies EslintFlatConfig[]
