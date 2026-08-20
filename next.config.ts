import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? "/future-expert-hub-57" : undefined,
  assetPrefix: isGithubPages ? "/future-expert-hub-57" : undefined,
  images: {
    qualities: [75, 85],
    unoptimized: true,
  },
};

export default nextConfig;
