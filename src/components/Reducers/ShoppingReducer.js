import { data } from "../assets/db/data";
import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from "../Types/Index"

 export const initialState = {
  products: data,
  cart: [],
};  

export function shoppingReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {

      let newItem = data.find((x) => x.id === action.product.id);
      //console.log(newItem);

      let itemInCart = state.cart.find((x) => x.id === action.product.id);

      return itemInCart ? {
            ...state,
            cart: state.cart.map((item) => item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.find((x) => x.id === action.productId);

      return itemToDelete.quantity > 1 ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.productId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((x) => x.id !== action.payload),
          };
    }
    case REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((x) => x.id !== action.payload),
      };
    }
    case CLEAR_CART:
      return initialState;
    default:
      return state;
  }
}
