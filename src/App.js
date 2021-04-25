import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Category from './pages/Category';
import NotFound from './pages/errors/NotFound';
import CategoryDetail from './pages/CategoryDetail';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <main className="my-20 xl:ml-52">
        <div className="px-5 xl:px-10">
          <Switch>
            <Route path="/" exact component={Category} />
            <Route path="/:categoryId/products" component={CategoryDetail} />
            <Route render={NotFound} />
          </Switch>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
