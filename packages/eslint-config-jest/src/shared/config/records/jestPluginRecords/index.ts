import { getCompatExtends } from "../../../../libs/shared-for-config/utilities/getCompatExtends"
import { PACKAGE_NAME } from "../../../const/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const jestPluginRecords = [
  {
    name: `${PACKAGE_NAME}/jestPluginRecords`,
  },
  ...getCompatExtends("plugin:jest/recommended", "plugin:jest/style"),
] as const satisfies EslintFlatConfig[]
