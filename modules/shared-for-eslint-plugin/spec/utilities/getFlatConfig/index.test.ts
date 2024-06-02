import { getFlatConfig } from "../../../src/utilities/getFlatConfig"

describe("getFlatConfig", () => {
  it("pluginName に「test」を渡すと return.plugins.sc-test を返す", () => {
    const output = {
      plugins: {
        "sc-test": {},
      },
      rules: {},
    }
    expect(getFlatConfig("test", {}, [])).toStrictEqual(output)
  })
})
