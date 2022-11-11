import React, { useState } from 'react'
import './Contact.css'
import { Form, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { useFormik, Formik } from 'formik';
 
 
function Contact() {
 
    const [info, setInfo] = useState(null);
 
    const validateSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
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
 
            <div className='text'><h1>Comunicate con nosotros!</h1></div>
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
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
                                    onChange={handleChange}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text"
                                    name="name"
                                    placeholder="Enter name"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPass">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"
                                    name="password"
                                    placeholder="Enter password"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Button className='button' variant="primary" onClick={() => validateForm()}>
                                Submit
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}
 
export default Contact