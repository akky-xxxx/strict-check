import { getRules } from "../../../src/utilities/getRules"

import type { ConfigBase } from "../../../src/types/ConfigBase"

describe("getRules", () => {
  it("実際に使う時の書き方", () => {
    const output = {
      ruleName1: {},
      ruleName2: {},
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

    const result = configBase.reduce(getRules, {})
    expect(result).toStrictEqual(output)
  })
})
