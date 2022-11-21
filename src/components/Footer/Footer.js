import React from 'react'
import '../Footer/Footer.css'
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer, CDBBox } from 'cdbreact';

export const Footer = () => {
  return (
    <CDBFooter /* className="shadow" */>
      <CDBBox display="flex" flex="column" className="mx-auto py-0" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox alignSelf="center">
            <a href="/" className="d-flex align-items-center p-0 text-dark">
             {/*  <img alt="logo" src="logo" width="30px" /> */}
              <span className="ml-0 h6 font-weight-bold">Acerca de Emi're</span>
            </a>
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
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
            ¯\_(ツ)_/¯
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer' }}>
              <CDBFooterLink href="/">Nuestros locales</CDBFooterLink>
              <CDBFooterLink href="/">Métodos de pago</CDBFooterLink>
              <CDBFooterLink href="/">Métodos de envío</CDBFooterLink>
              <CDBFooterLink href="/">Política de cambios y devoluciones</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-2" style={{ fontWeight: '600' }}>
            no se como se va a llamar esto
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer' }}>
              <CDBFooterLink href="/">Terminos y Condiciones</CDBFooterLink>
              <CDBFooterLink href="/">Validaciones Bancarias</CDBFooterLink>
              <CDBFooterLink href="/contacto">Suscríbete</CDBFooterLink>
              <CDBFooterLink href="/">Para consultas y/o denuncias ingrese aquí</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5"> Copyright 2022 &copy; Emi're.</small>
      </CDBBox>
    </CDBFooter>
  );
};


export default Footer