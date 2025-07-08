module.exports = {
  version: "0.2",

  ignorePaths: [
    "node_modules/**",
    // eslint-config-airbnb-base が flat config に対応するまでのタ代替策として直接転記してる
    "src/shared/config/records/airbnbBaseRecords/constants/**",
  ],
  language: "en",
}
