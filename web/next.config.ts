import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io']
  },
  transpilePackages: ['next-mdx-remote']
}

export default nextConfig
