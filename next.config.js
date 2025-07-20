/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    appDir: true,
    serverActions: true,
    staticPageGenerationTimeout: 0, 
  },
};


module.exports = nextConfig;


module.exports = nextConfig;
