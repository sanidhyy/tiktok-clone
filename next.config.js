/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ["i.imgur.com", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
