import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/ladinpagePet",
  assetPrefix: "/ladinpagePet/"
};

export default nextConfig;
