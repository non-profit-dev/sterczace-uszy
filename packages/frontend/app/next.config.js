/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "default",
    domains: ["localhost"],
  },
  experimental: {
    externalDir: true,
  },
}

module.exports = nextConfig
