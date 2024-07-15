import { getConfigsBaseForTypescript } from "../../../../../../../src/getConfigs/modules/getConfigsBase/modules/getConfigsBaseForTypescript"
import { getConfigName } from "../getConfigName"

describe("getConfigsBaseForTypescript", () => {
  describe("typescript with react", () => {
    const result = getConfigsBaseForTypescript(["react"])
    it("getConfigsBaseForTypescript の戻り値は配列長14", () => {
      expect(result).toHaveLength(14)
    })
    it.each([
      [0, "eslint-config-sc-ts/initialRecord"],
      [1, "eslint-config-sc-ts/stylisticRecord"],
      [2, "eslint-config-sc-ts/eslintRecommendedRecord"],
      [3, "eslint-config-sc-ts/unicornRecommendedRecords"],
      [4, "eslint-config-sc-ts/typescriptEslintStrictTypeCheckedRecords"],
      [5, "eslint-config-sc-ts/typescriptEslintStylisticTypeCheckedRecords"],
      [6, "eslint-config-sc-react/airbnbRecords"],
      [7, "eslint-config-sc-react/reactRecords"],
      [8, "eslint-config-sc-react/scJsCustomRecord"],
      [9, "eslint-config-sc-ts/scJsCustomRecord"],
      [10, "eslint-config-sc-ts/customRecord"],
      [11, "eslint-config-sc-react/customRecord"],
      [12, "eslint-config-sc-react/customRecordWithTypescript"],
      [13, "eslint-config-sc-ts/resetRecordForStylistic"],
    ] as const)("%i番目の config の name は「%s」", (index, name) => {
      expect(getConfigName(result[index])).toBe(name)
    })
  })
  describe("typescript with react, next", () => {
    const result = getConfigsBaseForTypescript(["next", "react"])
    it("getConfigsBaseForTypescript の戻り値は配列長15", () => {
      expect(result).toHaveLength(15)
    })
    it.each([
      [0, "eslint-config-sc-ts/initialRecord"],
      [1, "eslint-config-sc-ts/stylisticRecord"],
      [2, "eslint-config-sc-ts/eslintRecommendedRecord"],
      [3, "eslint-config-sc-ts/unicornRecommendedRecords"],
      [4, "eslint-config-sc-ts/typescriptEslintStrictTypeCheckedRecords"],
      [5, "eslint-config-sc-ts/typescriptEslintStylisticTypeCheckedRecords"],
      [6, "eslint-config-sc-next/nextRecord"],
      [7, "eslint-config-sc-react/airbnbRecords"],
      [8, "eslint-config-sc-react/reactRecords"],
      [9, "eslint-config-sc-react/scJsCustomRecord"],
      [10, "eslint-config-sc-ts/scJsCustomRecord"],
      [11, "eslint-config-sc-ts/customRecord"],
      [12, "eslint-config-sc-react/customRecord"],
      [13, "eslint-config-sc-react/customRecordWithTypescript"],
      [14, "eslint-config-sc-ts/resetRecordForStylistic"],
    ] as const)("%i番目の config の name は「%s」", (index, name) => {
      expect(getConfigName(result[index])).toBe(name)
    })
  })
  describe("typescript with react, next, storybook", () => {
    const result = getConfigsBaseForTypescript(["next", "react", "storybook"])
    it("getConfigsBaseForTypescript の戻り値は配列長17", () => {
      expect(result).toHaveLength(17)
    })
    it.each([
      [0, "eslint-config-sc-ts/initialRecord"],
      [1, "eslint-config-sc-ts/stylisticRecord"],
      [2, "eslint-config-sc-ts/eslintRecommendedRecord"],
      [3, "eslint-config-sc-ts/unicornRecommendedRecords"],
      [4, "eslint-config-sc-ts/typescriptEslintStrictTypeCheckedRecords"],
      [5, "eslint-config-sc-ts/typescriptEslintStylisticTypeCheckedRecords"],
      [6, "eslint-config-sc-next/nextRecord"],
      [7, "eslint-config-sc-react/airbnbRecords"],
      [8, "eslint-config-sc-react/reactRecords"],
      [9, "eslint-config-sc-react/scJsCustomRecord"],
      [10, "eslint-config-sc-ts/scJsCustomRecord"],
      [11, "eslint-config-sc-ts/customRecord"],
      [12, "eslint-config-sc-react/customRecord"],
      [13, "eslint-config-sc-react/customRecordWithTypescript"],
      [14, "eslint-config-sc-storybook/storybookConfigRecords"],
      [15, "eslint-config-sc-storybook/overrideTypescriptRecord"],
      [16, "eslint-config-sc-ts/resetRecordForStylistic"],
    ] as const)("%i番目の config の name は「%s」", (index, name) => {
      expect(getConfigName(result[index])).toBe(name)
    })
  })
  describe("typescript with react, next, storybook, jest", () => {
    const result = getConfigsBaseForTypescript(["next", "react", "storybook", "jest"])
    it("getConfigsBaseForTypescript の戻り値は配列長20", () => {
      expect(result).toHaveLength(20)
    })
    it.each([
      [0, "eslint-config-sc-ts/initialRecord"],
      [1, "eslint-config-sc-ts/stylisticRecord"],
      [2, "eslint-config-sc-ts/eslintRecommendedRecord"],
      [3, "eslint-config-sc-ts/unicornRecommendedRecords"],
      [4, "eslint-config-sc-ts/typescriptEslintStrictTypeCheckedRecords"],
      [5, "eslint-config-sc-ts/typescriptEslintStylisticTypeCheckedRecords"],
      [6, "eslint-config-sc-next/nextRecord"],
      [7, "eslint-config-sc-react/airbnbRecords"],
      [8, "eslint-config-sc-react/reactRecords"],
      [9, "eslint-config-sc-react/scJsCustomRecord"],
      [10, "eslint-config-sc-ts/scJsCustomRecord"],
      [11, "eslint-config-sc-ts/customRecord"],
      [12, "eslint-config-sc-react/customRecord"],
      [13, "eslint-config-sc-react/customRecordWithTypescript"],
      [14, "eslint-config-sc-storybook/storybookConfigRecords"],
      [15, "eslint-config-sc-storybook/overrideTypescriptRecord"],
      [16, "eslint-config-sc-jest/jestPluginRecords"],
      [17, "eslint-config-sc-jest/customRecord"],
      [18, "eslint-config-sc-jest/overrideTypescriptRecord"],
      [19, "eslint-config-sc-ts/resetRecordForStylistic"],
    ] as const)("%i番目の config の name は「%s」", (index, name) => {
      expect(getConfigName(result[index])).toBe(name)
    })
  })
})
