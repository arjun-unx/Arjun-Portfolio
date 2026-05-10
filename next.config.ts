import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Image-optimization is opt-in; keeping it off here keeps deploys
    // identical between Vercel Edge and any static-export pipeline.
    unoptimized: true,
  },
  trailingSlash: false,
  reactStrictMode: true,
  // Pin Turbopack root so the bundler doesn't pick up a parent lockfile.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
