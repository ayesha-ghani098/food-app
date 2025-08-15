import * as actionTypes from "../constants/productConstants";

export const productReducer = (
  state = { products: [], loading: true },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        products: action.payload,
        loading: false,
      };
    case actionTypes.GET_PRODUCTS_FAILURE:
      return {
        ERROR: action.payload,
        loading: false,
      };
    case actionTypes.ADD_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.ADD_PRODUCT_SUCCESS:
      return {
        products: action.payload,
        loading: false,
      };
    case actionTypes.ADD_PRODUCT_FAILURE:
      return {
        ERROR: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
