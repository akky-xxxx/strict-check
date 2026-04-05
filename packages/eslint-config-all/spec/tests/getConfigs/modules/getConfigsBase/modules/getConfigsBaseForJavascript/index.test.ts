import { getConfigsBaseForJavascript } from "../../../../../../../src/getConfigs/modules/getConfigsBase/modules/getConfigsBaseForJavascript"
import { getConfigName } from "../getConfigName"

const getConfigNames = (result: unknown[]) => result.map((config) => getConfigName(config))

describe("getConfigsBaseForJavascript", () => {
  it("javascript with react", () => {
    const result = getConfigsBaseForJavascript(["react"])
    expect(getConfigNames(result)).toEqual([
      "eslint-config-sc-js/initialRecord",
      "eslint-config-sc-js/importRecommendedRecord",
      "eslint-config-sc-js/eslintRecommendedRecord",
      "eslint-config-sc-js/unicornRecommendedRecords",
      "eslint-config-sc-react/initialRecord",
      "eslint-config-sc-react/airbnbRecords",
      "eslint-config-sc-react/reactRecords",
      "eslint-config-sc-react/scJsCustomRecord",
      "eslint-config-sc-js/customRecord",
      "eslint-config-sc-react/customRecord",
    ])
  })

  it("javascript with react, next", () => {
    const result = getConfigsBaseForJavascript(["next", "react"])
    expect(getConfigNames(result)).toEqual([
      "eslint-config-sc-js/initialRecord",
      "eslint-config-sc-js/importRecommendedRecord",
      "eslint-config-sc-js/eslintRecommendedRecord",
      "eslint-config-sc-js/unicornRecommendedRecords",
      "eslint-config-sc-next/nextRecord",
      "eslint-config-sc-react/initialRecord",
      "eslint-config-sc-react/airbnbRecords",
      "eslint-config-sc-react/reactRecords",
      "eslint-config-sc-react/scJsCustomRecord",
      "eslint-config-sc-js/customRecord",
      "eslint-config-sc-react/customRecord",
    ])
  })

  it("javascript with react, next, storybook", () => {
    const result = getConfigsBaseForJavascript(["next", "react", "storybook"])
    expect(getConfigNames(result)).toEqual([
      "eslint-config-sc-js/initialRecord",
      "eslint-config-sc-js/importRecommendedRecord",
      "eslint-config-sc-js/eslintRecommendedRecord",
      "eslint-config-sc-js/unicornRecommendedRecords",
      "eslint-config-sc-next/nextRecord",
      "eslint-config-sc-react/initialRecord",
      "eslint-config-sc-react/airbnbRecords",
      "eslint-config-sc-react/reactRecords",
      "eslint-config-sc-react/scJsCustomRecord",
      "eslint-config-sc-js/customRecord",
      "eslint-config-sc-react/customRecord",
      "eslint-config-sc-storybook/storybookConfigRecords",
      "eslint-config-sc-storybook/overrideJavascriptRecord",
    ])
  })

  it("javascript with react, next, storybook, jest", () => {
    const result = getConfigsBaseForJavascript(["next", "react", "storybook", "jest"])
    expect(getConfigNames(result)).toEqual([
      "eslint-config-sc-js/initialRecord",
      "eslint-config-sc-js/importRecommendedRecord",
      "eslint-config-sc-js/eslintRecommendedRecord",
      "eslint-config-sc-js/unicornRecommendedRecords",
      "eslint-config-sc-next/nextRecord",
      "eslint-config-sc-react/initialRecord",
      "eslint-config-sc-react/airbnbRecords",
      "eslint-config-sc-react/reactRecords",
      "eslint-config-sc-react/scJsCustomRecord",
      "eslint-config-sc-js/customRecord",
      "eslint-config-sc-react/customRecord",
      "eslint-config-sc-storybook/storybookConfigRecords",
      "eslint-config-sc-storybook/overrideJavascriptRecord",
      "eslint-config-sc-jest/jestPluginRecords",
      "eslint-config-sc-jest/customRecord",
      "eslint-config-sc-jest/overrideJavascriptRecord",
    ])
  })
})
