/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    unoptimized: true, // Giúp tránh lỗi mất ảnh khi build tĩnh
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/_next/" : "",
};

export default nextConfig;
