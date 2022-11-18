/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["kenil8520.pythonanywhere.com"],
  },
};

module.exports = nextConfig;
