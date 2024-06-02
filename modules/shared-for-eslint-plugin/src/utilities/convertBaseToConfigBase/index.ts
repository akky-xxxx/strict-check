import type { ConfigBase } from "../../types/ConfigBase"
import type { RuleBase } from "../../types/RuleBase"

type ConvertBaseToConfigBase = (ruleBase: RuleBase) => ConfigBase[]
export const convertBaseToConfigBase: ConvertBaseToConfigBase = (base) =>
  Object.entries(base).map(([key, value]) => [key, ...value])
