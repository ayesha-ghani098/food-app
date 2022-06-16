import React from "react";

// Style and Assets
import "./style.css";

// Styled Components
import Offcanvas from "react-bootstrap/Offcanvas";

// Components
import BasicHeading from "../Heading/Heading";
import OrderList from "../List/OrderList";

const OrderCanvas = (props) => {
  return (
    <Offcanvas
      id="canvaslarge"
      show={props.show}
      onHide={props.hide}
      placement="end"
    >
      <BasicHeading heading="Your Orders" />
      <OrderList/>
    </Offcanvas>
  );
};

export default OrderCanvas;
