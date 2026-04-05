import { getConfigsBaseForTypescript } from "../../../../../../../src/getConfigs/modules/getConfigsBase/modules/getConfigsBaseForTypescript"
import { getConfigName } from "../getConfigName"

describe("getConfigsBaseForTypescript", () => {
  describe("typescript with react", () => {
    const result = getConfigsBaseForTypescript(["react"])
    it("getConfigsBaseForTypescript の戻り値は配列長13", () => {
      expect(result).toHaveLength(13)
    })
    it.each([
      [0, "eslint-config-sc-ts/initialRecord"],
      [1, "eslint-config-sc-ts/importRecommendedRecord"],
      [3, "eslint-config-sc-ts/eslintRecommendedRecord"],
      [4, "eslint-config-sc-ts/unicornRecommendedRecords"],
      [5, "eslint-config-sc-ts/typescriptEslintStrictTypeCheckedRecords"],
      [7, "eslint-config-sc-react/initialRecord"],
      [8, "eslint-config-sc-react/airbnbRecords"],
      [9, "eslint-config-sc-react/reactRecords"],
      [10, "eslint-config-sc-react/scJsCustomRecord"],
      [11, "eslint-config-sc-ts/scJsCustomRecord"],
      [12, "eslint-config-sc-ts/customRecord"],
      [13, "eslint-config-sc-react/customRecord"],
      [14, "eslint-config-sc-react/customRecordWithTypescript"],
    ] as const)("%i番目の config の name は「%s」", (index, name) => {
      expect(getConfigName(result[index])).toBe(name)
    })
  })
  describe("typescript with react, next", () => {
    const result = getConfigsBaseForTypescript(["next", "react"])
    it("getConfigsBaseForTypescript の戻り値は配列長13", () => {
      expect(result).toHaveLength(13)
    })
    it.each([
      [0, "eslint-config-sc-ts/initialRecord"],
      [1, "eslint-config-sc-ts/importRecommendedRecord"],
      [3, "eslint-config-sc-ts/eslintRecommendedRecord"],
      [4, "eslint-config-sc-ts/unicornRecommendedRecords"],
      [5, "eslint-config-sc-ts/typescriptEslintStrictTypeCheckedRecords"],
      [7, "eslint-config-sc-next/nextRecord"],
      [8, "eslint-config-sc-react/initialRecord"],
      [9, "eslint-config-sc-react/airbnbRecords"],
      [10, "eslint-config-sc-react/reactRecords"],
      [11, "eslint-config-sc-react/scJsCustomRecord"],
      [12, "eslint-config-sc-ts/scJsCustomRecord"],
      [13, "eslint-config-sc-ts/customRecord"],
      [14, "eslint-config-sc-react/customRecord"],
      [15, "eslint-config-sc-react/customRecordWithTypescript"],
    ] as const)("%i番目の config の name は「%s」", (index, name) => {
      expect(getConfigName(result[index])).toBe(name)
    })
  })
  describe("typescript with react, next, storybook", () => {
    const result = getConfigsBaseForTypescript(["next", "react", "storybook"])
    it("getConfigsBaseForTypescript の戻り値は配列長16", () => {
      expect(result).toHaveLength(16)
    })
    it.each([
      [0, "eslint-config-sc-ts/initialRecord"],
      [1, "eslint-config-sc-ts/importRecommendedRecord"],
      [3, "eslint-config-sc-ts/eslintRecommendedRecord"],
      [4, "eslint-config-sc-ts/unicornRecommendedRecords"],
      [5, "eslint-config-sc-ts/typescriptEslintStrictTypeCheckedRecords"],
      [7, "eslint-config-sc-next/nextRecord"],
      [8, "eslint-config-sc-react/initialRecord"],
      [9, "eslint-config-sc-react/airbnbRecords"],
      [10, "eslint-config-sc-react/reactRecords"],
      [11, "eslint-config-sc-react/scJsCustomRecord"],
      [12, "eslint-config-sc-ts/scJsCustomRecord"],
      [13, "eslint-config-sc-ts/customRecord"],
      [14, "eslint-config-sc-react/customRecord"],
      [15, "eslint-config-sc-react/customRecordWithTypescript"],
      [16, "eslint-config-sc-storybook/storybookConfigRecords"],
      [17, "eslint-config-sc-storybook/overrideTypescriptRecord"],
    ] as const)("%i番目の config の name は「%s」", (index, name) => {
      expect(getConfigName(result[index])).toBe(name)
    })
  })
  describe("typescript with react, next, storybook, jest", () => {
    const result = getConfigsBaseForTypescript(["next", "react", "storybook", "jest"])
    it("getConfigsBaseForTypescript の戻り値は配列長19", () => {
      expect(result).toHaveLength(19)
    })
    it.each([
      [0, "eslint-config-sc-ts/initialRecord"],
      [1, "eslint-config-sc-ts/importRecommendedRecord"],
      [3, "eslint-config-sc-ts/eslintRecommendedRecord"],
      [4, "eslint-config-sc-ts/unicornRecommendedRecords"],
      [5, "eslint-config-sc-ts/typescriptEslintStrictTypeCheckedRecords"],
      [7, "eslint-config-sc-next/nextRecord"],
      [8, "eslint-config-sc-react/initialRecord"],
      [9, "eslint-config-sc-react/airbnbRecords"],
      [10, "eslint-config-sc-react/reactRecords"],
      [11, "eslint-config-sc-react/scJsCustomRecord"],
      [12, "eslint-config-sc-ts/scJsCustomRecord"],
      [13, "eslint-config-sc-ts/customRecord"],
      [14, "eslint-config-sc-react/customRecord"],
      [15, "eslint-config-sc-react/customRecordWithTypescript"],
      [16, "eslint-config-sc-storybook/storybookConfigRecords"],
      [17, "eslint-config-sc-storybook/overrideTypescriptRecord"],
      [18, "eslint-config-sc-jest/jestPluginRecords"],
      [19, "eslint-config-sc-jest/customRecord"],
      [20, "eslint-config-sc-jest/overrideTypescriptRecord"],
    ] as const)("%i番目の config の name は「%s」", (index, name) => {
      expect(getConfigName(result[index])).toBe(name)
    })
  })
})
