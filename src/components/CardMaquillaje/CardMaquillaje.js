import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ShopContext from '../Context/ShopContext'
import {Link} from "react-router-dom";
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { data } from '../assets/db/data';

function CardMaquillaje() {
  const [products, setProducts, categoria] = useState([])
    
   useEffect(() => {
     setProducts(data);
   }, []); 
  
   // function addToCart(id) {
   //   dispatch({ type: TYPES.ADD_TO_CART, payload: id })
   //   console.log(state)
   // }
  
 
 
   const maquillaje = data.filter(x => x.categoria ==='maquillaje')
   console.log(maquillaje);
 return (
     <>
       <ShopContext.Consumer>
         {context => (
           <>
             <h3>Productos de maquillaje</h3>
             <br></br>
             <div>Filtros de búsqueda</div>
 
             <div className='grid'>
            
               {context.products.filter(x => x.categoria ==='maquillaje').map((p) => {
                 return (<Card 
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
  
export default CardMaquillaje