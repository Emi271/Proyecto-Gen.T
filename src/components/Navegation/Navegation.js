import React from 'react'
import './Navegation.css'
import { Link } from "react-router-dom";
/* import { NavBar } from 'react-bootstrap'; */


function NavBar() {

  return (
    <>
      <nav className='nav-conteiner'>

        <h1 className='nav-logo'>Logo</h1>
        <ul className='nav-items'>
          <li className='nav-item'><Link to="/">Home</Link></li>
          <li className='nav-item'><Link to="/productos">Productos</Link></li>
          <li className='nav-item'><Link to="/contacto">Contacto</Link></li>
          <li> <Link to="/shoppingCard">
       {/*      <img src={img} alt={"logo"} className="cart-img" /> */}
          </Link></li>
        </ul>

      </nav>
    </>
  )
}

export default NavBar