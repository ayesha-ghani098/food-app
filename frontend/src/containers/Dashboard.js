import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

// Style and Assets
import HomeIcon from "../assets/HomeIcon.png";
import ProfileIcon from "../assets/ProfileIcon.png";
import OrderIcon from "../assets/OrderIcon.png";
import CartIcon from "../assets/CartIcon.png";
import Logo from "../assets/logo.png";

// Custom Components
import ProductList from "../components/List/ProductList";
import CartModal from "../components/Modal/CartModal";

const Dashboard = ({history}) => {
  const [showCart, setShowCart] = useState(false);
  let navigate = useNavigate();

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);


  const logoutHandler = () => {
    localStorage.removeItem("authToken");
  navigate("/login",{ replace: true })
  }

  return (
    <>
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
          <li onClick={handleShowCart}>
            <img id="cart__icon" src={CartIcon} alt="Cart" />
            Your Cart
          </li>
        </ul>
      </div>
      <div class="dashboard">
        <div className="dashboard__header">
          <div>
            <h2>Good morning, Oghenevwede!</h2>
            <p> What delicious meal are you craving today?</p>
          </div>
         <span onClick={logoutHandler}>Logout</span>
        </div>
        <div>
        <ProductList/>
        </div>
        <CartModal show={showCart} hide={handleCloseCart}/>
      </div>
    </>
  );
};

export default Dashboard;
