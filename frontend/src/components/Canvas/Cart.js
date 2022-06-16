import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Style and Assets
import "./style.css";

// Styled Components
import Table from "react-bootstrap/Table";
import Offcanvas from "react-bootstrap/Offcanvas";

// Components
import BasicHeading from "../Heading/Heading";
import Button from "../Button/Button";
import CartCard from "../Card/CartCard";

// Actions
import { createOrder, resetOrder } from "../../store/actions/orderAction";
import { resetCart } from "../../store/actions/cartAction";

const CartCanvas = (props) => {
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const { cartItems, totalPrice } = cartState;
  const orderState = useSelector((state) => state.order);
  const { message, error } = orderState;
  const userState = useSelector((state) => state.user);
  const { id } = userState.user;

  const orderitems = () => {
    return cartItems.map((item) => {
      return {
        id: item.id,
        quantity: item.quantity,
        subPrice: item.subPrice,
      };
    });
  };
  const orderItems = orderitems();

  const createOrderHandler = () => {
    const order = {
      userId:id,
      orderItems,
      totalPrice,
    };
    dispatch(createOrder(order));
    dispatch(resetCart());
    setSuccess(true);
    setTimeout(() => {
      dispatch(resetOrder());
      setSuccess(false);
    }, 3000);
  };

  return (
    <Offcanvas
      id="canvaslarge"
      show={props.show}
      onHide={props.hide}
      placement="end"
    >
      {success ? (
        <h2>{message}</h2>
      ) : error ? (
        <h1>Error while ordering</h1>
      ) : (
        <>
          <BasicHeading heading="Your Cart" />
          <Table id="scroll" className="table">
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
          <Button onClick={createOrderHandler} label="Order" />
        </>
      )}
    </Offcanvas>
  );
};

export default CartCanvas;
