import ReactDOM from 'react-dom';

import { ThemeProvider } from '@mui/material/styles';

import App from './components/App/index.js';
import AlertProvider from './components/AlertProvider/index.js';

import theme from './config/theme.js';

const wrappedApp = htm`
  <${ThemeProvider} theme=${theme}>
    <${AlertProvider}>
      <${App} />
    <//>
  <//>
`;

ReactDOM.render(wrappedApp, document.getElementById('root'));
