import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Category from './pages/Category';
import NotFound from './pages/errors/NotFound';
import CategoryDetail from './pages/CategoryDetail';
import Settings from './pages/Settings';
import Register from './pages/Register';
import Login from './pages/Login';
import { ThemeProvider } from './context/themeContext';
import { PageTitleProvider } from './context/pageTitleContext';
import { AuthProvider } from './context/authContext';


function App() {
    return (
        <AuthProvider>
            <PageTitleProvider>
                <BrowserRouter>
                    <Switch>
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                    </Switch>
                </BrowserRouter>
                <ThemeProvider>
                    {/* <BrowserRouter>
                        <Navigation/>
                        <main className="my-20 xl:ml-52">
                            <div className="px-5 xl:px-10">
                                <Switch>
                                <Route path="/" exact component={Category} />
                                <Route path="/:categoryId/products" component={CategoryDetail} />
                                <Route path="/settings" exact component={Settings} />
                                <Route render={NotFound} />
                                </Switch>
                            </div>
                        </main>
                    </BrowserRouter> */}
                </ThemeProvider>
            </PageTitleProvider>
        </AuthProvider>
    );
}

export default App;
