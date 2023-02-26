import React from "react";
import './ShoppingCart.css'
import { Button } from "react-bootstrap";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";

const AddressForm = () => {
    const methods = useForm();
    const [ { shippingData }, dispatch] = useStateValue();

    return(
        <>
        <FormProvider {...methods}>
            <form  onSubmit={methods.handleSubmit(data =>{console.log(data)})}>
                <Grid container spacing={3}>
                    <AdressInput required name="fistName" label="first Name"/>
                    <AdressInput required name="lastName" label="first Name"/>
                    <AdressInput required name="adress" label="Adress"/>
                     <AdressInput required name="email" label="Email adress"/>
                     <AdressInput required name="city" label="City"/>
                     <AdressInput required name="postCode" label="Post Code"/>
                </Grid>
                <div className="AdressForm">
                <Button component={Link}>Volver</Button>
                <Button type="submit" variant="primary"> Siguiente</Button>
                </div>
            </form>
            </FormProvider>
        </>

    )} 


    export default AddressForm