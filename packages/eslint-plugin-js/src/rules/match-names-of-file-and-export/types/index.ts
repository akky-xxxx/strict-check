import type { OptionBase } from "../../../libs/shared-for-plugin"

export type MessageId = "FileAndExportAreDifferent"

export type Option = OptionBase<{
  captures: RegExp[]
}>
