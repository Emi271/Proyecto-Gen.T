import React from 'react'
import './Navegation.css'
import { Link, Outlet } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
/* IMPORTACIONES DE IMAGENES */
import img from '../assets/imgs/carrito.png'
import img2 from '../assets/imgs/usuario.png'
import img3 from '../assets/imgs/corazon.png'


function Navegation () {
  return (
    <>
    {/* <nav className='nav-conteiner'> */}
      <Navbar expand="lg"  >
        <Container  className='nav-conteiner'>
          
          
         {/* ESTOS SON LOS ÍCONOS */}
          <ul className='nav-items'>
            <Nav.Link><li> <Link to="/shoppingCard">
            <img src={img} alt={"logo"} className="cart-img" />
          </Link></li></Nav.Link>
          <li> <Link to="/contacto">
            <img src={img2} alt={"logo"} className="cart-img2" />
          </Link></li>
          <li> <Link to="/Mis Favoritos">
            <img src={img3} alt={"logo"} className="me-gusta" />
            </Link>
             </li>
             </ul>
          <Navbar.Brand href="/">Emi're</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <div className='nav-item'>
        <Nav.Link href='/productos'>Productos</Nav.Link>
       
        </div>
        </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
       </>
 )
}
 
export default Navegation
