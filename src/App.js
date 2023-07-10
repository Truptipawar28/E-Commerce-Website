// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import NavigationBar from './components/Navbar/NavigationBar';
import ProductPage from './components/ProductPage/ProductPage';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import CartProvider from './Store/CartProvider';
import About from './pages/About';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import axios from 'axios';
import ProductInfo from './pages/productInfo';
import LoginForm from './pages/login';
import { useContext } from 'react';
import CartContext from './Store/cart-context';


const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const cartCtx = useContext(CartContext);
  const loggedIn = cartCtx.isLoggedIn;
  

  const cartClickHandler = () => {
    setCartIsShown(true);
  }

  const cartCloseHandler = () => {
    setCartIsShown(false);
  }

  const userDetailPostHandler = (user) => {
    axios.post("https://e-commerce-project-8c250-default-rtdb.firebaseio.com/products.json",
      {
        body: JSON.stringify(userDetailPostHandler),
      })
  };


  return (
    <div className="App" style={{ backgroundColor: "#FFFFFF" }}>
      <CartProvider >
      <Switch>
        {cartIsShown && <Cart onCartClose={cartCloseHandler}></Cart>}
        <Route path="/" exact>
            <Redirect to="/store"></Redirect>
          </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact-us">
          <ContactUs userDetail={userDetailPostHandler} />
        </Route>
        <Route path="/store">
          <NavigationBar onCartClick={cartClickHandler}></NavigationBar>
          <ProductPage openCart={cartClickHandler} />
          <Footer />
        </Route>
        <Route path="/productdetail/:productId">
          <ProductInfo />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
          <Route path="*">
            <Redirect to="/login"></Redirect>
          </Route>
        </Switch>
      </CartProvider>
    </div>
  );
}

export default App;
