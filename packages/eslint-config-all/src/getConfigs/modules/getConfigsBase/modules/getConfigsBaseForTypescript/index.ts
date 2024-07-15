/* eslint-disable global-require, import/no-extraneous-dependencies, @typescript-eslint/no-var-requires */
import type { EslintFlatConfig } from "../../../../../libs/shared-for-config/types/EslintFlatConfig"
import type { Library } from "../../../../../shared/types/Library"

type Libraries = Library[]
type GetConfigsBaseForTypescript = (libraries?: Libraries) =>
  EslintFlatConfig[] | EslintFlatConfig[][]

// eslint-disable-next-line complexity, max-statements
export const getConfigsBaseForTypescript: GetConfigsBaseForTypescript = (libraries) => {
  const configBase: EslintFlatConfig[] = []
  const tsConfig = require("eslint-config-sc-ts")
  configBase.push(
    tsConfig.configs.initialRecord,
    tsConfig.configs.stylisticRecord,
    tsConfig.configs.eslintRecommendedRecord,
    tsConfig.configs.unicornRecommendedRecords,
    tsConfig.configs.typescriptEslintStrictTypeCheckedRecords,
    tsConfig.configs.typescriptEslintStylisticTypeCheckedRecords,
  )
  const tsCommonRecords = [
    tsConfig.configs.scJsCustomRecord,
    tsConfig.configs.customRecord,
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
      tsConfig.configs.airbnbBaseRecords,
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

  configBase.push(tsConfig.configs.resetRecordForStylistic)
  return configBase
}
