import React from 'react'
import { Card, CardGroup, CardImg } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import c1 from '../assets/imgs/carousel1.jpg'
import c4 from '../assets/imgs/carousel4.jpg'
/* import { Link } from 'react-router-dom'; */

 
function Home() {
    return (
        <>
        <div className='home'>
 
        <Carousel className='carousel' >
      <Carousel.Item className='item'>
        <img
          className="w-100 d-block"
          src={c1}
          alt="First slide"
        />
        <Carousel.Caption>
          <p>Promoción válida por tiempo o hasta agotar stock. No incluye sets ni es acumulable con otras promociones.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 d-block"
          src="https://d3cdlnm7te7ky2.cloudfront.net/media/weltpixel/owlcarouselslider/images/b/h/bh_bentley_1__1.jpg"
          alt="Second slide"
        />
 
        <Carousel.Caption>
          <p>Promoción válida por tiempo o hasta agotar stock. No incluye sets ni es acumulable con otras promociones.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 d-block"
          src="https://d3cdlnm7te7ky2.cloudfront.net/media/weltpixel/owlcarouselslider/images/b/h/bh_givenchy_desk_1_.jpg"
          alt="Third slide"
        />
 
        <Carousel.Caption>
          <p>
          Promoción válida por tiempo o hasta agotar stock. No incluye sets ni es acumulable con otras promociones.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 d-block"
          src="https://d3cdlnm7te7ky2.cloudfront.net/media/weltpixel/owlcarouselslider/images/d/i/diorxmas_parfumerie-homedesktop-1350x400_1.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 d-block"
          src="https://d3cdlnm7te7ky2.cloudfront.net/media/weltpixel/owlcarouselslider/images/b/h/bh_antonio_banderas_7_.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <p>
          Promoción válida por tiempo o hasta agotar stock. No incluye sets ni es acumulable con otras promociones.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    {/* ACÁ ABAJO VAN LOS CARDS SUGIRIENDO PRODUCTOS, OFERTAS Y DEMÁS..
    DEBERÍAMOS VER UN TOQUE EL COLOR DE LA NAVBAR.. YO
    PENSABA EN UN ROSA O LILA ALGO TRANQUI PERO HERMOSO
  */}
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