import * as actionTypes from "../constants/cartConstants";

const cartItems = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const totalPrice = localStorage.getItem("total")
  ? JSON.parse(localStorage.getItem("total"))
  : 0;

export const cartReducer = (
  state = { cartItems: cartItems, totalPrice: totalPrice },
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
                  quantity:
                    parseInt(item.quantity) + parseInt(product.quantity),
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
      const id = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== id),
      };
    case actionTypes.EDIT_CART: {
      const { Item, flag } = action.payload;

      if (Item.quantity === 1 && flag === false) {
        return {
          ...state,
          cartItems: state.cartItems.filter((x) => x.id !== Item.id),
          totalPrice: state.totalPrice - Item.price,
        };
      } else
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === Item.id
              ? {
                  ...item,
                  quantity: flag
                    ? parseInt(item.quantity) + 1
                    : parseInt(item.quantity) - 1,
                  subPrice: flag
                    ? item.subPrice + Item.price
                    : item.subPrice - Item.price,
                }
              : item
          ),
          totalPrice: flag
            ? state.totalPrice + Item.price
            : state.totalPrice - Item.price,
        };
    }
    case actionTypes.RESET_CART:
      return {
        ...state,
        cartItems: [],
        totalPrice: 0,
      };
    default:
      return state;
  }
};
