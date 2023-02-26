import React from "react";
import Review from "./Review";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "react-bootstrap";

const stripePromise = loadStripe("lalalola")
const CheckoutForm = {{backStep, nextStep}} => {
    return (
        <form>
            <CardElement options={CARD_ELEMENT_OPTIONS}/>
            <div className="PaymentForm">
                <Button  variant="outlined" onClick={backStep}>  Volver  </Button>
                <Button  disabled={true} type="submit" variant="secondary" >  Pagar </Button>
            </div>
        
        </form>
    )};

export default PaymentForm