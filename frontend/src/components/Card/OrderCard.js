import React from "react";

// Components
import Button from "../Button/Button";

const OrderCard = (props) => {
  const { orderId, date, key } = props.order;
  return (
    <div className="order">
      <div key={key} className="order__Card">
        <div>
          <h5>Order Id</h5>
          <p>{orderId}</p>
        </div>
        <div className="order__Date">
          Date:
          <p> {new Date(date).toISOString().split("T")[0]}</p>
        </div>
      </div>
      <Button label="Order Details (under construction)" />
    </div>
  );
};

export default OrderCard;
