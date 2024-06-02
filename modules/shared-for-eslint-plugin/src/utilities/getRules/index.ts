import { SUFFIX } from "../../constants/SUFFIX"

import type { EsLintRuleBase } from "../../types/EsLintRuleBase"
import type { GetRulesBase } from "../../types/GetRulesBase"
import type { RuleName } from "../../types/RuleName"

type GetRules = GetRulesBase<Record<RuleName, EsLintRuleBase>>
export const getRules: GetRules = (pluginName) => (current, configBase) => {
  const [ruleName, ruleFunction] = configBase
  return {
    ...current,
    [`${SUFFIX}${pluginName}/${ruleName}`]: ruleFunction,
  }
}
