import React, { useState } from "react";

import temporary from '../../assets/menu1.png';

// Style and Assets
import "./style.css";

// Components
import ProductCanvas from "../Canvas/Product";

const ProductCard = (props) => {
  const { name, description, image, price } = props.product;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="product__Card">
      <div className="product__Top">
        <div>
          <img src={temporary} alt="Menu Item" />
        </div>
        <h2>{name}</h2>
        <p>{description} {description} {description}</p>
      </div>
      <div className="product__Bottom">
        <span>Rs: {price}</span>
        <button onClick={handleShow}>Add to Cart</button>
      </div>
      <ProductCanvas {...props} show={show} hide={handleClose} />
    </div>
  );
};

export default ProductCard;
