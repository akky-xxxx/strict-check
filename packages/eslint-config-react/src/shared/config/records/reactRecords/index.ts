import { getCompatExtends } from "../../../../libs/shared-for-config/utilities/getCompatExtends"
import { PACKAGE_NAME } from "../../../constants/PACKAGE_NAME"

import type { EslintFlatConfig } from "../../../../libs/shared-for-config/types/EslintFlatConfig"

export const reactRecords = [
  {
    name: `${PACKAGE_NAME}/reactRecords`,
  },
  ...getCompatExtends(
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    // plugin:react-hooks/recommended を丸ごと採用している。React Compiler の設定・導入自体を
    // 検証するルール (config, gating, preserve-manual-memoization) は Compiler の導入方針に
    // 応じて適宜 OFF にすること。
    "plugin:react-hooks/recommended",
  ),
] as const satisfies EslintFlatConfig[]
