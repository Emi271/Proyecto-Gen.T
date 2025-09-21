import './Navegation.css'
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
/* IMPORTACIONES DE IMAGENES */
import img from '../assets/imgs/carrito.png'
import img2 from '../assets/imgs/usuario.png'
import img3 from '../assets/imgs/corazon.png'

function Navegation () {
  return (
    <>
      <Navbar bg="light" expand="lg" >
        <Container  >
        <ul className='nav-items'>
<Link to="/"  className='lista'>Emi're</Link>
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
             </ul> 
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Link to="/Maquillaje"  className='links'>Maquillaje</Link>
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
