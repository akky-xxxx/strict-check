import { convertBaseToConfigBase, getFlatConfig, getLegacyConfig, getRules } from "./libs/shared-for-plugin"
import { ruleBase } from "./ruleBase"

const PLUGIN_NAME = "js"
const configsBase = convertBaseToConfigBase(ruleBase)
const rules = configsBase.reduce(getRules(PLUGIN_NAME), {})

const plugin = {
  configs: {},
  rules,
}

plugin.configs = {
  legacy: getLegacyConfig(PLUGIN_NAME)(configsBase),
  recommended: getFlatConfig(PLUGIN_NAME, plugin, configsBase),
}

export = plugin
