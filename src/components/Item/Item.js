import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {data} from '../assets/db/data'
 
function Item(){
    const { id } = useParams();
    const [produc, setProduct] = useState();
 
    useEffect(()=> {
        getProductById(id);
    }, [])
 
    function getProductById (id){
        const item = data.find(x => x.id == id)
        if(item != null){setProduct(item)}
    }
    return (
        <>
        {produc ? ( <div><h2>Detalles</h2>
        <p>{produc.name}</p>
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
