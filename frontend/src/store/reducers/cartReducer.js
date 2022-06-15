import * as actionTypes from "../constants/cartConstants";

export const cartReducer = (
  state = { cartItems: [], totalPrice: 0 },
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      let product = action.payload;

      let existItem = state.cartItems.find((x) => x.id === product.id);

      if (existItem !== undefined) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + parseInt(product.quantity),
                  subPrice: item.subPrice + product.subPrice,
                }
              : item
          ),
          totalPrice: state.totalPrice + product.subPrice,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, product],
          totalPrice: state.totalPrice + product.subPrice,
        };
      }

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload.id),
      };
    case actionTypes.EDIT_CART:
      const { payload, flag } = action; 
      const updatedCart = state.cartItems.map((cartItem) => {
        if (cartItem.id !== payload) {
          cartItem.quantity = flag
            ? cartItem.quantity + 1
            : cartItem.quantity - 1; 
        }
        return cartItem;
      });
      return updatedCart;

    default:
      return state;
  }
};
