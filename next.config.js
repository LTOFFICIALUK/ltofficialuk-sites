/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    loader: 'default',
    path: '/_next/image',
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  trailingSlash: false,
  assetPrefix: '',
}

module.exports = nextConfig
