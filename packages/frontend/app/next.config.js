/**
 * @type {import('next').NextConfig}
 */

const withPlugins = require("next-compose-plugins")
const optimizedImages = require("next-optimized-images")

const nextConfig = {
  output: "export",
  transpilePackages: ["react-hotjar"],
  images: {
    loader: "default",
    domains: ["localhost", "https://images.ctfassets.net"],
  },
  trailingSlash: true,
  experimental: {
    externalDir: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
}

module.exports = withPlugins([[optimizedImages, {}], nextConfig])
