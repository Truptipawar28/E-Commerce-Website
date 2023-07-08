import { Fragment, useContext } from "react";
import NavigationBar from "../components/Navbar/NavigationBar";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import CartContext from "../Store/cart-context";
import { Col, Container, Row } from "react-bootstrap";
import { BsFillStarFill, BsFill4SquareFill } from "react-icons/bs";
import Footer from "../components/Footer/Footer";
import { MDBIcon } from "mdb-react-ui-kit";

const ProductInfo = () => {
    const ctx = useContext(CartContext);
    const params = useParams();

    const product = ctx.productDetails.filter((p) => {
        return p.id === params.productId
    });

    const onClicHandler = () => {
        ctx.addProduct({...product[0], quantity: 1});
    };

    return (
        <Fragment>
            <NavigationBar></NavigationBar>
            <Container>
                <Row className="my-5 py-5">
                    <Col xs={6} className="border-succes"
                     style={{ width: "600px", backgroundColor: "#FFE082" }}>

                        <div className="border-success">
                            <img 
                            src={ctx.productDetails[0].imageUrl}
                            alt="product-image"
                            className="w-75 my-4">
                            </img>
            
                            <div className="d-flex justify-content-between"
                            style={{ width: "100px"}}
                            >    
                            <img 
                            src={ctx.productDetails[0].imageUrl}
                            alt="product-image"
                            className="w-75 my-4 mx-4">
                            </img>
               
                            <img 
                            src={ctx.productDetails[0].imageUrl}
                            alt="product-image"
                            className="w-75 my-4 mx-4">
                            </img>
                    
                            <img 
                            src={ctx.productDetails[0].imageUrl}
                            alt="product-image"
                            className="w-75 my-4 mx-4">
                            </img>
                    
                            <img 
                            src={ctx.productDetails[0].imageUrl}
                            alt="product-image"
                            className="w-75 my-4 mx-4">
                            </img>               
                            </div>      
                </div>
                        <button className="btn btn-warning w-50" onClick={onClicHandler}>
                            Add to cart
                        </button>
                    </Col>
                    <Col xs={6}>
                    <div className="border border-warning">
              <div className="px-5 my-5 border bg-warning">
                <h4>{ctx.productDetails[0].title}</h4>
                <h5 className="text-success font-weight-bold">
                  Special Price %
                </h5>
                <h3>&#8377; {ctx.productDetails[0].price}</h3>
                
              </div>
              <div className="px-5  my-5 border bg-warning ">
                <h3 className="text-light">Available Offers</h3>
                <p>Special PriceGet at flat ₹{ctx.productDetails[0].price}T&C</p>
                <p>
                Bank OfferFlat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on orders 
                priced between ₹15,000 to ₹39,999T&C
                </p>
                <p>
                Bank OfferFlat ₹3,000 Off on HDFC Bank Credit Card EMI 
                Trxns on orders priced between ₹40,000 to ₹49,999T&C
                </p>
                <p>
                  Bank Offer10% instant discount on SBI Credit Card EMI
                  Transactions, up to ₹1,250 on orders of ₹5,000 and aboveT&C
                </p>
              </div>
              <div className="px-5  my-5 border d-flex justify-content-between align-items-end">
             
                <h3 className="text-primary">Ratings and reviews</h3>
                
                <div
                  className=" text-white rounded p-2 mt-1 w-20"
                  style={{ backgroundColor: "#00d100" }}
                >
                    {" "}
                    {/* <BsFillStarFill size="20px" className="mx-1"></BsFillStarFill>
                    <BsFillStarFill size="20px" className="mx-1"></BsFillStarFill> */}
                 
                    <BsFill4SquareFill size="25px" className=" mx-1"></BsFill4SquareFill>
                    <BsFillStarFill size="20px" className="mx-1"></BsFillStarFill>
            
                </div>
                <button className="btn btn-primary">Rate Product</button>
                </div>
                <div className="my-4">
                <div className="d-flex justify-content-around align-items-center">
                  <div
                    className=" text-white rounded p-2 mt-1 w-20 "
                    style={{ backgroundColor: "#00d100" }}
                  >
                    
                    <BsFill4SquareFill size="25px" className=" mx-1"></BsFill4SquareFill>
                    <BsFillStarFill size="20px" className="mx-1"></BsFillStarFill>
                  </div>
                  <span className="fs-3">Very Good Product</span>
                </div>
                <div className="my-2 ms-5">
                  <img
                
                    src={ctx.productDetails[0].imageUrl}
                    alt="image"
                    style={{ width: "60px", marginLeft: "30px" }}
                  ></img>
                  <img
                    src={ctx.productDetails[0].imageUrl}
                    alt="image"
                    style={{ width: "60px", marginLeft: "30px" }}
                  ></img>
                </div>
              </div>
              <div className="my-4">
                <div className="d-flex justify-content-around align-">
                  <div
                    className=" text-white rounded p-2 mt-1 w-20 "
                    style={{ backgroundColor: "#00d100" }}
                  >
                    
                    <BsFill4SquareFill size="25px" className=" mx-1"></BsFill4SquareFill>
                    <BsFillStarFill size="20px" className="mx-1"></BsFillStarFill>
                  </div>
                  <span className="fs-4">Good product</span>
                </div>
                <div className="my-2 ms-5">
                  <img
                    src={ctx.productDetails[0].imageUrl}
                    alt="image"
                    style={{ width: "60px", marginLeft: "30px" }}
                  ></img>
                </div>
              </div>
            </div>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </Fragment>
    )
};

export default ProductInfo;