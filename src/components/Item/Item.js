import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {data} from '../assets/db/data'
import Card from 'react-bootstrap/Card';


function Item(){
    const { id } = useParams();
    const [product, setProduct] = useState();
 
    console.log(product.id)
     useEffect(()=> {
        getProductById(id);
    }, [])
 
    function getProductById (id){
        const item = data.find(x => x.id == id)
        if(item != null){setProduct(item)}
    } 
   
    return (
        <>
        { product.id ?  ( 
        
        
        <div>
           {/*  <Card key={cartItem.id}
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
                  </Card> */}
            <h2>Detalles</h2>
        <p>{product.name}</p>
        </div>
        ):
        (
            <div>Estoy Cargando</div>
        )
        }
        </>
    )
}
export default Item
