import { combineReducers } from "redux";
import { shoppingReducer } from "./ShoppingReducer";


const reducer = combineReducers({
  shopping: shoppingReducer,
});

export default reducer;
