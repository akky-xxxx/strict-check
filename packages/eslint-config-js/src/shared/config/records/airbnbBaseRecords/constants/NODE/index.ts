// refer: https://github.com/airbnb/javascript/blob/11f986fdc7d6b4c80e396437e9c45c939362bdee/packages/eslint-config-airbnb-base/rules/node.js
import globals from "globals"

import type { EslintFlatConfig } from "../../../../../../libs/shared-for-config/types/EslintFlatConfig"

export const NODE = {
  languageOptions: {
    sourceType: "commonjs",
    globals: globals.node,
  },

  rules: {
    // enforce return after a callback
    'callback-return': 'off',

    // require all requires be top-level
    // https://eslint.org/docs/rules/global-require
    'global-require': 'error',

    // enforces error handling in callbacks (node environment)
    'handle-callback-err': 'off',

    // disallow use of the Buffer() constructor
    // https://eslint.org/docs/rules/no-buffer-constructor
    'no-buffer-constructor': 'error',

    // disallow mixing regular variable and require declarations
    'no-mixed-requires': ['off', false],

    // disallow use of new operator with the require function
    'no-new-require': 'error',

    // disallow string concatenation with __dirname and __filename
    // https://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 'error',

    // disallow use of process.env
    'no-process-env': 'off',

    // disallow process.exit()
    'no-process-exit': 'off',

    // restrict usage of specified node modules
    'no-restricted-modules': 'off',

    // disallow use of synchronous methods (off by default)
    'no-sync': 'off',
  }
} as const satisfies EslintFlatConfig
