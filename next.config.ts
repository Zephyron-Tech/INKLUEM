import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Hi-fi mockup je statická stránka v public/mockup.
  async rewrites() {
    return [{ source: "/mockup", destination: "/mockup/index.html" }];
  },
};

export default nextConfig;
