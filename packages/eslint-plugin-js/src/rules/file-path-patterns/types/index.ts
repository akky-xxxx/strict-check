import type { OptionBase } from "../../../libs/shared-for-plugin"

export type MessageId = "NotMatched"

export type Option = OptionBase<{
  allowPatterns: RegExp[]
}>
