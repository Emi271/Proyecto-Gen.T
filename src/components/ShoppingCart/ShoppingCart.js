import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addToCart, clearCart, delFromCart } from "../Actions/ShoppingAcctions";
import { useContext, useEffect  } from 'react'
import Card from 'react-bootstrap/Card';
import ShopContext from '../Context/ShopContext'
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
            {products.map((product) => {
              return (
                <Card key={product.id} data={product}
                addToCart={() => dispatch(addToCart(product.id))}
                style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Img className='imgn' variant="top" src={product.image} />
                  <Card.Text>Cantidad :{product.quantity}</Card.Text>
                  <Card.Text>Precio: ${product.price}</Card.Text>
                 {/*  <button onClick={dispatch(delFromCart(product.id, true))}>Eliminar</button> */}
                  </Card.Body>
                  </Card> 
              );
            })}
              </article>
            {/*   <button onClick={() => dispatch(clearCart())}>Limpiar Carrito</button> */}
                  </div>
                  </>         
              );
            }
            
export default ShoppingCart

 
