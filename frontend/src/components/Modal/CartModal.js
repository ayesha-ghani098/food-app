import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { removeFromCart } from "../../store/actions/cartAction";

// Styled Components
import Table from "react-bootstrap/Table";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "../Button/Button";


const CartModal = (props) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Offcanvas show={props.show} onHide={props.hide} placement="end">
      <Table>
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
            <h2>Your Cart is Empty</h2>
          ) : (
            cartItems.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div>
                      <h3>{item.name}</h3>
                    </div>
                    <span onClick={() => removeFromCartHandler(item._id)}>
                      Remove
                    </span>
                  </td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>Rs {item.price * item.quantity}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
      <Button label="Checkout" />
    </Offcanvas>
  );
};

export default CartModal;
