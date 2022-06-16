import React from "react";
import { useDispatch } from "react-redux";

// Actions
import { editCart } from "../../store/actions/cartAction";

// Style and Assets
import "./style.css";
import temporary from "../../assets/menu3.png";

const CartCard = (props) => {
  const { item } = props;
  const dispatch = useDispatch();

  const removeFromCartHandler = (Flag) => {
    dispatch(editCart(item, Flag));
  };
  return (
    <tr className="cart__item" key={item.id}>
      <td className="cart__itemLeft">
        <div>
          <img src={temporary} alt="CartImage" />
        </div>
        <div>
          <h3>{item.name}</h3>
          <span
          className="cart__Icon"
            onClick={() => {
              removeFromCartHandler(true);
            }}
          >
           ++
          </span>
          <span
          className="cart__Icon"
            onClick={() => {
              removeFromCartHandler(false);
            }}
          >
           --
          </span>
        </div>
      </td>
      <td>{item.quantity}</td>
      <td>{item.price}</td>
      <td>Rs {item.subPrice}</td>
    </tr>
  );
};

export default CartCard;
