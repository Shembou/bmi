import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.sanity.io'
      }
    ]
  },
  transpilePackages: ['next-mdx-remote']
}

export default nextConfig
