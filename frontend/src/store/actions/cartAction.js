import * as actionTypes from "../constants/cartConstants";

export const addToCart = (product, quantity) => async (dispatch, getState) => {
  console.log("sub milrha",product)
  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
