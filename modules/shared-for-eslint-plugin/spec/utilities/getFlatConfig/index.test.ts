import { getFlatConfig } from "../../../src/utilities/getFlatConfig"

describe("getFlatConfig", () => {
  it("pluginName に「test」を渡すと return.plugins.@strict/test を返す", () => {
    const output = {
      plugins: {
        "@strict/test": {},
      },
      rules: {},
    }
    expect(getFlatConfig("test", {}, [])).toStrictEqual(output)
  })
})
