import React from 'react'
import { Card, CardGroup, CardImg } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import c1 from '../assets/imgs/carousel1.jpg'
/* import { Link } from 'react-router-dom'; */

 
function Home() {
    return (
        <>
        <div className='home'>
 
        <Carousel className='carousel' >
      <Carousel.Item className='item'>
        <img
          className="perfum-img1"
          src={c1}
          alt="First slide"
        />
        <Carousel.Caption>
          <p>Promoción válida por tiempo o hasta agotar stock. No incluye sets ni es acumulable con otras promociones.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="perfum-img2"
          src="https://d3cdlnm7te7ky2.cloudfront.net/media/weltpixel/owlcarouselslider/images/b/h/bh_bentley_1__1.jpg"
          alt="Second slide"
        />
 
        <Carousel.Caption>
          <p>Promoción válida por tiempo o hasta agotar stock. No incluye sets ni es acumulable con otras promociones.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="perfum-img3"
          src="https://d3cdlnm7te7ky2.cloudfront.net/media/weltpixel/owlcarouselslider/images/b/h/bh_givenchy_desk_1_.jpg"
          alt="Third slide"
        />
 
        <Carousel.Caption>
          <p>
          Promoción válida por tiempo o hasta agotar stock. No incluye sets ni es acumulable con otras promociones.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
        <br></br>
           <p className='Texto1'> No te pierdas nuestros últimos lanzamientos! </p>

 <CardGroup>
  <Card>
              
  </Card>
 </CardGroup>

        </>
    )
}
 
export default Home