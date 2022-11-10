import React from 'react'
import { useState, useReducer } from 'react'
import { shoppingcartInitialState, shoppingreducer } from '../Reducers/ShoppingReducer'
import './Card.css'
import { TYPES } from '../Actions/ShoppingActions'
import { data } from '../assets/db/data'
import { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ShopContext from '../Context/ShopContext'

function CardProduct() {


  const [productos, setproductos] = useState([])

  useEffect(() => {
    setproductos(data);
  }, []);

  // function addToCart(id) {
  //   dispatch({ type: TYPES.ADD_TO_CART, payload: id })
  //   console.log(state)
  // }

  return (
    <>
      <ShopContext.Consumer>
        {context => (
          <React.Fragment>
            <div>Products</div>

            <div className='conteiner'>
              {context.products.map((p) => {
                return (

                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={p.image} />
                    <Card.Body>
                      <Card.Title>{p.name}</Card.Title>
                      <Card.Text>
                        {p.price}
                      </Card.Text>
                      <Button onClick={() => context.addProductToCart(p)} variant="primary">AÑADIR AL CARRITO</Button>
                    </Card.Body>
                  </Card>


                )
              })
              }
            </div>
          </React.Fragment>
        )}
      </ShopContext.Consumer>
    </>
  )
}

export default CardProduct