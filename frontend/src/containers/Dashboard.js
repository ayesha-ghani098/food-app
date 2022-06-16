import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// Style and Assets
import Avatar from "../assets/avatar.png";

// Custom Components
import ProductList from "../components/List/ProductList";
import CartCanvas from "../components/Canvas/Cart";
import Sidebar from "../components/Bar/Sidebar";
import OrderCanvas from "../components/Canvas/Orders";
import ProfileCanvas from "../components/Canvas/Profile"

// Actions
import { getAllProducts } from "../store/actions/productAction";
import { getOrders } from "../store/actions/orderAction";

const Dashboard = () => {
  const [showCart, setShowCart] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const userState = useSelector((state) => state.user);
  const { user } = userState;

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getOrders(user.id));
  });

  const logoutHandler = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  return (
    <>
      <Sidebar
        showCart={() => setShowCart(true)}
        showOrders={() => setShowOrder(true)}
        showProfile={() => setShowProfile(true)}
      />
      <div className="dashboard">
        <div className="dashboard__header">
          <div>
            <h2>Good morning, {user && user.username}</h2>
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
        <CartCanvas show={showCart} hide={() => setShowCart(false)} />
        <OrderCanvas show={showOrder} hide={() => setShowOrder(false)} />
        <ProfileCanvas show={showProfile} hide={() => setShowProfile(false)} />
      </div>
    </>
  );
};

export default Dashboard;
