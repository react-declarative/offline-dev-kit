const path = require('path');

const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.umd.js'),
  mode: 'production',
  target: 'web',
  output: {
    filename: 'react.min.js',
    path: path.resolve(__dirname, '../../dist'),
    library: {
      name: 'React',
      type: 'umd',
    }
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/index.esm.js'),
          to: path.resolve(__dirname, '../../dist', 'react.esm.js')
        },
      ],
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false
      })
    ],
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
    hints: false,
  }
}
