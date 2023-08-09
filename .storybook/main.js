import { dirname, join } from "path";
module.exports = {
  stories: ["../packages/design-system/**/__stories__/*.stories.mdx"],
  addons: [getAbsolutePath("@storybook/addon-links"), getAbsolutePath("@storybook/addon-viewport"), getAbsolutePath("@storybook/addon-controls"), getAbsolutePath("@storybook/addon-docs"), getAbsolutePath("@storybook/addon-mdx-gfm")],
  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {}
  },
  webpackFinal: config => {
    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test(".svg"));
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      enforce: "pre",
      loader: require.resolve("@svgr/webpack", {
        options: {
          icon: true
        },
        replaceAttrValues: {
          "#000": "{props.color}"
        }
      })
    });
    return config;
  },
  docs: {
    autodocs: true
  }
};
/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}