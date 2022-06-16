import * as actionTypes from "../constants/orderConstants";

export const orderReducer = (
  state = { message: "", orders: [], loading: true,success:false },
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_ORDER_REQUEST:
      return {
        message: "Creating order...",
      };
    case actionTypes.ADD_ORDER_SUCCESS:
      return {
        message: action.payload,
        success:true
      };
    case actionTypes.ADD_ORDER_FAILURE:
      return {
        ERROR: action.payload,
      };
    case actionTypes.ORDER_RESET:
      return {
        message: "",
      };
    case actionTypes.GET_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_ORDERS_SUCCESS:
      return {
        orders: action.payload,
        loading: false,
      };
    case actionTypes.GET_ORDERS_FAILURE:
      return {
        ERROR: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
