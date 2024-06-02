import type { ConfigBase } from "../ConfigBase"
import type { RuleName } from "../RuleName"

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
export type RuleBase = Record<RuleName, [ConfigBase[1], ConfigBase[2]]>
