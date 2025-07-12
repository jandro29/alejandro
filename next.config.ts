import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ⚠️ Ignora errores ESLint solo durante build
  },
};

export default nextConfig;
