import React from 'react'
import { useContext, useEffect  } from 'react'
import Card from 'react-bootstrap/Card';
import ShopContext from '../Context/ShopContext'
import './ShoppingCart.css'
 
function ShoppingCart(props) {
  const context = useContext(ShopContext);
  useEffect(() => {
    console.log(context);
  }, []);
  return (
<>
     {/*  <React.Fragment>
        <MainNavigation
          cartItemNumber={context.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
          }, 0)}
        />
        <main className="cart">
          {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
          <ul>
            {context.cart.map(cartItem => (
              <li key={cartItem.id}>
                <div>
                  <strong>{cartItem.title}</strong> - ${cartItem.price} (
                  {cartItem.quantity})
                </div>
                <div>
                  <button 
                  >
                    Remove from Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </React.Fragment>
    );
  }
  
 */}


      <div className='cart' > 
      <article className='box' >
      <h3 className='texto'>Carrito</h3>
      {context.cart.length <= 0 && <p>No hay elementos agregados</p>}
            {context.cart.map(cartItem => {
              return (
                <Card key={cartItem.id}
                style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>{cartItem.name}</Card.Title>
                <Card.Img className='imgn' variant="top" src={cartItem.image} />
                  <Card.Text>Cantidad :{cartItem.quantity}</Card.Text>
                  <Card.Text>Precio: ${cartItem.price}</Card.Text>
                  <button onClick={context.removeProductFromCart.bind(
                    this,
                    cartItem.id
                  )}>Eliminar</button>
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
 
