import React, { useState, useReducer } from "react";
import ShopContext from "./ShopContext";
import { shoppingReducer, ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART } from "../Reducers/ShoppingReducer";
import { data } from "../assets/db/data";

function GlobalState(props) {
 /*  const products = [
  ];
 */
  const [products, setProductos] = useState(data);
  // const [cart, setCart] = useState([]);

  const [cartState, dispatch] = useReducer(shoppingReducer, { cart: [] });

  const addProductToCart = product => {
    dispatch({ type: ADD_TO_CART, product: product });
  };

  const removeProductFromCart = productId => {
    dispatch({ type: REMOVE_ONE_FROM_CART, productId: productId });
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