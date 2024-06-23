import type { ESLint, Linter } from "eslint"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GetConfigs = (...input: any[]) => Linter.FlatConfig | Linter.FlatConfig[]

export type Plugin = ESLint.Plugin & {
  getConfigs?: GetConfigs | undefined
}
