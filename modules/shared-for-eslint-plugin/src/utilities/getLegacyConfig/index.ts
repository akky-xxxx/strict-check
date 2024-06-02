import { SUFFIX } from "../../constants/SUFFIX"
import { getConfigRules } from "../getConfigRules"

import type { ConfigBase } from "../../types/ConfigBase"
import type { Options } from "../../types/Options"
import type { RuleName } from "../../types/RuleName"

type GetLegacyConfigs = (pluginName: string) => (configBases: ConfigBase[]) => {
  plugins: string[]
  rules: Record<RuleName, Options>
}

export const getLegacyConfig: GetLegacyConfigs = (pluginName) => (configBases) => ({
  plugins: [`${SUFFIX}${pluginName}`],
  rules: configBases.reduce(getConfigRules(pluginName), {}),
})
