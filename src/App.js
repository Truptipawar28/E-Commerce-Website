// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import NavigationBar from './components/Navbar/NavigationBar';
import ProductPage from './components/ProductPage/ProductPage';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import CartProvider from './Store/CartProvider';

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);


  const cartClickHandler = () => {
    setCartIsShown(true);
  }

  const cartCloseHandler = () => {
    setCartIsShown(false);
  }
  return (
    <div className="App" style={{ backgroundColor: "#E57373" }}>
      <CartProvider className="App">
        <NavigationBar onCartClick={cartClickHandler}></NavigationBar>
        {cartIsShown && <Cart onCartClose={cartCloseHandler}></Cart>}
        <ProductPage></ProductPage>
        <Footer></Footer>
      </CartProvider>
    </div>
  );
}

export default App;