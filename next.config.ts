import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Allow the _sites internal route to be accessed via middleware rewrite */
  async rewrites() {
    return []
  },
  /* Trusted domains for future image optimization */
  images: {
    remotePatterns: [],
  },
}

export default nextConfig;
