import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Static HTML export — no server required
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: false,
  // Strict mode for catching subtle React bugs early
  reactStrictMode: true,
};

export default nextConfig;
