import React from 'react'
import './Card.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ShopContext from '../Context/ShopContext'
import {Link} from "react-router-dom";
import CardHeader from 'react-bootstrap/esm/CardHeader';

 
function CardProduct() {
 //  const [productos, setproductos] = useState([])
/*
  useEffect(() => {
    setproductos(data);
  }, []); */
 
  // function addToCart(id) {
  //   dispatch({ type: TYPES.ADD_TO_CART, payload: id })
  //   console.log(state)
  // }
 
  return (
    <>
      <ShopContext.Consumer>
        {context => (
          <>
            <div>Nuestros Productos</div>
            <br></br>
            <div>Filtros de búsqueda</div>
 
            <div className='grid'>
              {context.products.map((p) => {
                return (
 
                  <Card 
                  style={{ width: '18rem' }}>
                    <Link to={'/item/${p.id}'}>
                    <Card.Img className='imgn' variant="top" src={p.image} />
                    </Link>
                    <Card.Body>
                      <Card.Title className='tittle'>{p.name}</Card.Title>
                      <CardHeader>{p.marca}</CardHeader>
                      <Card.Text>
                        {p.price}
                      </Card.Text>
                      <Button onClick={() => context.addProductToCart(p)} variant="primary"><p>Comprar</p></Button>
                    </Card.Body>
                  </Card>
                 
                
 
                )
              })
              }
            </div>
         
          </>
        )}
      </ShopContext.Consumer>
    </>
  )
}
 
export default CardProduct
