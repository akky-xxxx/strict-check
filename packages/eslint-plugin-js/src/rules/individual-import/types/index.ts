import type { OptionBase } from "../../../libs/shared-for-plugin"

export type MessageId = "NotIndividually"

export type Option = OptionBase<{
  targets: string[]
}>
