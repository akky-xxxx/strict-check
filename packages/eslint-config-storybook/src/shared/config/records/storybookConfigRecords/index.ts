import { getCompatExtends } from "../../../../libs/shared-for-config/utilities/getCompatExtends"
import { FILES } from "../../../const/FILES"
import { PACKAGE_NAME } from "../../../const/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const storybookConfigRecords = [
  {
    name: `${PACKAGE_NAME}/storybookConfigRecords`,

    files: FILES.BASE,
  },
  ...getCompatExtends(
    "plugin:storybook/addon-interactions",
    "plugin:storybook/csf",
    "plugin:storybook/csf-strict",
    "plugin:storybook/recommended",
  ),
] as const satisfies EslintFlatConfig[]
