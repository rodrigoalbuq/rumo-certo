import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactCompiler: true,
  outputFileTracingRoot: path.resolve(__dirname),
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 768, 1080, 1200],
    imageSizes: [320, 480, 640],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
