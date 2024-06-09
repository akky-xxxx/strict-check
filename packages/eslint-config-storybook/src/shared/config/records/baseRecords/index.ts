import { getCompatExtends } from "../../../../libs/shared-for-config/utilities/getCompatExtends"
import { FILES } from "../../../const/FILES"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const baseRecords = [
  {
    files: FILES.BASE,
  },
  ...getCompatExtends(
    "plugin:storybook/addon-interactions",
    "plugin:storybook/csf",
    "plugin:storybook/csf-strict",
    "plugin:storybook/recommended",
  ),
] as const satisfies EslintFlatConfig[]
