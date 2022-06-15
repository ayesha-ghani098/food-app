import * as actionTypes from "../constants/cartConstants";

export const addToCart = (product, quantity) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: product.id,
      name: product.name,
      price: product.price,
      subPrice:product.price * quantity,
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

export const editCart = (id,flag) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.EDIT_CART,
    payload: id,
    flag
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
