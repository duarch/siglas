import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The Vercel custom domain serves the app from the root path.
  // Do not use the /siglas repository subpath here.
  output: "export",
  distDir: "out",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["192.168.1.9"],
};

export default nextConfig;
