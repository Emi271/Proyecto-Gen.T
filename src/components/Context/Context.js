import React, { useState, useReducer } from "react";
import ShopContext from "./ShopContext";
import { shoppingreducer } from '../Reducers/ShoppingReducer'
import { data } from '../assets/db/data'
import { TYPES } from '../Actions/ShoppingAcctions'

function GlobalState(props) {
  const [products, setProductos] = useState(data);


  const [cartState, dispatch] = useReducer(shoppingreducer, { cart: [] });

  function addProductToCart (product) {
    dispatch({ type: TYPES.ADD_TO_CART, product: product });
  };

  function removeProductFromCart (productId) {
    dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, productId: productId });
  };

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}

export default GlobalState;
