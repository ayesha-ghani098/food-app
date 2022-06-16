import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

// Reducers
import { productReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import { orderReducer } from "./reducers/orderReducer";
import { userReducer } from "./reducers/userReducer";


const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
  order: orderReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
