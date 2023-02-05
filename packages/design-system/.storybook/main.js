module.exports = {
  stories: ["../**/**/__stories__/*.stories.mdx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-viewport",
    "@storybook/addon-controls",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: (config) => {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test(".svg")
    )
    fileLoaderRule.exclude = /\.svg$/

    config.module.rules.push({
      test: /\.svg$/,
      enforce: "pre",
      loader: require.resolve("@svgr/webpack", {
        options: { icon: true },
        replaceAttrValues: { "#000": "{props.color}" },
      }),
    })

    return config
  },
}
