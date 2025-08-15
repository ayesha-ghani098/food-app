import * as actionTypes from "../constants/productConstants";
import axios from "axios";

// @desc GET PRODUCTS ACTION
export const getAllProducts = () => async (dispatch) => {
  dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });
  try {
    const { data } = await axios.get(
      "http://localhost:8080/api/products/getAllProducts"
    );
    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data.data });
  } catch (err) {
    dispatch({ type: actionTypes.GET_PRODUCTS_FAILURE, payload: err });
  }
};

// @desc ADD PRODUCT ACTION
export const addProduct =
  (name, description, price, selectedFile, inStock) => async (dispatch) => {
    dispatch({ type: actionTypes.ADD_PRODUCT_REQUEST });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/products/addProduct",
        { name, description, price, selectedFile, inStock },
        config
      );
      dispatch({ type: actionTypes.ADD_PRODUCT_SUCCESS, payload: data.data });
    } catch (err) {
      dispatch({ type: actionTypes.ADD_PRODUCT_FAILURE, payload: err });
    }
  };
