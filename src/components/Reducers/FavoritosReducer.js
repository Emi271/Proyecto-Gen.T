import { data } from "../assets/db/data";
import {
  ADD_TO_FAVORITES,
  CLEAR_FAVORITES,
  REMOVE_ALL_FROM_FAVORITES,
  REMOVE_ONE_FROM_FAVORITES,
} from "../Types/Index"

export const initialState = {
  products: data,
  favs: [],
};  

export function favoritosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITES: {
      const newItem = state.products.find(
        (product) => product.id === action.payload
      );
      
      let itemInFavorites = state.favs.find((item) => item.id === newItem.id);
      
      return itemInFavorites
        ? {
            ...state,
            favs: state.favs.map((item) =>
            item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : {...item}
        ),        
          }
        : {
            ...state,
            favs: [...state.favs, { ...newItem, quantity: 1 }],
          };
    }
    case REMOVE_ONE_FROM_FAVORITES: {
      let itemToDelete = state.favs.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            favs: state.favs.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            favs: state.favs.filter((item) => item.id !== action.payload),
          };
    }
    case REMOVE_ALL_FROM_FAVORITES: {
      return {
        ...state,
        favs: state.favs.filter((item) => item.id !== action.payload),
      };
    }
    case CLEAR_FAVORITES:
      return initialState;
    default:
      return state;
  }
}
