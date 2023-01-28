import React, { useState, useEffect } from 'react'
import { addToCart } from '../Actions/ShoppingAcctions';
import { useDispatch, useSelector } from 'react-redux';
import './PerfumeHombre.css'
import ProductDetalle from '../Item/Item';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ShopContext from '../Context/ShopContext'
import {Link} from "react-router-dom";
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { data } from '../assets/db/data';

function CardPerfHombre() {
  const [products, setProducts, categoria] = useState([])
    
   useEffect(() => {
     setProducts(data);
   }, []); 
  
   // function addToCart(id) {
   //   dispatch({ type: TYPES.ADD_TO_CART, payload: id })
   //   console.log(state)
   // }
  
 
 
   const perfumehombre = data.filter(x => x.categoria ==='perfumehombre')
   console.log(perfumehombre);
   const dispatch = useDispatch();
   const state = useSelector((state) => state);
   const { cart } = state.shopping;
 return (
     <>
       <ShopContext.Consumer>
         {context => (
           <>
             <h3>Fragancias de hombres</h3>
             <br></br>
             <div>Filtros de búsqueda</div>
 
             <div className='grid'>
            
               {context.products.filter(x => x.categoria ==='perfumehombre').map((p) => {
                 return (<Card 
                   style={{ width: '18rem' }}>
                       <article key={p.id} >
                     <Link to={'/item/${p.id}'}>
                     <Card.Img className='imgn' variant="top" src={p.image} />
                     </Link>
                     <Card.Body>
                       <Card.Title className='text-truncate'>{p.name}</Card.Title>
                       <CardHeader>{p.marca}</CardHeader>
                       <Card.Text>
                         {p.price}
                       </Card.Text>
                       <Button onClick={() =>  dispatch(addToCart(p.id))} variant="primary"><p>Comprar</p></Button>
                     </Card.Body>
                     </article>
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
  
export default CardPerfHombre