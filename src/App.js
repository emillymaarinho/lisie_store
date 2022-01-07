import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import Home from './pages/Home';
import Login from './components/login/Login';
import Products from './pages/Products';
import NewProduct from './pages/NewProduct'
import ProductEdit from './pages/ProductEdit';
import PrivateRoute from './components/routes/PrivateRoute';
import PublicRoute from './components/routes/PublicRoute';

function App() {

  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("userLogged");
    if (token) setUserLogged(true);
  }, []);

  const logout = () => {
    localStorage.removeItem("userLogged");
    setUserLogged(false);
  };

  const loginEvent = () => {
    setUserLogged(true);
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar userLogged={userLogged} logout={() => logout()} />
      <Switch>
        <Container >
          <PublicRoute exact path="/">
            <Home />
          </PublicRoute>
          <PublicRoute path="/login">
            <Login loginEvent={() => loginEvent()} />
          </PublicRoute>
          <PrivateRoute path="/products">
            <Products />
          </PrivateRoute>
          {/* <PrivateRoute path="/store">
            <Store />
          </PrivateRoute> */}
          <PrivateRoute path="/newproduct">
            <NewProduct />
          </PrivateRoute>
          <PrivateRoute path="/product/:id">
            <ProductEdit />
          </PrivateRoute>
        </Container>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
