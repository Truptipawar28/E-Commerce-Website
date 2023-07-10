import React from "react";


const CartContext = React.createContext({
  productDetails: [],
  products: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {}
});

export default CartContext;