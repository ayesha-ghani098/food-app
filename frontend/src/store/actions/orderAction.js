import * as actionTypes from "../constants/orderConstants";
import axios from "axios";

export const createOrder = () => async (dispatch) => {
  dispatch({ type: actionTypes.ADD_ORDER_REQUEST });
  try {
    const res = await axios.get(
      "http://localhost:8080/api/order/createOrder"
    );
    dispatch({ type: actionTypes.ADD_ORDER_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: actionTypes.ADD_ORDER_FAILURE, payload: err });
  }
};