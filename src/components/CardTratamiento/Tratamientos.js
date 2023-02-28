import React, { useState, useEffect } from 'react'
import { addToCart } from '../Actions/ShoppingAcctions';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { data } from '../assets/db/data';

 
function CardTratamiento() {
  const [products, setProducts] = useState([])
  
 useEffect(() => {
   setProducts(data);
 }, []); 

 const tratamiento = data.filter(x => x.categoria ==='tratamiento')
 console.log(tratamiento);
 const dispatch = useDispatch();
 const state = useSelector((state) => state);



return (
         <> 
           <h3>Tratamiento de pelo</h3>
           <br></br>
           <div>Filtros de búsqueda</div>

           <div className='grid'>
          
             {products.filter(x => x.categoria ==='tratamiento').map((p) => {
               return (<Card 
                 style={{ width: '18rem' }}  className="tarjeta" >
                   <article key={p.id} >
                   <Link to={`/item/${p.id}`}>
                   <Card.Img className='imgn' variant="top" src={p.image} />
                   </Link>
                   <Card.Body>
                     <Card.Title className='text-truncate'>{p.name}</Card.Title>
                     <CardHeader>{p.marca}</CardHeader>
                     <Card.Text>
                       {p.price}
                     </Card.Text>
                   <Button onClick={() => dispatch(addToCart(p.id))} variant="primary">Comprar</Button> 
                   </Card.Body>
                   </article>
                 </Card>
                 ) 
             })
             }
           </div>
         </>)}
 
export default CardTratamiento
