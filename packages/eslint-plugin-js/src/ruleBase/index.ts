import { filePathPatterns } from "../rules/file-path-patterns"
import { forbiddenMultipleNamedExports } from "../rules/forbidden-multiple-named-exports"
import { individualImport } from "../rules/individual-import"
import { matchNamesOfFileAndExport } from "../rules/match-names-of-file-and-export"
import { restrictUseOfProcessEnv } from "../rules/restrict-use-of-process-env"

import type { RuleBase } from "../libs/shared-for-plugin"

const OFF = 0
const WARN = 1

export const ruleBase = {
  "file-path-patterns": [filePathPatterns, [OFF]],
  "forbidden-multiple-named-exports": [forbiddenMultipleNamedExports, [OFF]],
  "individual-import": [individualImport, [OFF]],
  "match-names-of-file-and-export": [matchNamesOfFileAndExport, [OFF]],
  "restrict-use-of-process-env": [restrictUseOfProcessEnv, [WARN]],
} satisfies RuleBase
