import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Category from '../Pages/Category';
import NotFound from '../Pages/Errors/NotFound'
import Settings from '../Pages/Settings';
import CategoryDetail from '../Pages/CategoryDetail';


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