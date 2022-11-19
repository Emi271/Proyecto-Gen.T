import React from 'react'
import './Navegation.css'
import { Link, Outlet } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
/* IMPORTACIONES DE IMAGENES */
import img from '../assets/imgs/carrito.png'
import img2 from '../assets/imgs/usuario.png'
import img3 from '../assets/imgs/corazon.png'


function Navegation () {
  return (
    <>
    <nav className='nav-conteiner'>
        <ul className='nav-items'>
        <NavDropdown  className='nav-dropdown' id="basic-nav-dropdown">
              <NavDropdown.Item to="/">Fragancias</NavDropdown.Item>
              <NavDropdown.Item to="/">Accesorios</NavDropdown.Item>
              <NavDropdown.Item to="/">Eventos</NavDropdown.Item>
              <NavDropdown.Item to="/">Maquillaje</NavDropdown.Item>
              <NavDropdown.Item to="/">Capilar</NavDropdown.Item>
              </NavDropdown>

        <a className='inicio'><Link to="/">Emi're</Link></a>
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
             </ul>
             {/* <li> <Link to="Buscador">
            <img src={img4} alt={"logo"} className="buscador" />
            </Link>
             </li> */}
             <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </nav>
       </>
 )
}
 
export default Navegation
