/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'IDocksolution.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'www.intelligencedock.com',
      },
      {
        protocol: 'https',
        hostname: 'intelligencedock.com',
      }
    ],
  },
  webpack: (config, { isServer }) => {
    // Add any webpack config if needed
    return config
  },
}

module.exports = nextConfig 