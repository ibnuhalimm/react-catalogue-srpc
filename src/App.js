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


function App() {
    return (
        <AuthProvider>
            <ThemeProvider>
                <PageTitleProvider>
                    <BrowserRouter>
                        <Switch>
                            {/* Private Route */}
                            <Route
                                exact
                                path="/register"
                                component={Register} />
                            <Route
                                exact
                                path="/login"
                                component={Login} />
                            <AppRoute
                                exact
                                path="/"
                                component={Category}
                                isPrivate={true} />
                            {/* <Route path="/" exact component={Category} /> */}
                            {/* <Route
                                path="/settings"
                                exact component={Settings} /> */}
                            <AppRoute
                                exact
                                path="/settings"
                                component={Settings}
                                isPrivate={true} />
                            {/* <Route
                                path="/:categoryId/products"
                                component={CategoryDetail} /> */}
                            <AppRoute
                                exact
                                path="/:categoryId/products"
                                component={CategoryDetail}
                                isPrivate={true} />
                            <Route path="/*"
                                render={NotFound} />
                        </Switch>
                    </BrowserRouter>
                </PageTitleProvider>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;
