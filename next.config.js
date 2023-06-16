/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  images: {
    domains: ["github.com"],
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
