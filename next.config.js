/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "occ-0-4241-185.1.nflxso.net",
        port: "",
        pathname: "/dnm/**",
      },
    ],
  },
};

module.exports = nextConfig;
