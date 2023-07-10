import React, { Fragment, useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartIcon from "../Cart/CartIcon";
import './Navbar.module.css';
import CartContext from "../../Store/cart-context";
import { Link } from "react-router-dom/cjs/react-router-dom";
import {useHistory} from 'react-router-dom'

const NavigationBar = (props) => {
  const cartHandler = () => {
    props.onCartClick();
  }

  const cartCtx = useContext(CartContext);

  const isLoggedIn = cartCtx.isLoggedIn;
  const history = useHistory();

  const logoutHandler = () => {
    cartCtx.logout();
    history.replace("/login");
  };

  let quantity = 0;
  cartCtx.products.forEach((product) => {
    quantity = quantity + (Number(product.quantity));
  });

  return (
    <header>
      <Fragment>
        <Navbar
          bg="dark"
          variant="dark"
          className="p-2 shadow   bg-success"
          // fixed="top"
        >
          <Container>
            <Navbar.Brand href="#home" className="fs-2" >
              E-Commerce
            </Navbar.Brand>
            <Nav className="ms-auto">
              {isLoggedIn && (
              <Link
                activeClassName="active"
                to="/home"
                className="me-5 nav-item fs-5">
                Home
              </Link>
              )}
              {isLoggedIn && (
              <Link
                activeClassName="active"
                to="/store"
                className="me-5 nav-item fs-5 ">
                Store
              </Link>
              )}
              {isLoggedIn && (
              <Link
                activeClassName="active"
                to="/about"
                className="me-5 nav-item fs-5 ">
                About
              </Link>
              )}
              {isLoggedIn && (
              <Link
              activeClassName="active"
              to="/contact-us"
              className="me-5 nav-item fs-5 ">
              Contact Us
            </Link>
              )}
              {isLoggedIn && (
                <Link
                activeClassName="active"
                to="/about"
                className="me-5 nav-item fs-5 ">
                 Login
               </Link>
              )}
            </Nav>
            {isLoggedIn && (
            <button className="button" onClick={cartHandler}>
              <span className="icon">
                <CartIcon />
              </span>
              <div className="badge">{quantity}</div>
            </button>
            )}
          </Container>
        </Navbar>
        <div
          style={{
            height: "250px",
            backgroundColor: "#FFFFFF",
          }}
          className="d-flex justify-content-center align-items-center pt-5"
        >
          <h1 style={{ fontSize: "90px", fontFamily: "brush-script" }}>
            E-commerce
          </h1>
        </div>
      </Fragment>
    </header>
  );
};

export default NavigationBar;