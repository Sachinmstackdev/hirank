import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
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
  reactStrictMode: false,
  onDemandEntries: {
    // Keep the build page in memory for longer
    maxInactiveAge: 25 * 1000,
    // Auto-compile pages when detected a change
    pagesBufferLength: 5,
  }
};

export default nextConfig;
