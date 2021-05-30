require('dotenv').config();
const withPWA = require('next-pwa');

const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
  webpack: (config) => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];

    return config;
  },
});
