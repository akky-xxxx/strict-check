import { ARRAY_FIRST_INDEX, parseOptions } from "../../../../libs/shared-for-plugin"
import { optionsSchema } from "../../schema/optionSchema"

import type { MessageId, Option } from "../../types"
import type { TSESLint, TSESTree } from "@typescript-eslint/utils"

export type Context = Readonly<
  TSESLint.RuleContext<MessageId, readonly Option[]>
>
type ExportNamedDeclaration = (
  context: Context,
) => TSESLint.RuleFunction<TSESTree.ExportNamedDeclaration>

const CAPTURED_INDEX = 1

export const exportNamedDeclaration: ExportNamedDeclaration = (context) => {
  const { filename, options, report } = context
  const parsedOptions = parseOptions(options, optionsSchema)
  const captures = parsedOptions.at(ARRAY_FIRST_INDEX)?.captures

  if (!Array.isArray(captures)) {
    // zod でヘラーハンドリングしてる
    throw new Error("")
  }

  const matchedCapture = captures.find((capture) => new RegExp(capture).test(filename))

  return (node) => {
    if (!matchedCapture) return

    const { declaration } = node

    if (declaration?.type !== "VariableDeclaration") return

    const firstDeclaration = declaration.declarations.at(ARRAY_FIRST_INDEX)
    if (firstDeclaration?.id.type !== "Identifier") return
    const {
      id: { name: variableName },
    } = firstDeclaration

    const capturedString = filename.match(matchedCapture)?.at(CAPTURED_INDEX)

    if (variableName === capturedString) return

    report({
      data: {
        capturedString,
        filepath: filename,
        variableName,
      },
      messageId: "FileAndExportAreDifferent",
      node,
    })
  }
}
