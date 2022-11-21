import React from 'react'
import { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import ShopContext from '../Context/ShopContext'
import './ShoppingCart.css'
 
function ShoppingCart() {
  const context = useContext(ShopContext);
  console.log(context);
  return (
<>
      <div className='cart' > 
      <article className='box'>
      <h3 className='texto'>Carrito</h3>
            {context.cart.map((p) => {
              return (
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>{p.newItem.name}</Card.Title>
                <Card.Img className='imgn' variant="top" src={p.newItem.image} />
                  <Card.Text>Cantidad : {p.quantity}</Card.Text>
                  <Card.Text>Precio: {p.newItem.price}</Card.Text>
                  <button onClick={() => context.removeProductFromCart(p.newItem.id)}>Eliminar</button>
                  </Card.Body>
                  </Card>
              );
            })}
              </article>
                  </div>
                  </>
              
              );
            }
            

         
           
          
    
        
      
 

export default ShoppingCart
 
