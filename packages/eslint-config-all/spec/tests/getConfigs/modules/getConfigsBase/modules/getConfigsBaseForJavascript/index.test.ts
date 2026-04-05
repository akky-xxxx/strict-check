import { getConfigsBaseForJavascript } from "../../../../../../../src/getConfigs/modules/getConfigsBase/modules/getConfigsBaseForJavascript"
import { getConfigName } from "../getConfigName"

describe("getConfigsBaseForJavascript", () => {
  describe("javascript with react", () => {
    const result = getConfigsBaseForJavascript(["react"])
    it("getConfigsBaseForJavascript の戻り値は配列長11", () => {
      expect(result).toHaveLength(11)
    })
    it.each([
      [0, "eslint-config-sc-js/initialRecord"],
      [1, "eslint-config-sc-js/importRecommendedRecord"],
      [3, "eslint-config-sc-js/eslintRecommendedRecord"],
      [4, "eslint-config-sc-js/unicornRecommendedRecords"],
      [5, "eslint-config-sc-react/initialRecord"],
      [6, "eslint-config-sc-react/airbnbRecords"],
      [7, "eslint-config-sc-react/reactRecords"],
      [8, "eslint-config-sc-react/scJsCustomRecord"],
      [9, "eslint-config-sc-js/customRecord"],
      [10, "eslint-config-sc-react/customRecord"],
      [11, "eslint-config-sc-js/resetRecordForStyle"],
    ] as const)("%i番目の config の name は「%s」", (index, name) => {
      expect(getConfigName(result[index])).toBe(name)
    })
  })
  describe("javascript with react, next", () => {
    const result = getConfigsBaseForJavascript(["next", "react"])
    it("getConfigsBaseForJavascript の戻り値は配列長12", () => {
      expect(result).toHaveLength(12)
    })
    it.each([
      [0, "eslint-config-sc-js/initialRecord"],
      [1, "eslint-config-sc-js/importRecommendedRecord"],
      [3, "eslint-config-sc-js/eslintRecommendedRecord"],
      [4, "eslint-config-sc-js/unicornRecommendedRecords"],
      [5, "eslint-config-sc-next/nextRecord"],
      [6, "eslint-config-sc-react/initialRecord"],
      [7, "eslint-config-sc-react/airbnbRecords"],
      [8, "eslint-config-sc-react/reactRecords"],
      [9, "eslint-config-sc-react/scJsCustomRecord"],
      [10, "eslint-config-sc-js/customRecord"],
      [11, "eslint-config-sc-react/customRecord"],
      [12, "eslint-config-sc-js/resetRecordForStyle"],
    ] as const)("%i番目の config の name は「%s」", (index, name) => {
      expect(getConfigName(result[index])).toBe(name)
    })
  })
  describe("javascript with react, next, storybook", () => {
    const result = getConfigsBaseForJavascript(["next", "react", "storybook"])
    it("getConfigsBaseForJavascript の戻り値は配列長14", () => {
      expect(result).toHaveLength(14)
    })
    it.each([
      [0, "eslint-config-sc-js/initialRecord"],
      [1, "eslint-config-sc-js/importRecommendedRecord"],
      [3, "eslint-config-sc-js/eslintRecommendedRecord"],
      [4, "eslint-config-sc-js/unicornRecommendedRecords"],
      [5, "eslint-config-sc-next/nextRecord"],
      [6, "eslint-config-sc-react/initialRecord"],
      [7, "eslint-config-sc-react/airbnbRecords"],
      [8, "eslint-config-sc-react/reactRecords"],
      [9, "eslint-config-sc-react/scJsCustomRecord"],
      [10, "eslint-config-sc-js/customRecord"],
      [11, "eslint-config-sc-react/customRecord"],
      [12, "eslint-config-sc-storybook/storybookConfigRecords"],
      [13, "eslint-config-sc-storybook/overrideJavascriptRecord"],
      [14, "eslint-config-sc-js/resetRecordForStyle"],
    ] as const)("%i番目の config の name は「%s」", (index, name) => {
      expect(getConfigName(result[index])).toBe(name)
    })
  })
  describe("javascript with react, next, storybook, jest", () => {
    const result = getConfigsBaseForJavascript(["next", "react", "storybook", "jest"])
    it("getConfigsBaseForJavascript の戻り値は配列長15", () => {
      expect(result).toHaveLength(15)
    })
    it.each([
      [0, "eslint-config-sc-js/initialRecord"],
      [1, "eslint-config-sc-js/importRecommendedRecord"],
      [3, "eslint-config-sc-js/eslintRecommendedRecord"],
      [4, "eslint-config-sc-js/unicornRecommendedRecords"],
      [5, "eslint-config-sc-next/nextRecord"],
      [6, "eslint-config-sc-react/initialRecord"],
      [7, "eslint-config-sc-react/airbnbRecords"],
      [8, "eslint-config-sc-react/reactRecords"],
      [9, "eslint-config-sc-react/scJsCustomRecord"],
      [10, "eslint-config-sc-js/customRecord"],
      [11, "eslint-config-sc-react/customRecord"],
      [12, "eslint-config-sc-storybook/storybookConfigRecords"],
      [13, "eslint-config-sc-storybook/overrideJavascriptRecord"],
      [14, "eslint-config-sc-jest/jestPluginRecords"],
      [15, "eslint-config-sc-jest/customRecord"],
      [16, "eslint-config-sc-jest/overrideJavascriptRecord"],
      [17, "eslint-config-sc-js/resetRecordForStyle"],
    ] as const)("%i番目の config の name は「%s」", (index, name) => {
      expect(getConfigName(result[index])).toBe(name)
    })
  })
})
