import { getConfigName } from "."

describe("getConfigName", () => {
  describe("成功パターン", () => {
    it.each([
      [
        [
          { name: "name-value1" },
          { name: "name-value2" },
        ],
        "name-value1",
      ],
      [
        { name: "name-value" },
        "name-value",
      ],
    ] as const)("input が %o の時、%s を返す", (input, output) => {
      expect(getConfigName(input)).toBe(output)
    })
  })

  describe("失敗パターン", () => {
    it.each([
      1,
      "1",
      [],
      [{}],
      [{}, { name: "1" }],
      [{ name: 1 }],
      [{ test: 1 }],
      [{ test: "1" }],
      true,
      () => {},
    ] as const)("input が %o の時、エラーを投げる", (input) => {
      expect(() => getConfigName(input)).toThrow("Input is incorrect.")
    })
  })
})
