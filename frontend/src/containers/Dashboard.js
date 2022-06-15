import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Style and Assets
import Avatar from "../assets/avatar.png";

// Custom Components
import ProductList from "../components/List/ProductList";
import CartCanvas from "../components/Canvas/Cart";
import Sidebar from "../components/Bar/Sidebar";

const Dashboard = ({ history }) => {
  const [showCart, setShowCart] = useState(false);
  let navigate = useNavigate();

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    navigate("/login", { replace: true });
  };

  return (
    <>
      <Sidebar showCart={handleShowCart} />
      <div class="dashboard">
        <div className="dashboard__header">
          <div>
            <h2>Good morning, Oghenevwede!</h2>
            <p> What delicious meal are you craving today?</p>
          </div>
          <div className="dashboard__headerRight">
            <img src={Avatar} alt="Avatar" />
            <button onClick={logoutHandler}>Logout</button>
          </div>
        </div>
        <div>
          <ProductList />
        </div>
        <CartCanvas show={showCart} hide={handleCloseCart} />
      </div>
    </>
  );
};

export default Dashboard;
