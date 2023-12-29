/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["avatars.steamstatic.com", "cdn.akamai.steamstatic.com"],
  },
};

module.exports = nextConfig;
