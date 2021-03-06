const path = require('path')

const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.umd.js'),
  mode: 'production',
  target: 'web',
  output: {
    filename: 'mui-styles.min.js',
    path: path.resolve(__dirname, '../../dist'),
    library: {
      name: 'MuiStyles',
      type: 'umd'
    }
  },
  externals: {
    'react': 'React',
    '@emotion/react': 'EmotionReact',
    '@emotion/styled': 'EmotionStyled',
    '@mui/system': 'MuiSystem',
  },
  resolve: {
    alias: {
      'react/jsx-runtime': path.resolve(__dirname, './src/jsx-runtime'),
      '@mui/private-theming/useTheme': path.resolve(__dirname, './src/alias/useTheme'),
      '@mui/private-theming/ThemeProvider': path.resolve(__dirname, './src/alias/ThemeProvider'),
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/index.esm.js'),
          to: path.resolve(__dirname, '../../dist', 'mui-styles.esm.js')
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
