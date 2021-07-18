const { resolve } = require('path');
const { cwd } = require('process');

module.exports = {
  entry: './src/index.ts',
  devtool: 'source-map',
  module: {
    rules: [
      {
        use: 'ts-loader',
        exclude: /node_modules/,
        test: /.ts/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '#': resolve(cwd(), 'src'),
    },
  },
  output: {
    path: resolve(cwd(), 'dist'),
    filename: 'index.js',
  },
  target: 'node',
};
