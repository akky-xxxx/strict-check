import { getConfigName } from "./modules/getConfigName"
import { getConfigsBase } from "../../../../../src/getConfigs/modules/getConfigsBase"

describe("getConfigsBase", () => {
  describe("javascript", () => {
    const result = getConfigsBase("javascript")
    it("getConfigsBase の戻り値は配列長8", () => {
      expect(result).toHaveLength(8)
    })
    it.each([
      [0, "eslint-config-sc-js/initialRecord"],
      [1, "eslint-config-sc-js/importRecommendedRecord"],
      [2, "eslint-config-sc-js/stylisticRecord"],
      [3, "eslint-config-sc-js/eslintRecommendedRecord"],
      [4, "eslint-config-sc-js/unicornRecommendedRecords"],
      [5, "eslint-config-sc-js/airbnbBaseRecords"],
      [6, "eslint-config-sc-js/customRecord"],
      [7, "eslint-config-sc-js/resetRecordForStylistic"],
    ] as const)("%i番目の config の name は「%s」", (index, name) => {
      expect(getConfigName(result[index])).toBe(name)
    })
  })
  describe("javascript with jest, storybook", () => {
    const result = getConfigsBase("javascript", ["jest", "storybook"])
    it("getConfigsBase の戻り値は配列長13", () => {
      expect(result).toHaveLength(13)
    })
    it.each([
      [0, "eslint-config-sc-js/initialRecord"],
      [1, "eslint-config-sc-js/importRecommendedRecord"],
      [2, "eslint-config-sc-js/stylisticRecord"],
      [3, "eslint-config-sc-js/eslintRecommendedRecord"],
      [4, "eslint-config-sc-js/unicornRecommendedRecords"],
      [5, "eslint-config-sc-js/airbnbBaseRecords"],
      [6, "eslint-config-sc-js/customRecord"],
      [7, "eslint-config-sc-storybook/storybookConfigRecords"],
      [8, "eslint-config-sc-storybook/overrideJavascriptRecord"],
      [9, "eslint-config-sc-jest/jestPluginRecords"],
      [10, "eslint-config-sc-jest/customRecord"],
      [11, "eslint-config-sc-jest/overrideJavascriptRecord"],
      [12, "eslint-config-sc-js/resetRecordForStylistic"],
    ] as const)("%i番目の config の name は「%s」", (index, name) => {
      expect(getConfigName(result[index])).toBe(name)
    })
  })
  describe("typescript", () => {
    const result = getConfigsBase("typescript")
    it("getConfigsBase の戻り値は配列長11", () => {
      expect(result).toHaveLength(11)
    })
    it.each([
      [0, "eslint-config-sc-ts/initialRecord"],
      [1, "eslint-config-sc-ts/importRecommendedRecord"],
      [2, "eslint-config-sc-ts/stylisticRecord"],
      [3, "eslint-config-sc-ts/eslintRecommendedRecord"],
      [4, "eslint-config-sc-ts/unicornRecommendedRecords"],
      [5, "eslint-config-sc-ts/typescriptEslintStrictTypeCheckedRecords"],
      [6, "eslint-config-sc-ts/typescriptEslintStylisticTypeCheckedRecords"],
      [7, "eslint-config-sc-ts/airbnbBaseRecords"],
      [8, "eslint-config-sc-ts/scJsCustomRecord"],
      [9, "eslint-config-sc-ts/customRecord"],
      [10, "eslint-config-sc-ts/resetRecordForStylistic"],
    ] as const)("%i番目の config の name は「%s」", (index, name) => {
      expect(getConfigName(result[index])).toBe(name)
    })
  })
  describe("typescript with jest, storybook", () => {
    const result = getConfigsBase("typescript", ["jest", "storybook"])
    it("getConfigsBase の戻り値は配列長16", () => {
      expect(result).toHaveLength(16)
    })
    it.each([
      [0, "eslint-config-sc-ts/initialRecord"],
      [1, "eslint-config-sc-ts/importRecommendedRecord"],
      [2, "eslint-config-sc-ts/stylisticRecord"],
      [3, "eslint-config-sc-ts/eslintRecommendedRecord"],
      [4, "eslint-config-sc-ts/unicornRecommendedRecords"],
      [5, "eslint-config-sc-ts/typescriptEslintStrictTypeCheckedRecords"],
      [6, "eslint-config-sc-ts/typescriptEslintStylisticTypeCheckedRecords"],
      [7, "eslint-config-sc-ts/airbnbBaseRecords"],
      [8, "eslint-config-sc-ts/scJsCustomRecord"],
      [9, "eslint-config-sc-ts/customRecord"],
      [10, "eslint-config-sc-storybook/storybookConfigRecords"],
      [11, "eslint-config-sc-storybook/overrideTypescriptRecord"],
      [12, "eslint-config-sc-jest/jestPluginRecords"],
      [13, "eslint-config-sc-jest/customRecord"],
      [14, "eslint-config-sc-jest/overrideTypescriptRecord"],
      [15, "eslint-config-sc-ts/resetRecordForStylistic"],
    ] as const)("%i番目の config の name は「%s」", (index, name) => {
      expect(getConfigName(result[index])).toBe(name)
    })
  })
})
