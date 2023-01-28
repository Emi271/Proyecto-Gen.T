import React, {useState} from "react";
import './politicas.css'
import dev from '../assets/imgs/devolucion.png'
import { Form, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';

function Politicas () {

return ( 
<div className="caja">
    <img src="https://d3cdlnm7te7ky2.cloudfront.net/media/wysiwyg/BannerCat-Devoluciondelproducto-02-min.png" alt
    className="w-100 d-block">
    </img>
    <br></br>
    <img src={dev}></img>
    <br></br><br></br>
<h5> CONTACTANOS </h5>
<div className="bar"></div>
<p className="parrafo">Completá el formulario, ingresando tus datos personales, contacto, <br></br>número de pedido y motivo del cambio.
<br></br><br></br>
Adjuntá imágenes del producto y su regaleria.
<br></br><br></br>
Importante: Si el producto a devolver tiene regalería asociada,<br></br> la misma deberá ser devuelta con el producto adquirido.</p>
<br></br>
<h5 className="subtitulo2">CONDICIONES DE DEVOLUCIÓN</h5>
    <div className="bar"></div>
    <br></br>
    <h5 className="subtitulo">¿CUÁL ES EL TIEMPO DE DEVOLUCIÓN DE PRODUCTO?</h5>
    <div className="bar"></div>
<p className="parrafo">Se dispone de 30 días, a partir de la 
fecha de entrega del pedido para <br></br> comunicarnos la
 necesidad de devolución y su causa.</p>
<br></br>
<h5 className="subtitulo">¿QUE PRODCUTOS TIENEN CAMBIO?</h5>
<div className="bar"></div>
<p className="parrafo">Los siguientes productos no tienen cambio o devolución: máscaras de <br></br>
pestañas, delineadores y labiales (gloss y barra); esto se debe a una <br></br> 
restricción de higiene. Tampoco aquellos productos donde no se puede <br></br>
verificar la modificación de su contenido como los esmaltes, bases <br></br>
líquidas, correctores, maquillaje en polvo, productos capilares, <br></br>
tratamientos sin celofán de fábrica, productos en uso, etc.</p>
<br></br>
<h5 className="subtitulo">TÉRMINOS Y CONDICIONES PARA LA DEVOLUCIÓN DEL PRODUCTO</h5>
<div className="bar"></div>
<p className="parrafo">Sólo se tomarán cambios de productos cerrados que cuenten con su <br></br>
 embalaje intacto, exactamente como fue recibido. En caso de que la <br></br> 
 devolución se relacione con un error de Emi're., los gastos de <br></br> 
 devolución y re-entrega correrán a cargo de la empresa. Caso contrario, <br></br> 
 todos los gastos estarán a cargo del cliente. Las compras web se cambian <br></br>
 mediante la web y debe comunicarse la intención del mismo a <br></br>
 emi're@gmail.com donde recibirán toda la información para <br></br> 
 realizar el cambio.</p>
 <br></br>
 <div className="bar"></div>
 <br></br>
 { Formulario ()}
</div>
)}

function Formulario () {
    const [info, setInfo] = useState(null);
 
    const validateSchema = Yup.object().shape({
        email: Yup.string().email('Complete su correo electrónico').required('Este casillero es obligatorio'),
    });
 
    // const formik = useFormik({
    //     initialValues: {
    //         email: '',
    //         name: '',
    //         password: ''
    //     },
    //     onSubmit: (data) => {
    //         setInfo(data);
    //     },
    //     validateSchema: { validateSchema }
    // });
 
    function handleSubmit(data) {
        setInfo(data);
    }
 
 
    return (
        <>
 
            <div className='container'>
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
                             <Form.Group controlId="formBasicName">
                                <Form.Label>Nombre y apellido del titular</Form.Label>
                                <Form.Control type="text"
                                    name="name"
                                    onChange={handleChange}
                                />
                            </Form.Group>
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
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password"
                                    name="password"
                                    placeholder="Introduzca una contraseña"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPass">
                                <Form.Label>Confirme la contraseña</Form.Label>
                                <Form.Control type="password"
                                    name="password"
                                    placeholder="Repita la contraseña"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <br></br>
                           
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )

};


export default Politicas 