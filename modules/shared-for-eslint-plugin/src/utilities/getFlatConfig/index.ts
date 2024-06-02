import { PREFIX } from "../../constants/PREFIX"
import { getConfigRules } from "../getConfigRules"

import type { ConfigBase } from "../../types/ConfigBase"
import type { Options } from "../../types/Options"
import type { Prefix } from "../../types/Prefix"
import type { RuleName } from "../../types/RuleName"

type GetFlatConfigs = (
  pluginName: string,
  plugin: Record<string, unknown>,
  configBases: ConfigBase[],
) => {
  plugins: Record<Prefix, Record<string, unknown>>
  rules: Record<RuleName, Options>
}

export const getFlatConfig: GetFlatConfigs = (pluginName, plugin, configBases) => ({
  plugins: {
    [`${PREFIX}${pluginName}`]: plugin,
  },
  rules: configBases.reduce(getConfigRules(pluginName), {}),
})
