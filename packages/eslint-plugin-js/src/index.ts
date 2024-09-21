import { convertBaseToConfigBase, getFlatConfig, getRules } from "./libs/shared-for-plugin"
import { ruleBase } from "./ruleBase"

const PLUGIN_NAME = "js"
const configsBase = convertBaseToConfigBase(ruleBase)
const rules = configsBase.reduce(getRules, {})

const plugin = {
  configs: {},
  rules,
}

plugin.configs = {
  recommended: getFlatConfig(PLUGIN_NAME, plugin, configsBase),
}

export = plugin
