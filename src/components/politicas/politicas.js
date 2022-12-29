import React from "react";
import { Form, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';

function Politicas () {

return ( 
<div>
    <img src="https://d3cdlnm7te7ky2.cloudfront.net/media/wysiwyg/BannerCat-Devoluciondelproducto-02-min.png" alt
    className="w-100 d-block">
    </img>
    <br></br>
<h5> CONTACTANOS </h5>
<div className="caja">
<p>Completá el formulario, ingresando tus datos personales, contacto, <br></br>número de pedido y motivo del cambio.
<br></br><br></br>
Adjuntá imágenes del producto y su regaleria.
<br></br><br></br>
Importante: Si el producto a devolver tiene regalería asociada,<br></br> la misma deberá ser devuelta con el producto adquirido.</p>
</div>
<br></br>
<div className="">
    <h5>¿CUÁL ES EL TIEMPO DE DEVOLUCIÓN DE PRODUCTO?</h5>
<p>Se dispone de 30 días, a partir de la fecha de entrega del pedido para <br></br> comunicarnos la necesidad de devolución y su causa.</p>
<br></br>
<h5>¿QUE PRODCUTOS TIENEN CAMBIO?</h5>
<p>Los siguientes productos no tienen cambio o devolución: máscaras de <br></br>
pestañas, delineadores y labiales (gloss y barra); esto se debe a una <br></br> 
restricción de higiene. Tampoco aquellos productos donde no se puede <br></br>
verificar la modificación de su contenido como los esmaltes, bases <br></br>
líquidas, correctores, maquillaje en polvo, productos capilares, <br></br>
tratamientos sin celofán de fábrica, productos en uso, etc.</p>
<br></br>
<h5>TÉRMINOS Y CONDICIONES PARA LA DEVOLUCIÓN DEL PRODUCTO</h5>
<p>Sólo se tomarán cambios de productos cerrados que cuenten con su <br></br>
 embalaje intacto, exactamente como fue recibido. En caso de que la <br></br> 
 devolución se relacione con un error de Emi're., los gastos de <br></br> 
 devolución y re-entrega correrán a cargo de la empresa. Caso contrario, <br></br> 
 todos los gastos estarán a cargo del cliente. Las compras web se cambian <br></br>
 mediante la web y debe comunicarse la intención del mismo a <br></br>
 emi're@gmail.com donde recibirán toda la información para <br></br> 
 realizar el cambio.</p>
 <br></br>

{/* 
        <Formik
            validationSchema={validateSchema}
            onSubmit={handleSubmit}
            initialValues={{
                email: info?.name || '',
                name: '',
                password: ''
            }}
            enableReinitialize={false}
        >
 {({
                touched,
                isValid,
                isInvalid,
                errors,
                handleBlur,
                handleChange,
                values,
                validateForm,
            }) => (

 <Form noValidate >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Introduzca su correo electrónico"
                            onChange={handleChange}
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicPass">
                                <Form.Label>Confirme la contraseña</Form.Label>
                                <Form.Control type="password"
                                    name="password"
                                    placeholder="Repita la contraseña"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Button className='button' variant="info" onClick={() => validateForm()}>
                                Iniciar sesión
                            </Button>
                        </Form>
                              )}</Formik>
 */}
</div>

</div>


    
)


}

export default Politicas