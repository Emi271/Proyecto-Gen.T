import React from 'react'
import { useState } from 'react'



function Products() {
 const [productos, setproductos] =  useState( [
  { id: 1, name: "Producto1", price: 100 },
  { id: 2, name: "Producto2", price: 500 } ])

  console.log(productos)

  return (
    <>
    <div>Products</div>
    <div>
         
    </div>

    </>
  )
}

export default Products