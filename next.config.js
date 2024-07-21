/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true,
  },
  transpilePackages: [
    'next-image-export-optimizer'
  ],
  output: 'export',
}

module.exports = nextConfig
