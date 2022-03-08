import ReactDOM from 'react-dom';

import App from './components/App.js';

import { ThemeProvider } from '@mui/material/styles';

import theme from './config/theme.js';

const wrappedApp = (
  htm`<${ThemeProvider} theme=${theme}>
    <${App} />
  <//>`
);

ReactDOM.render(wrappedApp, document.getElementById('root'));
