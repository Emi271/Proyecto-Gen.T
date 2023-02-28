import { createStore } from "redux";
import reducer from "../components/Reducers/Index"


const store = createStore(reducer);

/* store.subscribe(() => console.log(store)); */

export default store;
