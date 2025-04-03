/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://nextjs.org/docs/api-reference/next/image#remote-patterns
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
