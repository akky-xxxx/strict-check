import { ARRAY_FIRST_INDEX, parseOptions } from "../../../../libs/shared-for-plugin"
import { optionsSchema } from "../../schema/optionSchema"

import type { MessageId, Option } from "../../types"
import type { TSESLint, TSESTree } from "@typescript-eslint/utils"

export type Context = Readonly<
  TSESLint.RuleContext<MessageId, readonly Option[]>
>
type Program = (context: Context) => TSESLint.RuleFunction<TSESTree.Program>

export const program: Program = (context) => {
  const { filename, options, report } = context

  const parsedOptions = parseOptions(options, optionsSchema)
  const allowPatterns = parsedOptions.at(ARRAY_FIRST_INDEX)?.allowPatterns

  if (!allowPatterns) {
    // zod でヘラーハンドリングしてる
    throw new Error("")
  }

  const isPartialMatched = allowPatterns.some((pattern) =>
    new RegExp(pattern).test(filename))

  return (node) => {
    if (isPartialMatched) return

    report({
      messageId: "NotMatched",
      node,
    })
  }
}
