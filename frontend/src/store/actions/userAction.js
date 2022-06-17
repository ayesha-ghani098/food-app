import * as actionTypes from "../constants/userConstants";
import axios from "axios";

export const registerUser = (username, email, number, address, password , navigate) => async (dispatch) => {
  dispatch({ type: actionTypes.USER_REGISTER_REQUEST });
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.post(
      "http://localhost:8080/api/auth/register",
      { username, email, number, address, password },
      config
    );

    dispatch({ type: actionTypes.USER_REGISTER_SUCCESS, payload: data.data });
    navigate("/login", { replace: true });
  } catch (err) {
    dispatch({ type: actionTypes.USER_REGISTER_FAILURE, payload: err.response.data.errors});
  }
};

export const loginUser = (email, password, navigate) => async (dispatch) => {
  dispatch({ type: actionTypes.USER_lOGIN_REQUEST });
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  try {
    const {data} = await axios.post(
      "http://localhost:8080/api/auth/login",
      { email, password },
      config
    );
    localStorage.setItem("authToken", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    dispatch({ type: actionTypes.USER_LOGIN_SUCCESS, payload: data.user });
    navigate("/dashboard", { replace: true });
  } catch (err) {   
    console.log("yahan arhe errors",err.response.data.errors)
    dispatch({ type: actionTypes.USER_LOGIN_FAILURE, payload: err.response.data.errors});
  }
};
