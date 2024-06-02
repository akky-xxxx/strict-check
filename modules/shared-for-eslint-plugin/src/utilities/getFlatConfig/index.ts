import { SUFFIX } from "../../constants/SUFFIX"
import { getConfigRules } from "../getConfigRules"

import type { ConfigBase } from "../../types/ConfigBase"
import type { Options } from "../../types/Options"
import type { RuleName } from "../../types/RuleName"
import type { Suffix } from "../../types/Suffix"

type GetFlatConfigs = (
  pluginName: string,
  plugin: Record<string, unknown>,
  configBases: ConfigBase[],
) => {
  plugins: Record<Suffix, Record<string, unknown>>
  rules: Record<RuleName, Options>
}

export const getFlatConfig: GetFlatConfigs = (pluginName, plugin, configBases) => ({
  plugins: {
    [`${SUFFIX}${pluginName}`]: plugin,
  },
  rules: configBases.reduce(getConfigRules(pluginName), {}),
})
