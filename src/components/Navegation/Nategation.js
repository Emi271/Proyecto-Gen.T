import React from 'react'
import './Navegation.css'
import { Link, Outlet } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
/* IMPORTACIONES DE IMAGENES */
import img from '../assets/imgs/carrito.png'
import img2 from '../assets/imgs/usuario.png'
import img3 from '../assets/imgs/corazon.png'


function Navegation () {
  return (
    <>
      <Navbar bg="light" expand="lg"  >
        <Container>
          <Navbar.Brand href="/">Emi're</Navbar.Brand>
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
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="/Maquillaje">Maquillaje</Nav.Link>
        <Nav.Link href="/Accesorios">Accesorios</Nav.Link>
        <Nav.Link href="/Capilar">Capilar</Nav.Link>
        <NavDropdown title="Fragancias" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/productos">Fragancias Femeninas</NavDropdown.Item>
              <NavDropdown.Item href="/FraganciasHombres">Fragancias Masculinas</NavDropdown.Item>
            </NavDropdown>
        </Nav> 
          <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder=""
                    className="me-2"
                    aria-label="Search"/>
    <Button variant="dark">Search</Button>
                </Form>
                </Navbar.Collapse>
        </Container>
    </Navbar>
       </>
 )
}
 
export default Navegation
