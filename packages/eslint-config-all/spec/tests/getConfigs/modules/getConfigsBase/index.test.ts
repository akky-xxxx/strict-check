import { getConfigName } from "./modules/getConfigName"
import { getConfigsBase } from "../../../../../src/getConfigs/modules/getConfigsBase"

describe("getConfigsBase", () => {
  describe("javascript", () => {
    const result = getConfigsBase("javascript")
    it("getConfigsBase の戻り値は配列長7", () => {
      expect(result).toHaveLength(7)
    })
    it.each([
      [0, "eslint-config-sc-js/initialRecord"],
      [1, "eslint-config-sc-js/stylisticRecord"],
      [2, "eslint-config-sc-js/eslintRecommendedRecord"],
      [3, "eslint-config-sc-js/unicornRecommendedRecords"],
      [4, "eslint-config-sc-js/airbnbBaseRecords"],
      [5, "eslint-config-sc-js/customRecord"],
      [6, "eslint-config-sc-js/resetRecordForStylistic"],
    ] as const)("%i番目の config の name は「%s」", (index, name) => {
      expect(getConfigName(result[index])).toBe(name)
    })
  })
  describe("javascript with jest, storybook", () => {
    const result = getConfigsBase("javascript", ["jest", "storybook"])
    it("getConfigsBase の戻り値は配列長12", () => {
      expect(result).toHaveLength(12)
    })
    it.each([
      [0, "eslint-config-sc-js/initialRecord"],
      [1, "eslint-config-sc-js/stylisticRecord"],
      [2, "eslint-config-sc-js/eslintRecommendedRecord"],
      [3, "eslint-config-sc-js/unicornRecommendedRecords"],
      [4, "eslint-config-sc-js/airbnbBaseRecords"],
      [5, "eslint-config-sc-js/customRecord"],
      [6, "eslint-config-sc-storybook/storybookConfigRecords"],
      [7, "eslint-config-sc-storybook/overrideJavascriptRecord"],
      [8, "eslint-config-sc-jest/jestPluginRecords"],
      [9, "eslint-config-sc-jest/customRecord"],
      [10, "eslint-config-sc-jest/overrideJavascriptRecord"],
      [11, "eslint-config-sc-js/resetRecordForStylistic"],
    ] as const)("%i番目の config の name は「%s」", (index, name) => {
      expect(getConfigName(result[index])).toBe(name)
    })
  })
  describe("typescript", () => {
    const result = getConfigsBase("typescript")
    it("getConfigsBase の戻り値は配列長10", () => {
      expect(result).toHaveLength(10)
    })
    it.each([
      [0, "eslint-config-sc-ts/initialRecord"],
      [1, "eslint-config-sc-ts/stylisticRecord"],
      [2, "eslint-config-sc-ts/eslintRecommendedRecord"],
      [3, "eslint-config-sc-ts/unicornRecommendedRecords"],
      [4, "eslint-config-sc-ts/typescriptEslintStrictTypeCheckedRecords"],
      [5, "eslint-config-sc-ts/typescriptEslintStylisticTypeCheckedRecords"],
      [6, "eslint-config-sc-ts/airbnbBaseRecords"],
      [7, "eslint-config-sc-ts/scJsCustomRecord"],
      [8, "eslint-config-sc-ts/customRecord"],
      [9, "eslint-config-sc-ts/resetRecordForStylistic"],
    ] as const)("%i番目の config の name は「%s」", (index, name) => {
      expect(getConfigName(result[index])).toBe(name)
    })
  })
  describe("typescript with jest, storybook", () => {
    const result = getConfigsBase("typescript", ["jest", "storybook"])
    it("getConfigsBase の戻り値は配列長15", () => {
      expect(result).toHaveLength(15)
    })
    it.each([
      [0, "eslint-config-sc-ts/initialRecord"],
      [1, "eslint-config-sc-ts/stylisticRecord"],
      [2, "eslint-config-sc-ts/eslintRecommendedRecord"],
      [3, "eslint-config-sc-ts/unicornRecommendedRecords"],
      [4, "eslint-config-sc-ts/typescriptEslintStrictTypeCheckedRecords"],
      [5, "eslint-config-sc-ts/typescriptEslintStylisticTypeCheckedRecords"],
      [6, "eslint-config-sc-ts/airbnbBaseRecords"],
      [7, "eslint-config-sc-ts/scJsCustomRecord"],
      [8, "eslint-config-sc-ts/customRecord"],
      [9, "eslint-config-sc-storybook/storybookConfigRecords"],
      [10, "eslint-config-sc-storybook/overrideTypescriptRecord"],
      [11, "eslint-config-sc-jest/jestPluginRecords"],
      [12, "eslint-config-sc-jest/customRecord"],
      [13, "eslint-config-sc-jest/overrideTypescriptRecord"],
      [14, "eslint-config-sc-ts/resetRecordForStylistic"],
    ] as const)("%i番目の config の name は「%s」", (index, name) => {
      expect(getConfigName(result[index])).toBe(name)
    })
  })
})
