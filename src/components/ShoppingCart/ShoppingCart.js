import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addToCart, clearCart, delFromCart } from "../Actions/ShoppingAcctions";
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import './ShoppingCart.css'

const ShoppingCart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { products, cart } = state.shopping;


  return (
<>
      <div className='cart' > 
      <article className='box' >
        <Alert>
        <Alert.Heading variant='success' >Envíos Gratis a partir de $4.000</Alert.Heading>
        </Alert>
      <h3 className='texto'>Carrito</h3>
{/*       {context.cart.length <= 0 && <p>No hay elementos agregados</p>} */}
<div className='carrito'>
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
                  <Card.Text>Precio: ${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</Card.Text>
                  <Button onClick={() => dispatch(delFromCart())}>Eliminar</Button>
                  </Card.Body>
                  </Card> 
                  
              );
            })}
            </div>
              </article>
              <Button onClick={() => dispatch(clearCart())}>Limpiar Carrito</Button>
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

 
