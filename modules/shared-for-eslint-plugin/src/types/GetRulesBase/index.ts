import type { ConfigBase } from "../ConfigBase"

export type GetRulesBase<T> = (pluginName: string) => (current: T, configBase: ConfigBase) => T
