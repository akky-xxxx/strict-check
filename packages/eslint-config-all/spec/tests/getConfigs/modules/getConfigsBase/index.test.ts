import { getConfigName } from "./modules/getConfigName"
import { getConfigsBase } from "../../../../../src/getConfigs/modules/getConfigsBase"

const getConfigNames = (result: unknown[]) => result.map((config) => getConfigName(config))

describe("getConfigsBase", () => {
  it("javascript", () => {
    const result = getConfigsBase("javascript")
    expect(getConfigNames(result)).toEqual([
      "eslint-config-sc-js/initialRecord",
      "eslint-config-sc-js/importRecommendedRecord",
      "eslint-config-sc-js/eslintRecommendedRecord",
      "eslint-config-sc-js/unicornRecommendedRecords",
      "eslint-config-sc-js/airbnbBaseRecords",
      "eslint-config-sc-js/customRecord",
    ])
  })

  it("javascript with jest, storybook", () => {
    const result = getConfigsBase("javascript", ["jest", "storybook"])
    expect(getConfigNames(result)).toEqual([
      "eslint-config-sc-js/initialRecord",
      "eslint-config-sc-js/importRecommendedRecord",
      "eslint-config-sc-js/eslintRecommendedRecord",
      "eslint-config-sc-js/unicornRecommendedRecords",
      "eslint-config-sc-js/airbnbBaseRecords",
      "eslint-config-sc-js/customRecord",
      "eslint-config-sc-storybook/storybookConfigRecords",
      "eslint-config-sc-storybook/overrideJavascriptRecord",
      "eslint-config-sc-jest/jestPluginRecords",
      "eslint-config-sc-jest/customRecord",
      "eslint-config-sc-jest/overrideJavascriptRecord",
    ])
  })

  it("typescript", () => {
    const result = getConfigsBase("typescript")
    expect(getConfigNames(result)).toEqual([
      "eslint-config-sc-ts/initialRecord",
      "eslint-config-sc-ts/importRecommendedRecord",
      "eslint-config-sc-ts/eslintRecommendedRecord",
      "eslint-config-sc-ts/unicornRecommendedRecords",
      "eslint-config-sc-ts/typescriptEslintStrictTypeCheckedRecords",
      "eslint-config-sc-ts/airbnbBaseRecords",
      "eslint-config-sc-ts/scJsCustomRecord",
      "eslint-config-sc-ts/customRecord",
    ])
  })

  it("typescript with jest, storybook", () => {
    const result = getConfigsBase("typescript", ["jest", "storybook"])
    expect(getConfigNames(result)).toEqual([
      "eslint-config-sc-ts/initialRecord",
      "eslint-config-sc-ts/importRecommendedRecord",
      "eslint-config-sc-ts/eslintRecommendedRecord",
      "eslint-config-sc-ts/unicornRecommendedRecords",
      "eslint-config-sc-ts/typescriptEslintStrictTypeCheckedRecords",
      "eslint-config-sc-ts/airbnbBaseRecords",
      "eslint-config-sc-ts/scJsCustomRecord",
      "eslint-config-sc-ts/customRecord",
      "eslint-config-sc-storybook/storybookConfigRecords",
      "eslint-config-sc-storybook/overrideTypescriptRecord",
      "eslint-config-sc-jest/jestPluginRecords",
      "eslint-config-sc-jest/customRecord",
      "eslint-config-sc-jest/overrideTypescriptRecord",
    ])
  })
})
