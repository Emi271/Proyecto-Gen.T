import './Home.css'
import { Card, CardGroup  } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel';
import c1 from '../assets/imgs/carousel1.jpg'
import {Link} from "react-router-dom";
 
function Home() {
    return (
        <>
        <div >
 
        <Carousel className='carousel' >
      <Carousel.Item className='item'>
        <img
          className="w-100 d-block"
          src={c1}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 d-block"
          src="https://d3cdlnm7te7ky2.cloudfront.net/media/weltpixel/owlcarouselslider/images/b/h/bh_bentley_1__1.jpg"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 d-block"
          src="https://d3cdlnm7te7ky2.cloudfront.net/media/weltpixel/owlcarouselslider/images/b/h/bh_givenchy_desk_1_.jpg"
          alt="Third slide"
        />
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
      </Carousel.Item>
    </Carousel>

  <br></br>
  <div className='image1'>
  <img src='https://d3cdlnm7te7ky2.cloudfront.net/media/mgs/fbuilder/promobanners/DESTACADO.jpg' className='im1'></img>
  </div>
  <div className='image2'>
  <img src='https://d3cdlnm7te7ky2.cloudfront.net/media/wysiwyg/home/bc_lancome-resp.jpg' className='im2'></img>
  </div>
        </div>

        <img src='https://d3cdlnm7te7ky2.cloudfront.net/media/wysiwyg/Campanas/Navidad/bt_responsive_beneficios_dia.gif' className="imagengif"></img>
        <div>
           <h4>
        Nuestras últimas ofertas!!</h4></div>
           <div className='tarjetas'>
           <CardGroup>
           <Card style={{width: "auto", height: "260px"}}>
      <Card.Body>
      <Card.Img style= {{width: "130px", height: "140px"}} variant="top" 
      src="https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/mtools/300x300/catalog/product//F/M/FM20969BI25480_RV119276_SZ6.png" />
        <Card.Title>JAGUAR PACE MEN</Card.Title>
        <Button variant="primary"><Link to={`/item/12`} style={{ color: '#fff' }} className="loli">Ver más</Link></Button>
      </Card.Body>
    </Card>

    <Card style={{width: "auto", height: "260px"}}>
      <Card.Body>
      <Card.Img style= {{width: "130px", height: "140px"}} variant="top" 
      src="https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/mtools/300x300/catalog/product//9/3/93446_3.jpg" />
        <Card.Title>KEVIN SPIRIT EDT 100ML</Card.Title>
        <Button variant="primary"><Link to={`/item/6`} style={{ color: '#fff' }} className="loli">Ver más</Link></Button>
      </Card.Body>
    </Card>

    <Card style={{width: "auto", height: "260px"}}>
      <Card.Body>
      <Card.Img style= {{width: "130px", height: "140px"}} variant="top" 
      src="https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/mtools/300x300/catalog/product//1/4/142623-a-gentleman-reserve-priv_e-edp-100ml.jpg" />
        <Card.Title>GENTLEMAN RESEVE</Card.Title>
        <Button variant="primary"><Link to={`/item/7`} style={{ color: '#fff' }} className="loli">Ver más</Link></Button>
      </Card.Body>
    </Card>
    
    <Card style={{width: "auto", height: "260px"}}>
      <Card.Body>
      <Card.Img style= {{width: "130px", height: "140px"}} variant="top" 
      src="https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/d7c384551f5371795a81d64f480f8258/1/4/144105-a-my-way-intense-edp-90ml_2.jpg" />
        <Card.Title>MY WAY INTENSE EDP</Card.Title>
        <Button variant="primary"><Link to={`/item/22`} style={{ color: '#fff' }} className="loli">Ver más</Link></Button>
      </Card.Body>
    </Card>
    </CardGroup>
    </div>
<br></br>

<CardGroup>
<Card style={{width: "auto", height: "260px"}}>
      <Card.Body>
      <Card.Img style= {{width: "130px", height: "140px"}} variant="top" 
      src="https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/d7c384551f5371795a81d64f480f8258/1/2/123506-a-dream-edt-50ml.jpg" />
        <Card.Title>DREAM EDT SHAKIRA</Card.Title>
        <Button variant="primary"><Link to={`/item/24`} style={{ color: '#fff' }} className="loli">Ver más</Link></Button>
      </Card.Body>
    </Card>
    
    <Card style={{width: "auto", height: "260px"}}>
      <Card.Body>
      <Card.Img style= {{width: "130px", height: "140px"}} variant="top" src="https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/d7c384551f5371795a81d64f480f8258/1/3/130783-a-kiss_kiss_lipstick_369_rosy_boop_1.jpg" />
        <Card.Title>KISS LIPSTICK</Card.Title>
        <Button variant="primary"><Link to={`/item/30`} style={{ color: '#fff' }} className="loli">Ver más</Link></Button>
      </Card.Body>
    </Card>
    
    <Card style={{width: "auto", height: "260px"}}>
      <Card.Body>
      <Card.Img style= {{width: "130px", height: "140px"}} variant="top" src="https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/3caedb57c154f4c66adc1fae2b6a3bf5/P/R/PR29501BI19769_PS130559_SEMI_DI_LINO_DIAMOND_ILLUMATING_CONDITIONER_250ML_SZ1.png" />
        <Card.Title>SHAMPOO SEMI DI LINO</Card.Title>
        <Button variant="primary"><Link to={`/item/47`} style={{ color: '#fff' }} className="loli">Ver más</Link></Button>
      </Card.Body>
    </Card>
    
    <Card style={{width: "auto", height: "260px"}}>
      <Card.Body>
      <Card.Img style= {{width: "130px", height: "140px"}} variant="top" src="https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/3caedb57c154f4c66adc1fae2b6a3bf5/f/m/fm22980bi28997_rv135848_sz6-removebg-preview.png" />
        <Card.Title>ESMALTE SUNKISSED</Card.Title>
        <Button variant="primary"><Link to={`/item/45`} style={{ color: '#fff' }} className="loli">Ver más</Link></Button>
      </Card.Body>
    </Card>
</CardGroup>
    <h4 className='Texto2'>Oportunidades imperdibles!!</h4>

    <div className='tarjetas2'>
    <CardGroup>
    <Card style={{width: "auto", height: "260px"}}>
      <Card.Body>
      <Card.Img style= {{width: "130px", height: "140px"}} variant="top" src="https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/mtools/300x300/catalog/product//8/9/89282-a-one-million-men-edt-100ml-.jpg" />
        <Card.Title>ONE MILLION </Card.Title>
        <Button variant="primary"><Link to={`/item/8`} style={{ color: '#fff' }} className="loli">Ver más</Link></Button>
      </Card.Body>
    </Card>

    <Card style={{width: "auto", height: "260px"}}>
      <Card.Body>
      <Card.Img style= {{width: "130px", height: "140px"}} variant="top" src="https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/3caedb57c154f4c66adc1fae2b6a3bf5/1/3/139058_a_2.jpg" />
        <Card.Title>MÁSC. DE PESTAÑAS</Card.Title>
        <Button variant="primary"><Link to={`/item/35`} style={{ color: '#fff' }} className="loli">Ver más</Link></Button>
      </Card.Body>
    </Card>

    <Card style={{width: "auto", height: "260px"}}>
      <Card.Body>
      <Card.Img style= {{width: "130px", height: "140px"}} variant="top" src="https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/d7c384551f5371795a81d64f480f8258/r/p/rp120832.jpg" />
        <Card.Title>FANTASY FINE</Card.Title>
        <Button variant="primary"><Link to={`/item/25`} style={{ color: '#fff' }} className="loli">Ver más</Link></Button>
      </Card.Body>
    </Card>

    <Card style={{width: "auto", height: "260px"}}>
      <Card.Body>
      <Card.Img style= {{width: "130px", height: "140px"}} variant="top" src="https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/3caedb57c154f4c66adc1fae2b6a3bf5/1/4/144698-a-shampoo-coconut-oil-300ml.jpg" />
        <Card.Title>SHAMPOO COCONUT</Card.Title>
        <Button variant="primary"><Link to={`/item/49`} style={{ color: '#fff' }} className="loli">Ver más</Link></Button>
      </Card.Body>
    </Card>
    </CardGroup>
    </div>
    <br></br>

        </>
    )
}
 
export default Home