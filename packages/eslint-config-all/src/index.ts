import { getConfigs } from "./getConfigs"

import type { Plugin } from "./libs/shared-for-config/types/EslintPlugin"

const plugin = {
  meta: {
    name: "eslint-config-sc",
  },

  getConfigs,
} as const satisfies Plugin

export = plugin
