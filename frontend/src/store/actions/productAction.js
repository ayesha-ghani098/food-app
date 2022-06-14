import * as actionTypes from "../constants/productConstants";
import axios from "axios";

export const getAllProducts = () => async (dispatch) => {
  dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });
  try {
    const res = await axios.get(
      "http://localhost:8080/api/products/getAllProducts"
    );
    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: actionTypes.GET_PRODUCTS_FAILURE, payload: err });
  }
};
