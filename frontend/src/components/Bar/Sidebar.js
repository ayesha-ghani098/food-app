import React from "react";

// Style and Assets
import './style.css';
import HomeIcon from "../../assets/HomeIcon.png";
import ProfileIcon from "../../assets/ProfileIcon.png";
import OrderIcon from "../../assets/OrderIcon.png";
import CartIcon from "../../assets/CartIcon.png";
import Logo from "../../assets/logo.png";

const Sidebar = (props) => {
  return (
    <div class="sidebar">
      <div className="sidebar__logoContainer">
        <img className="sidebar__logo" src={Logo} alt="Logo" />
        Lilies
      </div>
      <ul>
        <li>
          <img src={HomeIcon} alt="Home" />
          Dashboard
        </li>
        <li>
          <img src={ProfileIcon} alt="Profile" />
          Your Profile
        </li>
        <li>
          <img src={OrderIcon} alt="Order" />
          Your Orders
        </li>
        <li onClick={props.showCart}>
          <img id="cart__icon" src={CartIcon} alt="Cart" />
          Your Cart
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
