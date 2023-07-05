// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import NavigationBar from './components/Navbar/NavigationBar';
import ProductPage from './components/ProductPage/ProductPage';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import CartProvider from './Store/CartProvider';
import About from './pages/About';
import { Route } from 'react-router-dom';
import Home from './pages/Home';



const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);


  const cartClickHandler = () => {
    setCartIsShown(true);
  }

  const cartCloseHandler = () => {
    setCartIsShown(false);
  }
  return (
    <div className="App" style={{ backgroundColor: "#FFFFFF" }}>
      <CartProvider >
        {cartIsShown && <Cart onCartClose={cartCloseHandler}></Cart>}
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/store">
          <NavigationBar onCartClick={cartClickHandler}></NavigationBar>
          <ProductPage />
          <Footer />
        </Route>
      </CartProvider>
    </div>
  );
}

export default App;
