import { getConfigsBaseForTypescript } from "../../../../../../../src/getConfigs/modules/getConfigsBase/modules/getConfigsBaseForTypescript"
import { getConfigName } from "../getConfigName"

const getConfigNames = (result: unknown[]) => result.map((config) => getConfigName(config))

describe("getConfigsBaseForTypescript", () => {
  it("typescript with react", () => {
    const result = getConfigsBaseForTypescript(["react"])
    expect(getConfigNames(result)).toEqual([
      "eslint-config-sc-ts/initialRecord",
      "eslint-config-sc-ts/importRecommendedRecord",
      "eslint-config-sc-ts/eslintRecommendedRecord",
      "eslint-config-sc-ts/unicornRecommendedRecords",
      "eslint-config-sc-ts/typescriptEslintStrictTypeCheckedRecords",
      "eslint-config-sc-react/initialRecord",
      "eslint-config-sc-react/airbnbRecords",
      "eslint-config-sc-react/reactRecords",
      "eslint-config-sc-react/scJsCustomRecord",
      "eslint-config-sc-ts/scJsCustomRecord",
      "eslint-config-sc-ts/customRecord",
      "eslint-config-sc-react/customRecord",
      "eslint-config-sc-react/customRecordWithTypescript",
    ])
  })

  it("typescript with react, next", () => {
    const result = getConfigsBaseForTypescript(["next", "react"])
    expect(getConfigNames(result)).toEqual([
      "eslint-config-sc-ts/initialRecord",
      "eslint-config-sc-ts/importRecommendedRecord",
      "eslint-config-sc-ts/eslintRecommendedRecord",
      "eslint-config-sc-ts/unicornRecommendedRecords",
      "eslint-config-sc-ts/typescriptEslintStrictTypeCheckedRecords",
      "eslint-config-sc-next/nextRecord",
      "eslint-config-sc-react/initialRecord",
      "eslint-config-sc-react/airbnbRecords",
      "eslint-config-sc-react/reactRecords",
      "eslint-config-sc-react/scJsCustomRecord",
      "eslint-config-sc-ts/scJsCustomRecord",
      "eslint-config-sc-ts/customRecord",
      "eslint-config-sc-react/customRecord",
      "eslint-config-sc-react/customRecordWithTypescript",
    ])
  })

  it("typescript with react, next, storybook", () => {
    const result = getConfigsBaseForTypescript(["next", "react", "storybook"])
    expect(getConfigNames(result)).toEqual([
      "eslint-config-sc-ts/initialRecord",
      "eslint-config-sc-ts/importRecommendedRecord",
      "eslint-config-sc-ts/eslintRecommendedRecord",
      "eslint-config-sc-ts/unicornRecommendedRecords",
      "eslint-config-sc-ts/typescriptEslintStrictTypeCheckedRecords",
      "eslint-config-sc-next/nextRecord",
      "eslint-config-sc-react/initialRecord",
      "eslint-config-sc-react/airbnbRecords",
      "eslint-config-sc-react/reactRecords",
      "eslint-config-sc-react/scJsCustomRecord",
      "eslint-config-sc-ts/scJsCustomRecord",
      "eslint-config-sc-ts/customRecord",
      "eslint-config-sc-react/customRecord",
      "eslint-config-sc-react/customRecordWithTypescript",
      "eslint-config-sc-storybook/storybookConfigRecords",
      "eslint-config-sc-storybook/overrideTypescriptRecord",
    ])
  })

  it("typescript with react, next, storybook, jest", () => {
    const result = getConfigsBaseForTypescript(["next", "react", "storybook", "jest"])
    expect(getConfigNames(result)).toEqual([
      "eslint-config-sc-ts/initialRecord",
      "eslint-config-sc-ts/importRecommendedRecord",
      "eslint-config-sc-ts/eslintRecommendedRecord",
      "eslint-config-sc-ts/unicornRecommendedRecords",
      "eslint-config-sc-ts/typescriptEslintStrictTypeCheckedRecords",
      "eslint-config-sc-next/nextRecord",
      "eslint-config-sc-react/initialRecord",
      "eslint-config-sc-react/airbnbRecords",
      "eslint-config-sc-react/reactRecords",
      "eslint-config-sc-react/scJsCustomRecord",
      "eslint-config-sc-ts/scJsCustomRecord",
      "eslint-config-sc-ts/customRecord",
      "eslint-config-sc-react/customRecord",
      "eslint-config-sc-react/customRecordWithTypescript",
      "eslint-config-sc-storybook/storybookConfigRecords",
      "eslint-config-sc-storybook/overrideTypescriptRecord",
      "eslint-config-sc-jest/jestPluginRecords",
      "eslint-config-sc-jest/customRecord",
      "eslint-config-sc-jest/overrideTypescriptRecord",
    ])
  })
})
