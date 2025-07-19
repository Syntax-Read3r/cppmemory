import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true
  },
  assetPrefix: isProd ? '/cppmemory/' : '',
  basePath: isProd ? '/cppmemory' : '',
  experimental: {
    optimizePackageImports: ["react", "react-dom"],
  },
};

export default nextConfig;