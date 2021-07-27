'use strict';

const { resolve } = require('path');
module.exports = {
  mode: 'development',
  entry: './client/main.js',
  output: {
    filename: './bundle.js',
    path: resolve(__dirname, './build'),
  },
  module: {},
  plugins: [],
};
