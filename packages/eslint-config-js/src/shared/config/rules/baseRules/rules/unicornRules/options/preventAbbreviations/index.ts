import { SEVERITY } from "../../../../../../../../libs/shared-for-config/constants/SEVERITY"

import type { EslintRuleLevelAndOptions } from "../../../../../../../../libs/shared-for-config/types/EslintRuleLevelAndOptions"

export const preventAbbreviations = [
  SEVERITY.ERROR,
  {
    replacements: Object.fromEntries(
      [
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
