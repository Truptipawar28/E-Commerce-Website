import React, { useContext } from "react";
import CartContext from "../../Store/cart-context";

const CartItem = (props) => {
    const cartCtx = useContext(CartContext);

    const removeProductCartHandler = () => {
        cartCtx.removeItem(props.id);
      };

    return (
        <div
            className="d-flex justify-content-between align-items-center  bg-light p-2 text-black"
            style={{ borderBottom: "2px solid grey" }}
        >
            <div
                className="d-flex align-items-center me-5"
                style={{
                    width: "150px",
                    height: "80px",
                }}
            >
                <img
                    className="rounded"
                    style={{ width: "50px" }}
                    src={props.image}
                    alt="music album"
                ></img>
                <span className=" ms-3">{props.title}</span>
            </div>
            <div className=" d-flex justify-content-around align-items-center w-75">
                <div>{props.price}</div>
                <div>
                    <input
                        type="number"
                        min="0"
                        step="1"
                        defaultValue={props.quantity}
                        className=" rounded "
                        style={{ width: "50px" }}
                    ></input>
                </div>
            </div>
            <div>
                <button className="btn btn-danger" onClick={removeProductCartHandler}> Remove</button>
            </div>
        </div>
    );
};

export default CartItem;