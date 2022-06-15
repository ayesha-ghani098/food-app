import * as actionTypes from "../constants/orderConstants";

export const orderReducer = (state = { message: "" }, action) => {
  switch (action.type) {
    case actionTypes.ADD_ORDER_REQUEST:
      return {
        message: "Creating order...",
      };
    case actionTypes.ADD_ORDER_SUCCESS:
      return {
        message: action.payload,
      };
    case actionTypes.ADD_ORDER_FAILURE:
      return {
        ERROR: action.payload,
      };
    default:
      return state;
  }
};
