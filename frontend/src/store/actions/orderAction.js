import * as actionTypes from "../constants/orderConstants";
import axios from "axios";

// @desc CREATE ORDER ACTION
export const createOrder = (order) => async (dispatch) => {
  dispatch({ type: actionTypes.ADD_ORDER_REQUEST });
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.post(
      "http://localhost:8080/api/order/createOrder",
      { order },
      config
    );

    dispatch({ type: actionTypes.ADD_ORDER_SUCCESS, payload: data.data });
  } catch (err) {
    dispatch({ type: actionTypes.ADD_ORDER_FAILURE, payload: err });
  }
};

// @desc GET ORDERS ACTION
export const getOrders = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.GET_ORDERS_REQUEST });
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.get(
      `http://localhost:8080/api/order/getOrdersById/${id}`,
      config
    );
    dispatch({ type: actionTypes.GET_ORDERS_SUCCESS, payload: data.data });
  } catch (err) {
    dispatch({ type: actionTypes.GET_ORDERS_FAILURE, payload: err });
  }
};

// @desc RESET ORDER ACTION
export const resetOrder = () => async (dispatch) => {
  dispatch({ type: actionTypes.ORDER_RESET });
};
