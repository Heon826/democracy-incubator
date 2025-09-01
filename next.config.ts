import type { NextConfig } from "next";

import path from "node:path";
const LOADER = path.resolve(dirname, 'src/visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '',
      },
      {
        protocol: 'http',
        hostname: '',
      },
    ],
  },
  outputFileTracingRoot: path.resolve(dirname, '../../'),
  turbopack: {
    rules: {
      ".{jsx,tsx}": {
        loaders: [LOADER]
      }
    }
  },
  turbopack: {
    rules: {
      ".{jsx,tsx}": {
        loaders: [LOADER]
      }
    }
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
