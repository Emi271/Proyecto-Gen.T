import React from 'react'
import '../Footer/Footer.css'
import { Routes, Route, Link } from "react-router-dom";
import Terms from '../Terms/Terms';

function Footer() {
  return (
    <div className='footer-1'> Acerca de Emi're
    <br></br><br></br> Nuestros locales <br></br> Métodos de pago <br></br>
    Métodos de envío <br></br> Política de cambios y devoluciones <br></br>
     <a href="/terms" target={"_blanck"} rel="noopener noreferrer" >Terminos y Condiciones</a> 
     <Routes>
     <Route path="/terminos y condiciones" element={<Terms />} />
     </Routes>
      <br></br>
    <br></br> Validaciones Bancarias <br></br> correo@lala.com <br></br>  Suscríbete y sé el primero en estar
     al tanto de nuevos lanzamientos,<br></br> promociones, novedades y mucho más!!<br></br><br></br>  
                            <br></br>
     Dirección General de Defensa y Protección al Consumidor: <br></br>
     Para consultas y/o denuncias ingrese aquí
     </div>
  )
}

export default Footer