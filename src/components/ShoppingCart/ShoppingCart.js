import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addToCart, clearCart, delFromCart } from "../Actions/ShoppingAcctions";
import Card from 'react-bootstrap/Card';

import './ShoppingCart.css'
 
const ShoppingCart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { products, cart } = state.shopping;
  return (
<>
      <div className='cart' > 
      <article className='box' >
      <h3 className='texto'>Carrito</h3>
{/*       {context.cart.length <= 0 && <p>No hay elementos agregados</p>} */}
            {cart.map((item, index) => {
              return (
                <Card  key={index}
                data={item}
                addToCart={() => dispatch(addToCart(item.id))}
                style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Img className='imgn' variant="top" src={item.image} />
                  <Card.Text>Cantidad :{item.quantity}</Card.Text>
                  <Card.Text>Precio: ${item.price} x {item.quantity} = ${item.price * item.quantity}</Card.Text>
                 {/*  <button onClick={dispatch(delFromCart(product.id, true))}>Eliminar</button> */}
                  </Card.Body>
                  </Card> 
                  
              );
            })}
              </article>
            {/*   <article>
              <button onClick={() => dispatch(clearCart())}>Limpiar Carrito</button>
        {cart.map((item, index) => (
          <CartItem
            key={index}
            data={item}
            delOneFromCart={() => dispatch(delFromCart(item.id))}
            delAllFromCart={() => dispatch(delFromCart(item.id, true))}/>))}
            </article> */}
            {/*   <button onClick={() => dispatch(clearCart())}>Limpiar Carrito</button> */}
                  </div>
                  </>         
              );
            }
            
export default ShoppingCart

 
