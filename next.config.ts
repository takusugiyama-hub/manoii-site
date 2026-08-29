import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",

  basePath: isGithubActions ? "/manoii-site" : "",
  assetPrefix: isGithubActions ? "/manoii-site/" : "",

  images: {
    unoptimized: true,
  },

  allowedDevOrigins: [
    "192.168.86.120",
  ],
};

export default nextConfig;