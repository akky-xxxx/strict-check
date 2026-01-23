/* eslint-disable global-require, @typescript-eslint/no-require-imports */
import type { EslintFlatConfig } from "../../../../../libs/shared-for-config/types/EslintFlatConfig"
import type { Library } from "../../../../../shared/types/Library"

type Libraries = Library[]
type GetConfigsBaseForTypescript = (libraries?: Libraries) =>
  EslintFlatConfig[] | EslintFlatConfig[][]

// eslint-disable-next-line complexity, max-statements
export const getConfigsBaseForTypescript: GetConfigsBaseForTypescript = (libraries) => {
  const configBase: EslintFlatConfig[] = []
  const tsConfig = require("eslint-config-sc-ts")
  const { configs } = tsConfig
  configBase.push(configs.initialRecord)
  if (configs.importRecommendedRecord) {
    configBase.push(configs.importRecommendedRecord)
  }
  configBase.push(
    configs.stylisticRecord,
    configs.eslintRecommendedRecord,
    configs.unicornRecommendedRecords,
    configs.typescriptEslintStrictTypeCheckedRecords,
    configs.typescriptEslintStylisticTypeCheckedRecords,
  )
  const tsCommonRecords = [
    configs.scJsCustomRecord,
    configs.customRecord,
  ]
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
      ...tsCommonRecords,
      reactConfig.configs.customRecord,
      reactConfig.configs.customRecordWithTypescript,
    )
  } else {
    configBase.push(
      configs.airbnbBaseRecords,
      ...tsCommonRecords,
    )
  }

  if (libraries?.includes("storybook")) {
    const storybookConfig = require("eslint-config-sc-storybook")
    configBase.push(
      storybookConfig.configs.storybookConfigRecords,
      storybookConfig.configs.overrideTypescriptRecord,
    )
  }

  if (libraries?.includes("jest")) {
    const jestConfig = require("eslint-config-sc-jest")
    configBase.push(
      jestConfig.configs.jestPluginRecords,
      jestConfig.configs.customRecord,
      jestConfig.configs.overrideTypescriptRecord,
    )
  }

  configBase.push(configs.resetRecordForStylistic)
  return configBase
}
