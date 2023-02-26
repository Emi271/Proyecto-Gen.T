import React from "react";
import { ListGroupItem } from "react-bootstrap";

const Review = () => {
    return( 
        <>
        <h4>Orden de compra</h4>
        <List disablePadding>
            {
            basket?.map(product => (
                <ListGroupItem key={product.name}>

                </ListGroupItem>
            ))}
            {accounting.formatMoney(getBasketTotal(basket), "$")}
        </List>
        </>
    )};

    export default Review