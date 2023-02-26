import { createStore } from "redux";
import { FavoritosReducer } from "../components/Reducers/Index2";

const store2 = createStore(FavoritosReducer);

store2.subscribe(() => console.log(store2));

export default store2;
