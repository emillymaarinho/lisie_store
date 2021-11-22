import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import Home from './pages/Home';
import Login from './components/login/Login';
import Products from './pages/Products';
import Store from './pages/Store';
import NewProduct from './pages/NewProduct'
import ProductEdit from './pages/ProductEdit';


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Container >
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route  path="/login">
            <Login/>
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/product/:id">
            <ProductEdit />
          </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
