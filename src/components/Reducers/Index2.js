import { combineReducers } from "redux";
import { FavoritosReducer } from "./FavoritosReducer";


const reducer = combineReducers({
  favoritos: FavoritosReducer,
});

export default reducer;
