import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ['@svgr/webpack'],
  //   })

  //   return config
  // },
  images: {
    formats: ['image/webp'],
    domains: [
      'assets.aceternity.com',
      '67kbtiuxase3xqul.public.blob.vercel-storage.com',
      'aceternity.com',
      'images.unsplash.com',
    ],
  },
}

export default nextConfig
