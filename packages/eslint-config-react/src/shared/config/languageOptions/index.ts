// eslint-disable-next-line import/no-unresolved
import globals from "globals"

export const languageOptions = {
  languageOptions: {
    globals: {
      ...globals.browser,
    },
  },
} as const
