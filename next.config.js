/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '.');
    config.resolve.alias['@/components'] = path.resolve(__dirname, 'components');
    return config;
  },
};

module.exports = nextConfig;
