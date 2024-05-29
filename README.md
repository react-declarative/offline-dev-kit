# offline-dev-kit

> Offline dev kit based on [import maps](https://github.com/WICG/import-maps) and [htm jsx factory](https://github.com/developit/htm). No node_modules need anymore! Full [material-ui](https://github.com/mui/material-ui) lib without bundlers!

## Contribute

> [!IMPORTANT]
> There is made by using [react-declarative](https://github.com/react-declarative/react-declarative) to solve your problems. **⭐Star** and **💻Fork** It on github will be appreciated

## Usage

Run in command line

```
npm install
npm run build
npm start
```

## Code sample

Import map

```html
<script type="importmap">
  {
    "imports": {
      "react": "/dist/react.esm.js",
      ...
    }
  }
</script>
```

ES6 modules in modern browser

```html
<script type="module">
import React from 'react';
import ReactDOM from 'react-dom';

import { Scaffold, Switch } from 'react-declarative';
import { createMemoryHistory } from 'history';

import options from '../config/navbar.js';
import routes from '../config/routes.js';

const history = createMemoryHistory();

const App = () => {

    const handleNavClick = (name) => {
        if (name === 'home-page') {
            history.push('/');
        } else if (name === 'profiles-page') {
            history.push('/profiles');
        }
    };

    return htm`
        <${Scaffold} 
            title="InfoLink CRM"
            onOptionClick=${handleNavClick}
            options=${options}
        >
            <${Switch}
                Loading=${() => htm`<p>Checking permissions (mock)</p>`}
                NotFound=${() => htm`<p>Not found(</p>`}
                history=${history}
                items=${routes}
            />
        <//>
    `;
};

ReactDOM.render(htm`<App />`, document.getElementById('root'));
</script>
```

Check the full source code in [example](./example/) folder
