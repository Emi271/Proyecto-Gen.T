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
import img4 from '../assets/imgs/busca.png'

/* const selectionBoard = document.getElementById('selection-board');
const contentContainer = document.getElementById('content-container');

selectionBoard.addEventListener('click', (event) => {
  // Check if the clicked element is a selection on the board
  if (event.target.matches('.selection')) {
    // Get the content associated with the selection
    const content = event.target.dataset.content;
    // Update the content container with the new content
    contentContainer.innerHTML = content;
  }
});
 */
/* 
$('#dmenu').hover(function(){
	$('#navbarDropdown').trigger('click')
  //console.log('hover');
})
 */
function Navegation () {
  return (
    <>
      <Navbar bg="light" expand="lg" >
        <Container  >
        <ul className='nav-items'>
<Link to="/"  className='lista'>Emi're</Link>
    {/*       <Navbar.Brand href="/">Emi're</Navbar.Brand> */}
            <Nav.Link><li> <Link to="/shoppingCard">
            <img src={img} alt={"logo"} className="cart-img" />
          </Link></li></Nav.Link>
          <li> <Link to="/contacto">
            <img src={img2} alt={"logo"} className="cart-img2" />
          </Link></li>
          <li> <Link to="/MisFavoritos">
            <img src={img3} alt={"logo"} className="me-gusta" />
            </Link>
             </li>
             <li> <Link to="/Buscar">
            <img src={img4} alt={"logo"} className="me-gusta" />
            </Link>
             </li>
             </ul> 
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Link to="/Maquillaje"  className='links'>Maquillaje</Link>
        <Link to="/Accesorios"  className='links'>Accesorios</Link>
        <Link to="/prueba"  className='links'>Capilar</Link>
        <NavDropdown title="Fragancias" id="collasible-nav-dropdown">
        <Link to="/productos"  className='microlinks'  >Fragancias Femeninas</Link>
        <Link to="/FraganciasHombres"  className='microlinks'>Fragancias Masculinas</Link>
            </NavDropdown>
        </Nav> 
                </Navbar.Collapse>
        </Container>
    </Navbar>
       </>
 )
}
 
export default Navegation
