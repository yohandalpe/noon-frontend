/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.picsum.photos"],
  },
  env: {
    apiEndpoint: "https://noon-backend.herokuapp.com",
  },
};

module.exports = nextConfig;
