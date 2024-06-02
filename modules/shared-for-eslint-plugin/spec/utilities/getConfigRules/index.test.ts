import { getConfigRules } from "../../../src/utilities/getConfigRules"

import type { ConfigBase } from "../../../src/types/ConfigBase"

describe("getConfigRules", () => {
  it("実際に使う時の書き方", () => {
    const output = {
      "sc-test/ruleName1": [],
      "sc-test/ruleName2": [],
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

    const result = configBase.reduce(getConfigRules("test"), {})
    expect(result).toStrictEqual(output)
  })
})
