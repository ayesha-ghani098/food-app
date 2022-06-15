import React from "react";
import { useSelector } from "react-redux";

// Style and Assets
import "./style.css";

// Styled Components
import Table from "react-bootstrap/Table";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "../Button/Button";
import CartCard from "../Card/CartCard";

// Components
import BasicHeading from "../Heading/Heading";

const CartCanvas = (props) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems, totalPrice } = cart;

  return (
    <Offcanvas
      id="canvaslarge"
      show={props.show}
      onHide={props.hide}
      placement="end"
    >
      <BasicHeading heading="Your Cart" />
      <Table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>SubTotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length === 0 ? (
            <h2 className="cart__emptyHeading">Your Cart is Empty</h2>
          ) : (
            cartItems.map((item, index) => {
              return <CartCard item={item} />;
            })
          )}
        </tbody>
      </Table>
      <div className="cart__totalPrice">
        Total:<span>Rs {totalPrice}</span>
      </div>
      <Button label="Checkout" />
    </Offcanvas>
  );
};

export default CartCanvas;
