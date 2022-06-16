import React, { useState } from "react";

// Styled Components
import Offcanvas from "react-bootstrap/Offcanvas";

// Components
import Button from "../Button/Button";
import BasicHeading from "../Heading/Heading";

const CheckoutCanvas = (props) => {
  return (
    <Offcanvas
      id="canvasmedium"
      show={props.show}
      onHide={props.hide}
      placement="end"
    >
      <BasicHeading heading="Checkout" />

      <form>
        <Button type="submit" label="Make Payment" />
      </form>
    </Offcanvas>
  );
};

export default CheckoutCanvas;
