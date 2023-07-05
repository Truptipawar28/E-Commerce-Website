import React, { Fragment } from "react";
import NavigationBar from "../components/Navbar/NavigationBar";
import Footer from "../components/Footer/Footer";
import { BsPlayCircle } from "react-icons/bs";
import Title from "../components/Title/Title";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <Fragment>
      <NavigationBar></NavigationBar>

      <div style={{
            height: "100px",
            backgroundColor: "#FFA726",
            display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          }}
          
          className=" justify-content-center align-items-center ">
            <h1>The Generics</h1>
        <button className="btn btn-outline-light mt-auto">
          <h5>Get Our Latest Album</h5>
        </button>
      </div>
      <div style={{
            height: "150px",
            backgroundColor: "#FFA726",
            display: "flex",
          justifyContent: "center",
          alignItems: "center",
          }}
          >
        <a href="#" className="">
          <BsPlayCircle size="50px" />
        </a>
      </div>

      <Container className="my-5 bg light">
        <Title>Tours</Title>
        <Row className="border-bottom border-2 border-danger py-2 mt-5  m-auto w-75 ">
          <Col xs={3}>JUL 16</Col>
          <Col xs={3}>DETROIT, MI</Col>
          <Col xs={3}>DTE ENERGY MUSIC THEATRE</Col>
          <Col xs={3}>
            <button className="btn btn-outline-light w-100">
              Buy Tickets
            </button>
          </Col>
        </Row>
        <Row className="border-bottom border-2 border-danger py-2  m-auto w-75">
          <Col xs={3}>JULY 19</Col>
          <Col xs={3}>TORONTO, ON</Col>
          <Col xs={3}>BUDWEISER STAGE</Col>
          <Col xs={3}>
            <button className="btn btn-warning text-dark w-100">
              Buy Tickets
            </button>
          </Col>
        </Row>
        <Row className="border-bottom border-2 border-danger py-2 m-auto w-75">
          <Col xs={3}>JULY 22</Col>
          <Col xs={3}>BRISTOW, VA</Col>
          <Col xs={3}>JIGGY LUBE LIVE</Col>
          <Col xs={3}>
            <button className="btn btn-warning text-dark w-100">
              Buy Tickets
            </button>
          </Col>
        </Row>
        <Row className="border-bottom border-2 border-danger py-2 m-auto w-75">
          <Col xs={3}>JULY 29</Col>
          <Col xs={3}>PHOENIX, AZ</Col>
          <Col xs={3}>AK-CHIN PAVILION</Col>
          <Col xs={3}>
            <button className="btn btn-warning text-dark w-100">
              Buy Tickets
            </button>
          </Col>
        </Row>
        <Row className="border-bottom border-2 border-danger py-2 m-auto w-75">
          <Col xs={3}>AUG 2</Col>
          <Col xs={3}>LAS VEGAS, NV</Col>
          <Col xs={3}>T-MOBILE ARENA</Col>
          <Col xs={3}>
            <button className="btn btn-warning text-dark w-100">
              Buy Tickets
            </button>
          </Col>
        </Row>
        <Row className=" py-2 m-auto w-75 ">
          <Col xs={3}>AUG 7</Col>
          <Col xs={3}>CONCORD, CA</Col>
          <Col xs={3}>CONCORD PAVILION</Col>
          <Col xs={3}>
            <button className="btn btn-warning text-dark w-100">
              Buy Tickets
            </button>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </Fragment>
  );
};

export default Home;