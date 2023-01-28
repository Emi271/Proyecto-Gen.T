import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { data }  from '../assets/db/data'
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';


function ProductDetalle  ({ product })  {
 const [products, setProducts, categoria] = useState([])
   
  useEffect(() => {
    setProducts(data);
  }, []); 
  
/*  
let { productID } = useParams()
let product = data.find(product => product.id === productID)  */
/* const id = this.props.match.params.id;
     const data = data.find(p=> p.id === id)  */
  /*   const product =productDetail[0];  */

const {productId} = useParams();
const thisProduct = data.find((product) => product.id === Number(productId) )
const dispatch = useDispatch();
const state = useSelector((state) => state);
const { cart } = state.shopping;
console.log(productId);
return (

<div>
 
    <Card style={{ width: '18rem' }}>
 <Card.Img className='imgn' variant="top" src={thisProduct.image} />
<Card.Body>
<Card.Title className='text-truncate'>{thisProduct.name}</Card.Title>
 <CardHeader>{thisProduct.marca}</CardHeader>
<Card.Text> {thisProduct.price}</Card.Text>
</Card.Body>
</Card>
</div>

    
)}

export default ProductDetalle
