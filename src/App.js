import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ThemeProvider } from './Context/themeContext';
import { PageTitleProvider } from './Context/pageTitleContext';
import { AuthProvider } from './Context/Auth/context';
import AppRoute from './Components/AppRoute';
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
