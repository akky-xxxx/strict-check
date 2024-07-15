import { getConfigsBaseForJavascript } from "../../../../../../../src/getConfigs/modules/getConfigsBase/modules/getConfigsBaseForJavascript"
import { getConfigName } from "../getConfigName"

describe("getConfigsBaseForJavascript", () => {
  describe("javascript with react", () => {
    const result = getConfigsBaseForJavascript(["react"])
    it("getConfigsBaseForJavascript の戻り値は配列長10", () => {
      expect(result).toHaveLength(11)
    })
    it.each([
      [0, "eslint-config-sc-js/initialRecord"],
      [1, "eslint-config-sc-js/stylisticRecord"],
      [2, "eslint-config-sc-js/eslintRecommendedRecord"],
      [3, "eslint-config-sc-js/unicornRecommendedRecords"],
      [4, "eslint-config-sc-react/initialRecord"],
      [5, "eslint-config-sc-react/airbnbRecords"],
      [6, "eslint-config-sc-react/reactRecords"],
      [7, "eslint-config-sc-react/scJsCustomRecord"],
      [8, "eslint-config-sc-js/customRecord"],
      [9, "eslint-config-sc-react/customRecord"],
      [10, "eslint-config-sc-js/resetRecordForStylistic"],
    ] as const)("%i番目の config の name は「%s」", (index, name) => {
      expect(getConfigName(result[index])).toBe(name)
    })
  })
  describe("javascript with react, next", () => {
    const result = getConfigsBaseForJavascript(["next", "react"])
    it("getConfigsBaseForJavascript の戻り値は配列長11", () => {
      expect(result).toHaveLength(12)
    })
    it.each([
      [0, "eslint-config-sc-js/initialRecord"],
      [1, "eslint-config-sc-js/stylisticRecord"],
      [2, "eslint-config-sc-js/eslintRecommendedRecord"],
      [3, "eslint-config-sc-js/unicornRecommendedRecords"],
      [4, "eslint-config-sc-next/nextRecord"],
      [5, "eslint-config-sc-react/initialRecord"],
      [6, "eslint-config-sc-react/airbnbRecords"],
      [7, "eslint-config-sc-react/reactRecords"],
      [8, "eslint-config-sc-react/scJsCustomRecord"],
      [9, "eslint-config-sc-js/customRecord"],
      [10, "eslint-config-sc-react/customRecord"],
      [11, "eslint-config-sc-js/resetRecordForStylistic"],
    ] as const)("%i番目の config の name は「%s」", (index, name) => {
      expect(getConfigName(result[index])).toBe(name)
    })
  })
  describe("javascript with react, next, storybook", () => {
    const result = getConfigsBaseForJavascript(["next", "react", "storybook"])
    it("getConfigsBaseForJavascript の戻り値は配列長13", () => {
      expect(result).toHaveLength(14)
    })
    it.each([
      [0, "eslint-config-sc-js/initialRecord"],
      [1, "eslint-config-sc-js/stylisticRecord"],
      [2, "eslint-config-sc-js/eslintRecommendedRecord"],
      [3, "eslint-config-sc-js/unicornRecommendedRecords"],
      [4, "eslint-config-sc-next/nextRecord"],
      [5, "eslint-config-sc-react/initialRecord"],
      [6, "eslint-config-sc-react/airbnbRecords"],
      [7, "eslint-config-sc-react/reactRecords"],
      [8, "eslint-config-sc-react/scJsCustomRecord"],
      [9, "eslint-config-sc-js/customRecord"],
      [10, "eslint-config-sc-react/customRecord"],
      [11, "eslint-config-sc-storybook/storybookConfigRecords"],
      [12, "eslint-config-sc-storybook/overrideJavascriptRecord"],
      [13, "eslint-config-sc-js/resetRecordForStylistic"],
    ] as const)("%i番目の config の name は「%s」", (index, name) => {
      expect(getConfigName(result[index])).toBe(name)
    })
  })
  describe("javascript with react, next, storybook, jest", () => {
    const result = getConfigsBaseForJavascript(["next", "react", "storybook", "jest"])
    it("getConfigsBaseForJavascript の戻り値は配列長16", () => {
      expect(result).toHaveLength(17)
    })
    it.each([
      [0, "eslint-config-sc-js/initialRecord"],
      [1, "eslint-config-sc-js/stylisticRecord"],
      [2, "eslint-config-sc-js/eslintRecommendedRecord"],
      [3, "eslint-config-sc-js/unicornRecommendedRecords"],
      [4, "eslint-config-sc-next/nextRecord"],
      [5, "eslint-config-sc-react/initialRecord"],
      [6, "eslint-config-sc-react/airbnbRecords"],
      [7, "eslint-config-sc-react/reactRecords"],
      [8, "eslint-config-sc-react/scJsCustomRecord"],
      [9, "eslint-config-sc-js/customRecord"],
      [10, "eslint-config-sc-react/customRecord"],
      [11, "eslint-config-sc-storybook/storybookConfigRecords"],
      [12, "eslint-config-sc-storybook/overrideJavascriptRecord"],
      [13, "eslint-config-sc-jest/jestPluginRecords"],
      [14, "eslint-config-sc-jest/customRecord"],
      [15, "eslint-config-sc-jest/overrideJavascriptRecord"],
      [16, "eslint-config-sc-js/resetRecordForStylistic"],
    ] as const)("%i番目の config の name は「%s」", (index, name) => {
      expect(getConfigName(result[index])).toBe(name)
    })
  })
})
