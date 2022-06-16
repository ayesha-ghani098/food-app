import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Offcanvas from "react-bootstrap/Offcanvas";

// Style and Assets
import "./style.css";

import temporary from "../../assets/menu2.png";

// Actions
import { addToCart } from "../../store/actions/cartAction";

const ProductDetailCanvas = (props) => {
  const [quantity, setQuantity] = useState(1);
  const { name, description, price, image } = props.product;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(props.product, quantity));
    setQuantity(1);
    props.hide();
  };
  return (
    <Offcanvas
    id="canvasmedium"
      show={props.show}
      onHide={props.hide}
      placement="end"
      {...props}
    >
      <div className="product__Details">
    
      <div className="detail__imageContainer">
      <img src={temporary} alt="ProductImage" />
      </div>
        <h1>{name}</h1>
        <p>
          {description} Just have a single bite of this Black Forest pastry and
          it will all make a proper sense to you. The kick of cherry and rich
          chocolate of this super light, airy pastry will definitely make you
          feel "wow". The perfect combination of cherry cream and rich chocolate
          can provide the ultimate fulfillment to your dessert craving
        </p>
        <div className="detail__priceContainer">
          <span>Rs {price}</span>
        </div>
        <div className="detail__bottom">
        <div>
        Quantity
          <input
            value={quantity}
            type="number"
            placeholder="Quantity"
            onChange={(e) => setQuantity(e.target.value)}
          />
          </div>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </div>
    </Offcanvas>
  );
};

export default ProductDetailCanvas;
