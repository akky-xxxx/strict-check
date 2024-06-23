import { getCompatExtends } from "../../../../libs/shared-for-config/utilities/getCompatExtends"
import { FILES } from "../../../const/FILES"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

// TODO: 0.0.4 以降で削除
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
