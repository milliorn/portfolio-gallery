/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://stackoverflow.com/a/69142993/11986604
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  // https://nextjs.org/docs/api-reference/next/image#remote-patterns
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
        pathname: "/random/**",
      },
    ],
  },
};

module.exports = nextConfig;
