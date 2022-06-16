import * as actionTypes from "../constants/userConstants";

const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") ): {};

export const userReducer = (

  state = { message: "", Loading: false, loading: false, user: user },
  action
) => {
  switch (action.type) {
    case actionTypes.USER_REGISTER_REQUEST:
      return {
        Loading: true,
      };
    case actionTypes.USER_REGISTER_SUCCESS:
      return {
        message: action.payload,
        Loading: false,
      };
    case actionTypes.USER_REGISTER_FAILURE:
      return {
        ERROR: action.payload,
        Loading: false,
      };
    case actionTypes.USER_lOGIN_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        user: action.payload,
        loading: false,
      };
    case actionTypes.USER_LOGIN_FAILURE:
      return {
        ERROR: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
