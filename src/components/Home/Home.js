import React from 'react'
import { Card, CardGroup, CardImg } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel';
import c1 from '../assets/imgs/carousel1.jpg'
import {Link} from "react-router-dom";
 
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
           <h4 className='Texto1'>Nuestras últimas ofertas!!</h4>
           <div className='tarjetas'>
           <CardGroup>
           <Card style={{width: "auto", height: "260px"}}>
      <Link to={'/item/${p.id}'}>
      </Link>
      <Card.Body>
      <Card.Img style= {{width: "130px", height: "140px"}} variant="top" 
      src="https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/mtools/300x300/catalog/product//F/M/FM20969BI25480_RV119276_SZ6.png" />
        <Card.Title>Card Title</Card.Title>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>

    <Card style={{width: "auto", height: "260px"}}>
      <Link to={'/item/${p.id}'}>
      </Link>
      <Card.Body>
      <Card.Img style= {{width: "130px", height: "140px"}} variant="top" 
      src="https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/mtools/300x300/catalog/product//9/3/93446_3.jpg" />
        <Card.Title>Card Title</Card.Title>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>

    <Card style={{width: "auto", height: "260px"}}>
      <Link to={'/item/${p.id}'}>
      </Link>
      <Card.Body>
      <Card.Img style= {{width: "130px", height: "140px"}} variant="top" 
      src="https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/mtools/300x300/catalog/product//1/4/142623-a-gentleman-reserve-priv_e-edp-100ml.jpg" />
        <Card.Title>Card Title</Card.Title>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
    
    <Card style={{width: "auto", height: "260px"}}>
      <Link to={'/item/${p.id}'}>
      </Link>
      <Card.Body>
      <Card.Img style= {{width: "130px", height: "140px"}} variant="top" 
      src="https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/d7c384551f5371795a81d64f480f8258/1/4/144105-a-my-way-intense-edp-90ml_2.jpg" />
        <Card.Title>Card Title</Card.Title>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
    </CardGroup>
    </div>
<br></br>

<CardGroup>
<Card style={{width: "auto", height: "260px"}}>
      <Link to={'/item/${p.id}'}>
      </Link>
      <Card.Body>
      <Card.Img style= {{width: "130px", height: "140px"}} variant="top" 
      src="https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/d7c384551f5371795a81d64f480f8258/1/2/123506-a-dream-edt-50ml.jpg" />
        <Card.Title>Card Title</Card.Title>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
    
    <Card style={{width: "auto", height: "260px"}}>
      <Link to={'/item/${p.id}'}>
      </Link>
      <Card.Body>
      <Card.Img style= {{width: "130px", height: "140px"}} variant="top" src="https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/d7c384551f5371795a81d64f480f8258/1/3/130783-a-kiss_kiss_lipstick_369_rosy_boop_1.jpg" />
        <Card.Title>Card Title</Card.Title>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
    
    <Card style={{width: "auto", height: "260px"}}>
      <Link to={'/item/${p.id}'}>
      </Link>
      <Card.Body>
      <Card.Img style= {{width: "130px", height: "140px"}} variant="top" src="https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/3caedb57c154f4c66adc1fae2b6a3bf5/P/R/PR29501BI19769_PS130559_SEMI_DI_LINO_DIAMOND_ILLUMATING_CONDITIONER_250ML_SZ1.png" />
        <Card.Title>Card Title</Card.Title>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
    
    <Card style={{width: "auto", height: "260px"}}>
      <Link to={'/item/${p.id}'}>
      </Link>
      <Card.Body>
      <Card.Img style= {{width: "130px", height: "140px"}} variant="top" src="https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/3caedb57c154f4c66adc1fae2b6a3bf5/f/m/fm22980bi28997_rv135848_sz6-removebg-preview.png" />
        <Card.Title>Card Title</Card.Title>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
</CardGroup>
    <h4 className='Texto2'>Oportunidades imperdibles!!</h4>

    <div className='tarjetas2'>
    <CardGroup>
    <Card style={{width: "auto", height: "260px"}}>
      <Link to={'/item/${p.id}'}>
      </Link>
      <Card.Body>
      <Card.Img style= {{width: "130px", height: "140px"}} variant="top" src="https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/mtools/300x300/catalog/product//8/9/89282-a-one-million-men-edt-100ml-.jpg" />
        <Card.Title>Card Title</Card.Title>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>

    <Card style={{width: "auto", height: "260px"}}>
      <Link to={'/item/${p.id}'}>
      </Link>
      <Card.Body>
      <Card.Img style= {{width: "130px", height: "140px"}} variant="top" src="https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/3caedb57c154f4c66adc1fae2b6a3bf5/1/3/139058_a_2.jpg" />
        <Card.Title>Card Title</Card.Title>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>

    <Card style={{width: "auto", height: "260px"}}>
      <Link to={'/item/${p.id}'}>
      </Link>
      <Card.Body>
      <Card.Img style= {{width: "130px", height: "140px"}} variant="top" src="https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/d7c384551f5371795a81d64f480f8258/r/p/rp120832.jpg" />
        <Card.Title>Card Title</Card.Title>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>

    <Card style={{width: "auto", height: "260px"}}>
      <Link to={'/item/${p.id}'}>
      </Link>
      <Card.Body>
      <Card.Img style= {{width: "130px", height: "140px"}} variant="top" src="https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/3caedb57c154f4c66adc1fae2b6a3bf5/1/4/144698-a-shampoo-coconut-oil-300ml.jpg" />
        <Card.Title>Card Title</Card.Title>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
    </CardGroup>
    </div>
    <br></br>

        </>
    )
}
 
export default Home