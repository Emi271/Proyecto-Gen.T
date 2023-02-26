import React from "react";
import { Card, Button } from "react-bootstrap";
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
        <Button variant="primary" href="/Capilar" >Ver productos</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Acondicionadores</Card.Title>
        <img  src="https://selmadigital.com/wp-content/uploads/2019/03/Eco-Hair-ShampooLocionAco.jpg" className="seccion2"></img>
        <br></br><br></br>
        <Button variant="primary" href="/" >Ver productos</Button>
      </Card.Body>
    </Card>
    <br></br><br></br>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Mascarillas</Card.Title>
        <img  src="https://www.bellezapura.com/wp-content/uploads/2020/07/BODEGON-HAIR-FOOD-2019-coningredientes.png" className="seccion"></img>
        <br></br><br></br>
        <Button variant="primary" href="/mascarasCapilar" >Ver productos</Button>
      </Card.Body>
    </Card>
<Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Cepillos</Card.Title>
        <img  src="https://images.rappi.com.mx/products/977298182-1585100103614.png?d=136x136&e=webp" className="seccion3" ></img>
        <br></br><br></br>
        <Button variant="primary" href="/Capilar" >Ver productos</Button>
      </Card.Body>
    </Card>
 
    <br></br><br></br>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Tratamientos específicos</Card.Title>
        <img  src="https://www.ginkgostore.com/blog/wp-content/uploads/2015/09/Tratamientos-para-el-pelo.jpg" className="seccion3" ></img>
        <br></br><br></br>
        <Button variant="primary" href="/Capilar" >Ver productos</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Ceras y geles</Card.Title>
        <img  src="https://http2.mlstatic.com/D_NQ_NP_923841-MLA31114033023_062019-O.jpg" className="seccion3" ></img>
        <br></br><br></br>
        <Button variant="primary" href="/Capilar" >Ver productos</Button>
      </Card.Body>
    </Card>
    <br></br><br></br><br></br><br></br>
</div>
</div>

  
    
</>
    )}

    export default Capilar