import React from 'react'
import { Card } from 'react-bootstrap'
import './FormasdePago.css'

function FormasdePago () {

    return (
        <>
        <div className='container'>
            <div className='tarjetas'>
        <Card style={{ width: '18rem' }} >
           <Card.Body>
           <Card.Img src="https://e7.pngegg.com/pngimages/1013/540/png-clipart-mastercard-mastercard.png"
           variant='top' className='dcard'></Card.Img>
           <br></br><br></br>
            <Card.Text>
                <p>Vigencia: hasta el 31 de Marzo de 2023</p>
                <br></br><br></br>
                <p>10% de reintegro y hasta 3 cuotas sin interés</p>
            </Card.Text>
            </Card.Body> 
        </Card>

        <Card style={{ width: '18rem' }}>
           <Card.Body>
            <Card.Text>

            </Card.Text>
            <Card.Img></Card.Img>
            </Card.Body> 
        </Card>
        </div>
        </div>
        </>
    )};

    export default FormasdePago