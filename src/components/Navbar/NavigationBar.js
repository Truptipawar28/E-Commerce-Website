import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartIcon from "../Cart/CartIcon";
import './Navbar.module.css';
import CartContext from "../../Store/cart-context";

const NavigationBar = (props) => {
    const cartHandler = () => {
      props.onCartClick();
    }
  
    const cartCtx = useContext(CartContext);
    let quantity = 0;
    cartCtx.products.forEach((product) => {
      quantity = quantity + (Number (product.quantity));
    });
  
    return (
      <header>
        <Navbar
          bg="dark"
          variant="dark"
          className="p-2 shadow   bg-success"
          fixed="top"
        >
          <Container>
            <Navbar.Brand href="#home" className="fs-2" >
              E-Commerce
            </Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="me-5 nav-item fs-5 ">
                Home
              </Nav.Link>
              <Nav.Link href="#features" className="me-5 nav-item fs-5">
                Store
              </Nav.Link>
              <Nav.Link href="#pricing" className="me-5 nav-item fs-5">
                About
              </Nav.Link>
            </Nav>
            <button onClick={cartHandler}
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
            >
              <span className="icon">
                <CartIcon />
              </span>
              <div 
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
              >{quantity}</div>
            </button>
          </Container>
        </Navbar>
      </header>
    );
  };
  
  export default NavigationBar;