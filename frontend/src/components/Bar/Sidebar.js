import React from "react";
import { useSelector } from "react-redux";

// Style and Assets
import "./style.css";
import HomeIcon from "../../assets/HomeIcon.png";
import ProfileIcon from "../../assets/ProfileIcon.png";
import OrderIcon from "../../assets/OrderIcon.png";
import CartIcon from "../../assets/CartIcon.png";
import Logo from "../../assets/logo.png";

const Sidebar = (props) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const order = useSelector((state) => state.order);
  const { orders } = order;

  return (
    <div className="sidebar">
      <div className="sidebar__logoContainer">
        <img className="sidebar__logo" src={Logo} alt="Logo" />
        Lilies
      </div>
      <ul>
        <li>
          <img src={HomeIcon} alt="Home" />
          Dashboard
        </li>
        <li onClick={props.showProfile}>
          <img src={ProfileIcon} alt="Profile" />
          Your Profile
        </li>
        <li onClick={props.showOrders}>
          <img src={OrderIcon} alt="Order" />
          Your Orders{" "}
          <span className="order__quantityShow">{orders && orders.length}</span>
        </li>
        <li onClick={props.showCart}>
          <img id="cart__icon" src={CartIcon} alt="Cart" />
          Your Cart
          <span className="cart__quantityShow">
            {cartItems && cartItems.length}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
