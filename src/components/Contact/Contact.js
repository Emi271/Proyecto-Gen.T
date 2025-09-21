import { useState } from 'react'
import './Contact.css'
import { Form, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import * as Yup from 'yup';
import { Formik } from 'formik';

 
 
function Contact() {
 
    const [info, setInfo] = useState(null);
 
    const validateSchema = Yup.object().shape({
        email: Yup.string().email('Complete su correo electrónico').required('Este casillero es obligatorio'),
    });

    function handleSubmit(data) {
        setInfo(data);
    }
 
    return (
        <>
 
            <div className='text'><h1>¡Regístrate!</h1></div>
            <div className='form'>
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
                        errors,
                        handleChange,
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
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text"
                                    name="name"
                                    placeholder="Introduzca su nombre"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicSurname">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="surname"
                                    placeholder="Introduzca su apellido"
                                    onChange={handleChange}
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
                            <Button className='button' variant="info" onClick={() => validateForm()}>
                                Crear cuenta
                            </Button>
                            <br></br>
                            <div>Si tienes una cuenta haz clic aquí</div>
                            <Button className='button' variant="dark"><Nav.Link href='/IniciarSesion'>Iniciar sesión </Nav.Link>
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}
 
export default Contact