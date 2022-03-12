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
    '@mui/icons-material': 'MuiIcons',
    '@mui/material/styles': 'MuiMaterialStyles',
    '@mui/x-data-grid': 'MuiGrid',
    '@mui/system': 'MuiSystem',
    '@mui/styles': 'MuiStyles',
  },
  resolve: {
    alias: {
      'react/jsx-runtime': path.resolve(__dirname, './src/jsx-runtime'),
      '@mui/material/Button': path.resolve(__dirname, './src/alias/Button'),
      '@mui/material/DialogActions': path.resolve(__dirname, './src/alias/DialogActions'),
      '@mui/material/DialogTitle': path.resolve(__dirname, './src/alias/DialogTitle'),
      '@mui/material/DialogContent': path.resolve(__dirname, './src/alias/DialogContent'),
      '@mui/material/Dialog': path.resolve(__dirname, './src/alias/Dialog'),
      '@mui/material/Link': path.resolve(__dirname, './src/alias/Link'),
      '@mui/material/Breadcrumbs': path.resolve(__dirname, './src/alias/Breadcrumbs'),
      '@mui/material/List': path.resolve(__dirname, './src/alias/List'),
      '@mui/material/Menu': path.resolve(__dirname, './src/alias/Menu'),
      '@mui/material/Toolbar': path.resolve(__dirname, './src/alias/Toolbar'),
      '@mui/material/Drawer': path.resolve(__dirname, './src/alias/Drawer'),
      '@mui/material/CssBaseline': path.resolve(__dirname, './src/alias/CssBaseline'),
      '@mui/material/AppBar': path.resolve(__dirname, './src/alias/AppBar'),
      '@mui/material/ButtonBase': path.resolve(__dirname, './src/alias/ButtonBase'),
      '@mui/material/Collapse': path.resolve(__dirname, './src/alias/Collapse'),
      '@mui/material/Paper': path.resolve(__dirname, './src/alias/Paper'),
      '@mui/material/Avatar': path.resolve(__dirname, './src/alias/Avatar'),
      '@mui/material/MenuItem': path.resolve(__dirname, './src/alias/MenuItem'),
      '@mui/material/ListItemAvatar': path.resolve(__dirname, './src/alias/ListItemAvatar'),
      '@mui/material/ListItemIcon': path.resolve(__dirname, './src/alias/ListItemIcon'),
      '@mui/material/ListItemText': path.resolve(__dirname, './src/alias/ListItemText'),
      '@mui/material/ListItem': path.resolve(__dirname, './src/alias/ListItem'),
      '@mui/material/Fab': path.resolve(__dirname, './src/alias/Fab'),
      '@mui/material/Tabs': path.resolve(__dirname, './src/alias/Tabs'),
      '@mui/material/Tab': path.resolve(__dirname, './src/alias/Tab'),
      '@mui/material/Slider': path.resolve(__dirname, './src/alias/Slider'),
      '@mui/material/Switch': path.resolve(__dirname, './src/alias/Switch'),
      '@mui/material/IconButton': path.resolve(__dirname, './src/alias/IconButton'),
      '@mui/material/Rating': path.resolve(__dirname, './src/alias/Rating'),
      '@mui/material/Radio': path.resolve(__dirname, './src/alias/Radio'),
      '@mui/material/Chip': path.resolve(__dirname, './src/alias/Chip'),
      '@mui/material/Autocomplete': path.resolve(__dirname, './src/alias/Autocomplete'),
      '@mui/material/TextField': path.resolve(__dirname, './src/alias/TextField'),
      '@mui/material/Typography': path.resolve(__dirname, './src/alias/Typography'),
      '@mui/material/RadioGroup': path.resolve(__dirname, './src/alias/RadioGroup'),
      '@mui/material/InputAdornment': path.resolve(__dirname, './src/alias/InputAdornment'),
      '@mui/material/LinearProgress': path.resolve(__dirname, './src/alias/LinearProgress'),
      '@mui/material/CircularProgress': path.resolve(__dirname, './src/alias/CircularProgress'),
      '@mui/material/FormGroup': path.resolve(__dirname, './src/alias/FormGroup'),
      '@mui/material/Checkbox': path.resolve(__dirname, './src/alias/Checkbox'),
      '@mui/material/Box': path.resolve(__dirname, './src/alias/Box'),
      '@mui/material/Grid': path.resolve(__dirname, './src/alias/Grid'),
      '@mui/material/FormControlLabel': path.resolve(__dirname, './src/alias/FormControlLabel'),
      '@mui/material/TableSortLabel': path.resolve(__dirname, './src/alias/TableSortLabel'),
      '@mui/material/TableCell': path.resolve(__dirname, './src/alias/TableCell'),
      '@mui/material/TableRow': path.resolve(__dirname, './src/alias/TableRow'),
      '@mui/material/TablePagination': path.resolve(__dirname, './src/alias/TablePagination'),
      '@mui/material/TableContainer': path.resolve(__dirname, './src/alias/TableContainer'),
      '@mui/material/TableHead': path.resolve(__dirname, './src/alias/TableHead'),
      '@mui/material/TableBody': path.resolve(__dirname, './src/alias/TableBody'),
      '@mui/material/Table': path.resolve(__dirname, './src/alias/Table'),
      '@mui/material/Stack': path.resolve(__dirname, './src/alias/Stack'),
      '@mui/icons-material/KeyboardArrowRight': path.resolve(__dirname, './src/alias/KeyboardArrowRightIcon'),
      '@mui/icons-material/KeyboardArrowLeft': path.resolve(__dirname, './src/alias/KeyboardArrowLeftIcon'),
      '@mui/icons-material/FiberManualRecord': path.resolve(__dirname, './src/alias/FiberManualRecordIcon'),
      '@mui/icons-material/OutlinedFlag': path.resolve(__dirname, './src/alias/OutlinedFlagIcon'),
      '@mui/icons-material/Search': path.resolve(__dirname, './src/alias/SearchIcon'),
      '@mui/icons-material/Menu': path.resolve(__dirname, './src/alias/MenuIcon'),
      '@mui/icons-material/ExpandLess': path.resolve(__dirname, './src/alias/ExpandLessIcon'),
      '@mui/icons-material/ExpandMore': path.resolve(__dirname, './src/alias/ExpandMoreIcon'),
      '@mui/icons-material/Restore': path.resolve(__dirname, './src/alias/RestoreIcon'),
      '@mui/icons-material/Add': path.resolve(__dirname, './src/alias/AddIcon'),
      '@mui/icons-material/CheckBox': path.resolve(__dirname, './src/alias/CheckBoxIcon'),
      '@mui/icons-material/Refresh': path.resolve(__dirname, './src/alias/RefreshIcon'),
      '@mui/icons-material/MoreVert': path.resolve(__dirname, './src/alias/MoreVertIcon'),
      '@mui/icons-material/CheckBoxOutlineBlank': path.resolve(__dirname, './src/alias/CheckBoxOutlineBlankIcon'),
      '@mui/icons-material/NotInterested': path.resolve(__dirname, './src/alias/NotInterestedIcon'),
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
