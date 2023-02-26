import React, { useState } from "react";

const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0);
    const steps = ["Shipping address", "Payment details"]
    
    const nextStep = () => setActiveStep((prevActivestep) => prevActivestep + 1)
    const backStep = () => setActiveStep((prevActivestep) => prevActivestep - 1)

    const Form = () =>
    return (
    <>
    <main>
        
    </main>
    </>
    )
}