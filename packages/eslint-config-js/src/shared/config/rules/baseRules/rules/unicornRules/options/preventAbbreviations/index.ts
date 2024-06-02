import { SEVERITY } from "../../../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRuleLevelAndOptions } from "../../../../../../../../libs/shared-for-config/types/EslintRuleLevelAndOptions"

export const preventAbbreviations = [
  SEVERITY.ERROR,
  {
    // TODO: allowList に変更する
    replacements: Object.fromEntries(
      [
        // TODO: "Prop", "Props" を追加する
        // 許容する略称一覧
        "props",
        "req",
        "res",
        "ref",
        "env",
      ].map((keyword) => [keyword, false]),
    ),
  },
] as const satisfies EslintRuleLevelAndOptions
