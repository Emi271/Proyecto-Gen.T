import React from 'react'
import './Navegation.css'
import { Link, Outlet } from "react-router-dom";
import img from '../assets/imgs/carrito.png'
import img2 from '../assets/imgs/usuario.png'
import img3 from '../assets/imgs/corazon.png'


function Navegation () {
  return (
    <>
    <nav className='nav-conteiner'>
    
        <ul className='nav-items'>
        <a className='nav-logo'><Link to="/">Emi're</Link></a>
          <li className='nav-item'><Link to="/productos">Productos</Link></li>
          <li> <Link to="/shoppingCard">
            <img src={img} alt={"logo"} className="cart-img" />
          </Link></li>

          <li> <Link to="/contacto">
            <img src={img2} alt={"logo"} className="cart-img2" />
          </Link></li>
          <li> <Link to="/Mis Favoritos">
            <img src={img3} alt={"logo"} className="me-gusta" />
            </Link>
             </li>
             {/* <li> <Link to="Buscador">
            <img src={img4} alt={"logo"} className="buscador" />
            </Link>
             </li> */}
        </ul>
        </nav>
    </>
  )
}
 
export default Navegation
