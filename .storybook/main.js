const config = {
  framework: "@storybook/react-webpack5",
  stories: [
    "../packages/design-system/**/**/*.mdx",
    "../packages/design-system/**/**/*.stories.@(js|jsx)",
  ],
  addons: ["@storybook/addon-essentials"],
  docs: {
    autodocs: "tag",
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

export default config
