/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@frontend/ds']
  // experimental: {
  //   instrumentationHook: true
  // }
}

module.exports = nextConfig
