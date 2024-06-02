import { PREFIX } from "../../constants/PREFIX"

import type { GetRulesBase } from "../../types/GetRulesBase"
import type { Options } from "../../types/Options"
import type { RuleName } from "../../types/RuleName"

type GetConfigRules = GetRulesBase<Record<RuleName, Options>>
export const getConfigRules: GetConfigRules = (pluginName) => (current, configBase) => {
  const [ruleName, , options] = configBase
  return {
    ...current,
    [`${PREFIX}${pluginName}/${ruleName}`]: options,
  }
}
