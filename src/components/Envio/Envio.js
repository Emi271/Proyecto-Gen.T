import React from "react";
import entregaRapida2 from '../assets/imgs/entregaRapida2.png'
import envio1 from '../assets/imgs/envio.png'
import envio2 from '../assets/imgs/enviar-correo.png'
import home from '../assets/imgs/casa.png'
import './Envio.css'

function Envio () {

return (
    <div className="caja">
        <img src="https://d3cdlnm7te7ky2.cloudfront.net/media/wysiwyg/bc_metodos_envio_desktop.jpg"
        className="w-100 d-block"></img>
        <br></br>
        <img src={entregaRapida2}></img>
        <h5 className="subtitulo">MÉTODOS DE ENVÍO</h5>
        <div className="bar"></div>
<p className="parrafo">En Emi're. hacemos envíos a todo el país.
<br></br>
Los envíos son realizados por Andreani, Oca, Welivery o Paquery (cadetería <br></br>
vía moto sólo en ciertos lugares de Bs As)
<br></br>
Los tiempos de entrega pueden verse demorados en fechas comerciales<br></br> como:<br></br>
Hot Sale, Día del Padre, Día de la Madre, CyberMonday, Navidad, etc.</p>
<br></br><br></br>
<h5 className="subtitulo">RETIRO EN TIENDA</h5>
<div className="bar"></div>
<br></br>
<h5 className="subtituloEspecial">¡COMPRÁ ONLINE RETIRÁ EN SUCURSAL!</h5>
<img src={home} className="imgizq" ></img>
<p className="parrafoEspecial">Los pedidos sólo podrán ser retirados por 
el titular de la compra, presentando DNI original, y Tarjeta de Crédito o 
Débito física con la que se haya efectuado la compra, sin excepción. Los 
pedidos no podrán ser retirados por terceros autorizados.
La disponibilidad de su pedido para ser retirado en sucursal será notificada
 al correo electrónico que haya registrado.
Los tiempos logísticos pueden variar entre 24 horas a 7 días hábiles desde 
confirmada la compra. Zonas de cobertura: CABA y zonas de provincia de Buenos
 Aires (*). Las compras que se realizan los viernes son entregadas a partir
del siguiente día hábil.
Servicio habilitado únicamente en la Sucursal Parfumerie Cabildo, Cabildo 1950 - CABA</p>

<br></br>
<h5 className="subtitulo"> ENVÍO EXPRESS</h5>
<div className="bar"></div>
<img src={envio1}  className="imgizq" ></img>
<p className="parrafoEspecial"> Los tiempos logísticos son de 24 horas hábiles, desde 
realizada la compra. Zonas de cobertura: CABA y zonas de provincia de Buenos Aires (*).
 Las compras que se realizan los viernes son entregadas el siguiente día hábil. Verificar
  zona de cobertura y costos para Envíos Express en el checkout.</p>
<img></img>
<br></br>
<h5 className="subtitulo">ENVÍO NEXT DAY</h5>
<div className="bar"></div>
<img src={envio2}  className="imgizq"></img>
<p className="parrafoEspecial">Las compras realizadas antes de las 11.00 hs, serán entregadas
 al próximo día hábil. Las compras realizadas los dias viernes hábiles luego de las 11.00 hs,
  serán entregadas dentro de las 48 horas hábiles. Zonas de cobertura: Córdoba Capital, Rosario, 
  Santa Fe Capital (incluye además Santo Tomé y Sauce Viejo), Mendoza Capital, (incluye Godoy 
  Cruz y Dorrego). Verificar zona de cobertura y costos para Envío Next Day en el checkout.</p>
<br></br>
<h5 className="subtitulo">ENVÍO RÁPIDO</h5>
<div className="bar"></div>
<img src={envio1}  className="imgizq" ></img>
<p className="parrafoEspecial">Los tiempos logísticos pueden ser desde 1 hasta 5 días hábiles,
 desde realizada la compra. Verificar zona de cobertura y costos para Envío Rápido en el checkout.</p>
<img></img>
<br></br>
<h5 className="subtitulo">ENVÍO A DOMICILIO</h5>
<div className="bar"></div>
<img src={home} className="imgizq" ></img>
<p className="parrafoEspecial">Los tiempos logísticos pueden ser desde 2 hasta 10 días hábiles, desde
 realizada la compra. Verificar zona de cobertura y costos para Envío a Domicilio en el checkout.</p>

 <br></br><br></br>
 <h6>En cualquier caso, la confirmación del despacho la recibirás por medio de <br></br>
 correo electrónico con tu número de seguimiento.</h6>
 <br></br>
 <h6>Los tiempos de entrega pueden verse demorados en fechas comerciales<br></br> como:<br></br>
 Hot Sale, Día del Padre, Día de la Madre, CyberMonday, Navidad, etc.</h6>
 <br></br><br></br>
    </div>


)}

export default Envio