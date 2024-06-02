import { PREFIX } from "../../constants/PREFIX"
import { getConfigRules } from "../getConfigRules"

import type { ConfigBase } from "../../types/ConfigBase"
import type { Options } from "../../types/Options"
import type { RuleName } from "../../types/RuleName"

type GetLegacyConfigs = (pluginName: string) => (configBases: ConfigBase[]) => {
  plugins: string[]
  rules: Record<RuleName, Options>
}

export const getLegacyConfig: GetLegacyConfigs = (pluginName) => (configBases) => ({
  plugins: [`${PREFIX}${pluginName}`],
  rules: configBases.reduce(getConfigRules(pluginName), {}),
})
