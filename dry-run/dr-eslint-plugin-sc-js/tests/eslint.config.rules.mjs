import eslintPluginSCJs from "eslint-plugin-sc-js"

export default [
  {
    plugins: {
      "sc-js": eslintPluginSCJs, // It is not necessary when use the recommended config
    },
    rules: {
      "sc-js/file-path-patterns": [
        2,
        {
          allowPatterns: [/\/index\.js$/],
        },
      ],
      "sc-js/forbidden-multiple-named-exports": 2,
      "sc-js/individual-import": [
        2,
        {
          targets: ["fs"],
        },
      ],
      "sc-js/match-names-of-file-and-export": [
        2,
        {
          captures: [/(.+)\/js-test.js$/],
        },
      ],
      "sc-js/restrict-use-of-process-env": 2,
    },
  },
  {
    files: ["**/*.js"],
  },
]
