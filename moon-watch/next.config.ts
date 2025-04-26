import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true,
  },
};

export default nextConfig;
