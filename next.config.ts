import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // ✅ Add this
  allowedDevOrigins: ['http://192.168.56.1', 'http://localhost:3000'],
};

export default nextConfig;
