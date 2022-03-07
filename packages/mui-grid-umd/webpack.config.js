const path = require('path')

const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.umd.js'),
  mode: 'production',
  target: 'web',
  output: {
    filename: 'mui-grid.min.js',
    path: path.resolve(__dirname, '../../dist'),
    library: {
      name: 'MuiGrid',
      type: 'umd'
    }
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    '@mui/material': 'MuiMaterial',
    '@mui/material/locale': 'MuiMaterialLocale',
    '@mui/material/styles': 'MuiMaterialStyles',
    '@mui/material/utils': 'MuiMaterialUtils',
  },
  resolve: {
    alias: {
      'react/jsx-runtime': path.resolve(__dirname, './src/jsx-runtime'),
      '@mui/material/Tooltip': path.resolve(__dirname, './src/alias/Tooltip'),
      '@mui/material/Popper': path.resolve(__dirname, './src/alias/Popper'),
      '@mui/material/Button': path.resolve(__dirname, './src/alias/Button'),
      '@mui/material/Switch': path.resolve(__dirname, './src/alias/Switch'),
      '@mui/material/Select': path.resolve(__dirname, './src/alias/Select'),
      '@mui/material/FormControl': path.resolve(__dirname, './src/alias/FormControl'),
      '@mui/material/TextField': path.resolve(__dirname, './src/alias/TextField'),
      '@mui/material/Checkbox': path.resolve(__dirname, './src/alias/Checkbox'),
      '@mui/material/Badge': path.resolve(__dirname, './src/alias/Badge'),
      '@mui/material/Chip': path.resolve(__dirname, './src/alias/Chip'),
      '@mui/material/MenuList': path.resolve(__dirname, './src/alias/MenuList'),
      '@mui/material/MenuItem': path.resolve(__dirname, './src/alias/MenuItem'),
      '@mui/material/ListItemIcon': path.resolve(__dirname, './src/alias/ListItemIcon'),
      '@mui/material/Autocomplete': path.resolve(__dirname, './src/alias/Autocomplete'),
      '@mui/material/Paper': path.resolve(__dirname, './src/alias/Paper'),
      '@mui/material/IconButton': path.resolve(__dirname, './src/alias/IconButton'),
      '@mui/material/ClickAwayListener': path.resolve(__dirname, './src/alias/ClickAwayListener'),
      '@mui/material/CircularProgress': path.resolve(__dirname, './src/alias/CircularProgress'),
      '@mui/material/InputLabel': path.resolve(__dirname, './src/alias/InputLabel'),
      '@mui/material/Unstable_TrapFocus': path.resolve(__dirname, './src/alias/Unstable_TrapFocus'),
      '@mui/material/FormControlLabel': path.resolve(__dirname, './src/alias/FormControlLabel'),
      '@mui/material/Grow': path.resolve(__dirname, './src/alias/Grow'),
      '@mui/material/NoSsr': path.resolve(__dirname, './src/alias/NoSsr'),
      '@mui/material/TablePagination': path.resolve(__dirname, './src/alias/TablePagination'),
      '@mui/material/InputBase': path.resolve(__dirname, './src/alias/InputBase'),
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/index.esm.js'),
          to: path.resolve(__dirname, '../../dist', 'mui-grid.esm.js')
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
