import { matchNamesOfFileAndExport } from "../../../../src/rules/match-names-of-file-and-export"
import { tester } from "../utils/tester"

import type {
  MessageId,
  Option,
} from "../../../../src/rules/match-names-of-file-and-export/types"

const options: Option[] = [
  {
    captures: [
      "/(.+)/index.tsx",
      /(.+)\/index.tsx/,
    ],
  },
]

tester.run<MessageId, Option[]>(
  "match-names-of-file-and-export",
  matchNamesOfFileAndExport,
  {
    valid: [
      {
        code: "type Props = Record<string, never>; export const Button: FC<Props> = () => {};",
        options,
      },
    ],

    invalid: [
      {
        code: "export const button = () => {}",
        options,

        errors: [
          {
            data: {
              capturedString: "Button",
              variableName: "button",
            },
            messageId: "FileAndExportAreDifferent",
          },
        ],
      },
    ],
  },
)
