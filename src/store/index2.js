import { createStore } from "redux";
import { FavoritosReducer } from "../components/Reducers/FavoritosReducer";

const store2 = createStore(FavoritosReducer);

store2.subscribe(() => console.log(store2));

export default store2;
