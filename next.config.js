/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/profile',
        destination: '/profile/orders',
        permanent: true,
      },
    ]
  },
}
module.exports = nextConfig
