import React, { useState } from "react";
import { useDispatch } from "react-redux";

// Actions
import { editCart } from "../../store/actions/cartAction";

// Style and Assets
import "./style.css";
import temporary from "../../assets/menu3.png";

const CartCard = (props) => {
  const { item } = props;
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();

  const removeFromCartHandler = (id, value) => {
    setFlag(value);
    dispatch(editCart(id, flag));
  };
  return (
    <>
    <tr className="cart__item" key={item.id}>
      <td className="cart__itemLeft">
        <div >
          <img src={temporary} alt="CartImage" />
        </div>
        <div>
        <h3>{item.name}</h3>
        <span onClick={() => removeFromCartHandler(item.id, true)}>
          Increment
        </span>
        <span onClick={() => removeFromCartHandler(item.id, false)}>
          Decrement
        </span>
        </div>
      </td>
      <td>{item.quantity}</td>
      <td>{item.price}</td>
      <td>Rs {item.subPrice}</td>
    </tr>
    </>
  );
};

export default CartCard;
