import { getRules } from "../../../src/utilities/getRules"

import type { ConfigBase } from "../../../src/types/ConfigBase"

describe("getRules", () => {
  it("実際に使う時の書き方", () => {
    const output = {
      "@strict/test/ruleName1": {},
      "@strict/test/ruleName2": {},
    }
    const configBase: ConfigBase[] = [
      [
        "ruleName1",
        // @ts-expect-error this value is out of test
        {},
        [],
      ],
      [
        "ruleName2",
        // @ts-expect-error this value is out of test
        {},
        [],
      ],
    ]

    const result = configBase.reduce(getRules("test"), {})
    expect(result).toStrictEqual(output)
  })
})
