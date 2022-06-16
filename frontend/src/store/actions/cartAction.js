import * as actionTypes from "../constants/cartConstants";

// @desc ADD TO CART ACTION
export const addToCart = (product, quantity) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: product.id,
      name: product.name,
      price: product.price,
      subPrice: product.price * quantity,
      quantity,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
  localStorage.setItem("total", JSON.stringify(getState().cart.totalPrice));
};

// @desc EDIT CART ACTION

export const editCart = (Item, flag) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.EDIT_CART,
    payload: {
      Item,
      flag,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
  localStorage.setItem("total", JSON.stringify(getState().cart.totalPrice));
};

// @desc RESET CART ACTION

export const resetCart = () => async (dispatch) => {
  dispatch({ type: actionTypes.RESET_CART });
  localStorage.removeItem("cart");
  localStorage.removeItem("total");
};
