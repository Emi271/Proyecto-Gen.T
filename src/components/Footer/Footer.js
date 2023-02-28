import React from 'react'
import { Button } from 'react-bootstrap';
import '../Footer/Footer.css'
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer, CDBBox } from 'cdbreact';

export const Footer = () => {
  return (
    <CDBFooter  className="lala" >
      <CDBBox display="flex" flex="column" className="mx-auto py-0" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between">
          <CDBBox alignSelf="center">
          <p className="h5 mb-2" style={{ fontWeight: '600' }}>
            Nuestras Redes
            </p>
            <CDBBox className="mt-2" display="flex">
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3 p-2">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <br></br>
            <p className="h5 mb-2" style={{ fontWeight: '600' }}>
            Acerca de Emi're
            </p>
            <CDBBox display="flex" flex="column"  style={{ cursor: 'pointer' }}>
              <CDBFooterLink href="/Nuestroslocales">Nuestros locales</CDBFooterLink>
              <CDBFooterLink href="/FormasDePago">Métodos de pago</CDBFooterLink>
              <CDBFooterLink href="/envios">Métodos de envío</CDBFooterLink>
              <CDBFooterLink href="/politicasdevoluciones">Política de cambios y devoluciones</CDBFooterLink>
             <CDBFooterLink href="/TerminosyCondiciones">Terminos y Condiciones</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
          <br></br>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer' }}>
              <CDBFooterLink href="/contacto">Suscríbete</CDBFooterLink>
             <a src="" > <CDBFooterLink href="https://buenosaires.gob.ar/jefaturadegabinete/atencion-ciudadana-y-gestion-comunal/defensa-al-consumidor">Para consultas y/o denuncias ingrese aquí</CDBFooterLink></a>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <br></br>
        <Button variant="light" style={{ width: '12rem' }} className='boton'
        href='/Trabajo' >Trabaja con nosotros</Button>
        <small className="text-center mt-3"> Copyright 2022 &copy; Emi're.</small>
      </CDBBox>
    </CDBFooter>
  );
};


export default Footer