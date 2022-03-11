import { Scaffold, Switch } from 'react-declarative';
import { createMemoryHistory } from 'history';

import options from '../../config/navbar.js';
import routes from '../../config/routes.js';

const history = createMemoryHistory();

export const App = () => {

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

export default App;
