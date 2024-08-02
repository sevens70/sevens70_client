/** @type {import('next').NextConfig} */

const nextConfig = {
  // restrictedMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};
export default nextConfig;

//file name convention should be js ,,just looking for any problem
