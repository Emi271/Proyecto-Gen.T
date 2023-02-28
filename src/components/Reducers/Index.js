import { combineReducers } from "redux";
import { shoppingReducer } from "./ShoppingReducer";
import { favoritosReducer } from "./FavoritosReducer";


const reducer = combineReducers({
  shopping: shoppingReducer,
  favs: favoritosReducer,
});

export default reducer;
