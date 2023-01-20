const path = require('path');

const config = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/Handout.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  devtool: 'source-map',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@others': path.resolve(__dirname, 'src/others'),
      '@defaults': path.resolve(__dirname, 'src/defaults'),
    },
    extensions: ['.ts', '.js'],
  },

  // yessss this works
  // externals: {
  //   fs: 'fs'
  // }
};

module.exports = config;
