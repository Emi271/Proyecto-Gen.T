import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import shampoo from '../../assets/imgs/Best-Shampoos.webp'
import Carousel from 'react-bootstrap/Carousel';
import './Capilar.css'

function Capilar () {

    return (
<>
<div className="fondo">
<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://d3cdlnm7te7ky2.cloudfront.net/media/weltpixel/owlcarouselslider/images/b/h/bh_loreal_pro_2.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://d3cdlnm7te7ky2.cloudfront.net/media/weltpixel/owlcarouselslider/images/2/_/2_bh_kerastase_6.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://d3cdlnm7te7ky2.cloudfront.net/media/weltpixel/owlcarouselslider/images/b/h/bh_alfaparf_desk_1.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

  <div className='grid'>
<Card   style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Shampoos</Card.Title>
        <img  src={shampoo} className="seccion"></img>
        <br></br><br></br>
        <Button variant="primary"><Link to="/Capilar" style={{ color: '#fff' }} className="loli">Ver productos</Link></Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Acondicionadores</Card.Title>
        <img  src="https://selmadigital.com/wp-content/uploads/2019/03/Eco-Hair-ShampooLocionAco.jpg" className="seccion2"></img>
        <br></br><br></br>
        <Button variant="primary"><Link to="/acondicionadores" style={{ color: '#fff' }} className="loli">Ver productos</Link></Button>
      </Card.Body>
    </Card>
    <br></br><br></br>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Mascarillas</Card.Title>
        <img  src="https://www.bellezapura.com/wp-content/uploads/2020/07/BODEGON-HAIR-FOOD-2019-coningredientes.png" className="seccion"></img>
        <br></br><br></br>
        <Button variant="primary"><Link to="/mascarasCapilar" style={{ color: '#fff' }} className="loli">Ver productos</Link></Button>
      </Card.Body>
    </Card>

    <br></br><br></br><br></br><br></br>
</div>
</div>

  
    
</>
    )}

    export default Capilar