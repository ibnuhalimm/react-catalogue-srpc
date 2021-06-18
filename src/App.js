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


function App() {
    return (
        <AuthProvider>
            <ThemeProvider>
                <PageTitleProvider>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/register" component={Register} />
                            <Route path="/login" component={Login} />
                            {/* Private Route */}
                            <Route path="/" exact component={Category} />
                            <Route path="/:categoryId/products" component={CategoryDetail} />
                            <Route path="/settings" exact component={Settings} />
                            <Route render={NotFound} />
                        </Switch>
                    </BrowserRouter>
                </PageTitleProvider>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;
