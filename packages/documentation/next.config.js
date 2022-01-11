require("dotenv").config({
  path: `../design-tokens/.env`,
});

/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    NEXT_PUBLIC_USE_FIGMA_API: process.env.USE_FIGMA_API,
  },
  reactStrictMode: true,
};
