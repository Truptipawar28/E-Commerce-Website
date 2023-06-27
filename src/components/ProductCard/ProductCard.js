import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import { Overlay } from "react-bootstrap";
import './ProductCard.module.css'

function ProductCard(props) {

  return (
    <Card
      style={{
        width: "18rem",
      }}
      className="shadow mb-5 "
    >
       <Card.Img variant="top" src={props.imageUrl} />
        {/* <Overlay
          show={true}
          placement="top"
          target={props.imageUrl}
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            background: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            padding: "10px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
        <Card.Text className="text-green">
          Album
        </Card.Text>
        </Overlay> */}
    
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <div className="d-flex justify-content-between">
          <h4>Price : {props.price}</h4>
          <Button variant="primary">Add to cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;











// import React from "react";
// import classes from './Product.module.css';
// import { Card } from "react-bootstrap";

// const ProductCard = (props) => {
//     const price = `$${props.price.toFixed(2)}`;

//     return (

//         <Card 
//         style={{
//             width: "18rem",
//         }}
//         className="shadow mb-5" >

//             <Card.Img variant="top" src={props.imageUrl} />

//             <Card.Body>
//                 <Card.Title></Card.Title>
//             </Card.Body>
//         </Card>
//     );
// };

// export default ProductCard;