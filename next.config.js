/** @type {import('next').NextConfig} */
const withImages = require('next-optimized-images');

module.exports = withImages({
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  optimizeImagesInDev: true,
});
