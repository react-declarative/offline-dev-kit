const path = require('path')

const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.umd.js'),
  mode: 'production',
  target: 'web',
  output: {
    filename: 'react-declarative.min.js',
    path: path.resolve(__dirname, '../../dist'),
    library: {
      name: 'Declarative',
      type: 'umd'
    }
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    '@mui/material': 'MuiMaterial',
    '@mui/material-icons': 'MuiIcons',
    '@mui/material/locale': 'MuiMaterialLocale',
    '@mui/material/styles': 'MuiMaterialStyles',
    '@mui/material/utils': 'MuiMaterialUtils',
    '@emotion/react': 'EmotionReact',
    '@emotion/styled': 'EmotionStyled'
  },
  resolve: {
    alias: {
      'react/jsx-runtime': path.resolve(__dirname, './src/jsx-runtime'),
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/index.esm.js'),
          to: path.resolve(__dirname, '../../dist', 'react-declarative.esm.js')
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
