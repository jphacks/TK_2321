/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  basePath: process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` : '',
  compiler: {
    styledComponents: true
  },
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
}