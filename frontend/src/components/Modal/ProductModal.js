import React, { useState} from "react";
import { useDispatch } from "react-redux";
import Offcanvas from "react-bootstrap/Offcanvas";

// Actions
import { addToCart } from "../../store/actions/cartAction";

const ProductModal = (props) => {
  const [quantity, setQuantity] = useState(1);
  const { name, description, price, image } = props.product;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(props.product, quantity));
    console.log("added item");
  };
  return (
    <Offcanvas show={props.show} onHide={props.hide} placement="end" {...props}>
      <div>
        <h1>{name}</h1>
        <img src={image} alt="ProductImage" />
        <p>{description}</p>
        <div>
          <span>{price}</span>
        </div>
        <div>
          <input
            value={quantity}
            type="number"
            placeholder="Quantity"
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </div>
    </Offcanvas>
  );
};

export default ProductModal;
