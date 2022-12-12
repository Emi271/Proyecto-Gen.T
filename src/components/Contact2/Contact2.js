import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';

function Contact2() {
    const [info, setInfo] = useState(null);
 
    const validateSchema = Yup.object().shape({
        email: Yup.string().email('Complete su correo electrónico').required('Este casillero es obligatorio'),
    });

    function handleSubmit(data) {
        setInfo(data);
    }
 
  
    return (
    <>
    <div className='text'><h1>¡Inicia sesión en tu cuenta!</h1></div>
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
            </div>
        </>
    )
            }
export default Contact2