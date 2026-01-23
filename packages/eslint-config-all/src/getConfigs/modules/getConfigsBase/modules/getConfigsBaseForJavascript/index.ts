/* eslint-disable global-require, @typescript-eslint/no-require-imports */
import type { EslintFlatConfig } from "../../../../../libs/shared-for-config/types/EslintFlatConfig"
import type { Library } from "../../../../../shared/types/Library"

type Libraries = Library[]
type GetConfigsBaseForJavascript = (libraries?: Libraries) =>
  EslintFlatConfig[] | EslintFlatConfig[][]

// eslint-disable-next-line complexity, max-statements
export const getConfigsBaseForJavascript: GetConfigsBaseForJavascript = (libraries) => {
  const configBase: EslintFlatConfig[] = []
  const jsConfig = require("eslint-config-sc-js")
  const { configs } = jsConfig
  configBase.push(configs.initialRecord)
  if (configs.importRecommendedRecord) {
    configBase.push(configs.importRecommendedRecord)
  }
  configBase.push(
    configs.stylisticRecord,
    configs.eslintRecommendedRecord,
    configs.unicornRecommendedRecords,
  )
  if (libraries?.includes("next") || libraries?.includes("react")) {
    if (libraries?.includes("next")) {
      const nextConfig = require("eslint-config-sc-next")
      configBase.push(nextConfig.configs.nextRecord)
    }

    const reactConfig = require("eslint-config-sc-react")
    configBase.push(
      reactConfig.configs.initialRecord,
      reactConfig.configs.airbnbRecords,
      reactConfig.configs.reactRecords,
      reactConfig.configs.scJsCustomRecord,
      configs.customRecord,
      reactConfig.configs.customRecord,
    )
  } else {
    configBase.push(
      configs.airbnbBaseRecords,
      configs.customRecord,
    )
  }

  if (libraries?.includes("storybook")) {
    const storybookConfig = require("eslint-config-sc-storybook")
    configBase.push(
      storybookConfig.configs.storybookConfigRecords,
      storybookConfig.configs.overrideJavascriptRecord,
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

  configBase.push(configs.resetRecordForStylistic)
  return configBase
}
