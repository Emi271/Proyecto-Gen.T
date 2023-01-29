import {
    ADD_TO_FAVORITES,
    REMOVE_ALL_FROM_FAVORITES,
    REMOVE_ONE_FROM_FAVORITES,
    CLEAR_FAVORITES
  } from "../Types/Index";
  
  export const addToFavorites = (id) => ({ type: ADD_TO_FAVORITES, favload: id });
  
  export const delFromFavorites = (id, all = false) =>
    all
    ? { type: REMOVE_ALL_FROM_FAVORITES, favload: id }
    : { type: REMOVE_ONE_FROM_FAVORITES, favload: id };

  
  export const ClearFavorites = () => ({ type: CLEAR_FAVORITES });
  