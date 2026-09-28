import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: this site has no dynamic routes or server-only logic,
  // so it can ship as plain static files to a CDN (Cloudflare, etc.)
  // instead of needing a Node server.
  output: "export",
  images: {
    // Cloudflare's CDN can't run Next's image optimization API — serve
    // the already-optimized (WebP/SVG) assets as-is.
    unoptimized: true,
  },
};

export default nextConfig;
