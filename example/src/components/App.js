import { Scaffold, Switch } from 'react-declarative';

import options from '../config/navbar.js';
import routes from '../config/routes.js';

export const App = () => {

    return htm`
        <${Scaffold} 
            title="InfoLink CRM"
            options=${options}
        >
            <${Switch}
                Loading=${() => htm`<p>Checking permissions (mock)</p>`}
                NotFound=${() => htm`<p>Not found(</p>`}
                items=${routes}
            />
        <//>
    `;
};

export default App;
