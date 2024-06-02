import type { ConfigBase } from "../../types/ConfigBase"

type GetRules = <T>(current: T, configBase: ConfigBase) => T
export const getRules: GetRules = (current, configBase) => {
  const [ruleName, ruleFunction] = configBase
  return {
    ...current,
    [ruleName]: ruleFunction,
  }
}
