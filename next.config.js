/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.picsum.photos"],
  },
  env: {
    apiEndpoint: "http://localhost:3001",
  },
};

module.exports = nextConfig;
