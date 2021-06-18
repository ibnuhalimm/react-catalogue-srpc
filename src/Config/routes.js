import Login from '../pages/Login';
import Register from '../pages/Register';
import Category from '../pages/Category';
import NotFound from '../pages/errors/NotFound'
import Settings from '../pages/Settings';
import CategoryDetail from '../pages/CategoryDetail';


const routes = [
    {
        path: '/register',
        exact: true,
        component: Register,
        isPrivate: false
    },
    {
        path: '/login',
        exact: true,
        component: Login,
        isPrivate: false
    },
    {
        path: '/',
        exact: true,
        component: Category,
        isPrivate: true
    },
    {
        path: '/settings',
        exact: true,
        component: Settings,
        isPrivate: true
    },
    {
        path: '/:categoryId/products',
        exact: true,
        component: CategoryDetail,
        isPrivate: true
    },
    {
        path: '/*',
        exact: false,
        component: NotFound,
        isPrivate: true
    }
];

export default routes;