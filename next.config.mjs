/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iili.io",
      },
      {
        protocol: "https",
        hostname: "imgbb.com",
      },
      {
        protocol: "https",
        hostname: "**", // Allows images from any other host
      },
    ],
  },
};

export default nextConfig;
