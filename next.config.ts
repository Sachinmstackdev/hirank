import type { NextConfig } from "next";
import { withContentlayer } from 'next-contentlayer'

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ensure pages directory routes are still accessible
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'md', 'mdx'],
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'www.intelligencedock.com',
      },
    ],
  },
  webpack(config) {
    // Configure webpack to handle SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  // Suppress hydration warnings
  reactStrictMode: true,
  onDemandEntries: {
    // Keep the build page in memory for longer
    maxInactiveAge: 25 * 1000,
    // Auto-compile pages when detected a change
    pagesBufferLength: 5,
  }
};

export default withContentlayer(nextConfig);
