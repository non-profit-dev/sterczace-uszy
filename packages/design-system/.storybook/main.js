module.exports = {
  stories: ["../components/**/__stories__/*.stories.@(mdx|jsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    // Remove svg rules from existing webpack rule
    const assetRule = config.module.rules.find(({ test }) => test.test(".svg"))

    const assetLoader = {
      loader: assetRule.loader,
      options: assetRule.options || assetRule.query,
    }
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ["@svgr/webpack", assetLoader],
    })

    return config
  },
}
