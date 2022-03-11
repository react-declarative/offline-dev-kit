import HomePage from '../pages/HomePage.js';
import ListPage from '../pages/ListPage.js';

export const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/profiles',
        component: ListPage,
    },
];

export default routes;
