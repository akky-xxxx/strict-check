import type { MessageId, Option } from "../../types"
import type { TSESLint, TSESTree } from "@typescript-eslint/utils"

export type Context = Readonly<
  TSESLint.RuleContext<MessageId, readonly Option[]>
>
type ExportNamedDeclaration = (
  context: Context,
) => TSESLint.RuleFunction<TSESTree.ExportNamedDeclaration>

const COUNT_START = 0
const ONE_TIME = 1

export const exportNamedDeclaration: ExportNamedDeclaration = (context) => {
  const { filename, report } = context
  const counts = {
    [filename]: COUNT_START,
  }

  return (node) => {
    counts[filename] += 1
    const count = counts[filename]

    if (count !== undefined && count <= ONE_TIME) {
      return
    }

    report({
      messageId: "MultipleNamedExported",
      node,
    })
  }
}
