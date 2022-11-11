import React from 'react'
import './Navegation.css'
import { Link } from "react-router-dom";
import img from '../assets/imgs/carrito.png'
import img2 from '../assets/imgs/usuario.png'

function Navegation() {
  return (
    <>
      <nav className='nav-conteiner'>
 
        <h1 className='nav-logo'>Emi're</h1>
        <ul className='nav-items'>
          <li className='nav-item'><Link to="/">Home</Link></li>
          <li className='nav-item'><Link to="/productos">Productos</Link></li>
          {/* <li className='nav-item'><Link to="/contacto">Contacto</Link></li> */}
          <li> <Link to="/shoppingCard">
            <img src={img} alt={"logo"} className="cart-img" />
          </Link></li>
          <li> <Link to="/contacto">
            <img src={img2} alt={"logo"} className="cart-img2" />
          </Link></li>
        </ul>
 
      </nav>
    </>
  )
}
 
export default Navegation
