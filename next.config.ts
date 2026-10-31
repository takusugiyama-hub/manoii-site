import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  allowedDevOrigins: [
    "127.0.0.1",
    "192.168.86.120",
  ],
};

export default nextConfig;