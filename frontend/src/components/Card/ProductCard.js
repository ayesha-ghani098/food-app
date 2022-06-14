import React, { useState } from "react";
import ProductModal from "../Modal/ProductModal";

const ProductCard = (props) => {
  const { name, description, image, price } = props.product;
  const [show, setShow] = useState(false);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <div>
      <div>
        <div>
          <img src={image} alt="Menu Item" />
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div>
        <span>Rs: {price}</span>
        <button onClick={handleShow}>Add to Cart</button>
      </div>
      <ProductModal {...props} show={show} hide={handleClose} />
    </div>
  );
};

export default ProductCard;
