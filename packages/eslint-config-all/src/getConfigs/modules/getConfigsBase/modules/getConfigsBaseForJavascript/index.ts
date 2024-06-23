/* eslint-disable global-require, import/no-extraneous-dependencies, @typescript-eslint/no-var-requires */
import type { EslintFlatConfig } from "../../../../../libs/shared-for-config/types/EslintFlatConfig"
import type { Library } from "../../../../../shared/types/Library"

type Libraries = Library[]
type GetConfigsBaseForJavascript = (libraries?: Libraries) =>
  EslintFlatConfig[] | EslintFlatConfig[][]

// eslint-disable-next-line complexity, max-statements
export const getConfigsBaseForJavascript: GetConfigsBaseForJavascript = (libraries) => {
  const configBase: EslintFlatConfig[] = []
  const jsConfig = require("eslint-config-sc-js")
  configBase.push(
    jsConfig.configs.initialRecord,
    jsConfig.configs.stylisticRecord,
    jsConfig.configs.eslintRecommendedRecord,
    jsConfig.configs.unicornRecommendedRecords,
  )
  if (libraries?.includes("next") || libraries?.includes("react")) {
    if (libraries?.includes("next")) {
      const nextConfig = require("eslint-config-sc-next")
      configBase.push(nextConfig.configs.nextRecord)
    }

    const reactConfig = require("eslint-config-sc-react")
    configBase.push(
      reactConfig.configs.reactRecords,
      reactConfig.configs.airbnbRecords,
      reactConfig.configs.scJsCustomRecord,
      jsConfig.configs.customRecord,
      reactConfig.configs.customRecord,
    )
  } else {
    configBase.push(
      jsConfig.configs.airbnbBaseRecords,
      jsConfig.configs.customRecord,
    )
  }

  if (libraries?.includes("storybook")) {
    const storybookConfig = require("eslint-config-sc-storybook")
    configBase.push(
      storybookConfig.configs.storybookConfigRecords,
      storybookConfig.configs.eslintOverrideRecord,
    )
  }

  if (libraries?.includes("jest")) {
    const jestConfig = require("eslint-config-sc-jest")
    configBase.push(
      jestConfig.configs.jestPluginRecords,
      jestConfig.configs.customRecord,
      jestConfig.configs.overrideJavascriptRecord,
    )
  }

  configBase.push(jsConfig.configs.resetRecordForStylistic)
  return configBase
}
