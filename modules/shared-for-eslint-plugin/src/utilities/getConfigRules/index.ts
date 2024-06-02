import { SUFFIX } from "../../constants/SUFFIX"

import type { ConfigBase } from "../../types/ConfigBase"
import type { Options } from "../../types/Options"
import type { RuleName } from "../../types/RuleName"

type GetConfigRules<T = Record<RuleName, Options>> =
  (pluginName: string) => (current: T, configBase: ConfigBase) => T
export const getConfigRules: GetConfigRules = (pluginName) => (current, configBase) => {
  const [ruleName, , options] = configBase
  return {
    ...current,
    [`${SUFFIX}${pluginName}/${ruleName}`]: options,
  }
}
