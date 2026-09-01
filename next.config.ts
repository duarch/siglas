import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",
  allowedDevOrigins: ["192.168.1.9"],
};

export default nextConfig;
