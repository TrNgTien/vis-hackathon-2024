const { i18n } = require("./i18n.config.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: [
      "localhost",
    ],
  },
};

module.exports = nextConfig;
