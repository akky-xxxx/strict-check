import { filePathPatterns } from "../../../../src/rules/file-path-patterns"
import { tester } from "../utils/tester"

import type {
  MessageId,
  Option,
} from "../../../../src/rules/file-path-patterns/types"

tester.run<MessageId, Option[]>("file-path-patterns", filePathPatterns, {
  valid: [
    {
      code: "console.log(\"valid pattern\")",
      options: [{
        allowPatterns: [".+/index.tsx", /.+\/index\.tsx/],
      }],
    },
  ],

  invalid: [
    {
      code: "console.log(\"invalid pattern\")",
      options: [{
        allowPatterns: ["button.tsx", /button\.tsx/],
      }],

      errors: [
        {
          messageId: "NotMatched",
        },
      ],
    },
  ],
})
