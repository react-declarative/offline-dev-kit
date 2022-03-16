import HomePage from '../pages/HomePage.js';
import ListPage from '../pages/ListPage.js';

export const routes = [
    {
        path: '/',
        element: () => htm`<${HomePage} />`,
    },
    {
        path: '/profiles',
        element: () => htm`<${ListPage} />`,
    },
];

export default routes;
