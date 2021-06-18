import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Category from './pages/Category';
import NotFound from './pages/errors/NotFound';
import CategoryDetail from './pages/CategoryDetail';
import Settings from './pages/Settings';
import Register from './pages/Register';
import Login from './pages/Login';
import { ThemeProvider } from './context/themeContext';
import { PageTitleProvider } from './context/pageTitleContext';
import { AuthProvider } from './context/Auth/context';
import AppRoute from './components/AppRoute';
import routes from './Config/routes';


function App() {
    return (
        <AuthProvider>
            <ThemeProvider>
                <PageTitleProvider>
                    <BrowserRouter>
                        <Switch>
                            {routes.map((route) => (
                                <AppRoute
                                    key={route.path}
                                    path={route.path}
                                    component={route.component}
                                    isPrivate={route.isPrivate}
                                    exact={route.exact} />
                            ))}
                        </Switch>
                    </BrowserRouter>
                </PageTitleProvider>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;
