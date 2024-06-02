import { getLegacyConfig } from "../../../src/utilities/getLegacyConfig"

describe("getLegacyConfig", () => {
  it("a", () => {
    const output = ["sc-test"]
    const result = getLegacyConfig("test")([])
    expect(result.plugins).toStrictEqual(output)
  })
})
