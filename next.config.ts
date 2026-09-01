import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isProduction
    ? {
        basePath: "/siglas",
        assetPrefix: "/siglas/",
      }
    : {}),
  allowedDevOrigins: ["192.168.1.9"],
};

export default nextConfig;
