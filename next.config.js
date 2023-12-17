const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
  },
  transpilePackages: [
    'next-image-export-optimizer'
  ],
  output: 'export',
}

module.exports = withContentlayer(nextConfig)
