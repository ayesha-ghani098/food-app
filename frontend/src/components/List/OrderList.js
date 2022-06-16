import React from "react";
import { useSelector } from "react-redux";

// Style and Assets
import './style.css'


// Components
import OrderCard from "../Card/OrderCard";


const OrderList= () => {
  const orderState = useSelector((state) => state.order);
  const { loading, orders, error } = orderState;

  return (
    <div id="scroll" className="order__List">
      {loading ? (
        <h3>loading.....</h3>
      ) : error ? (
        <h1>Error while fetching</h1>
      ) : orders ? (
        orders.map((order, index) => {
          return <OrderCard key={order.orderId} order={order} />;
        })
      ) : (
        <h1>No Orders Exist</h1>
      )}
    </div>
  );
};

export default OrderList;
