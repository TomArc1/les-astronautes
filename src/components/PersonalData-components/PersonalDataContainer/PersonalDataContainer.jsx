import React, { useState, useContext } from "react";
import ContactForm from "../ContactForm/ContactForm";
import { CartContext } from "../../../context/CartContext";
import CartListResume from "../../misce-components/CartListResume/CartListResume";
import ShowPriceResume from "../../misce-components/ShowPriceResume/ShowPriceResume";

const PersonalDataContainer = () =>{
    const { cart } = useContext(CartContext);

    return(
        <div>
            <div>
                <h4>Resumen de la compra</h4>
                <CartListResume cart={cart}/>
                <ShowPriceResume/>
            </div>
            <div>
                <ContactForm/>
            </div>
        </div>

    )
}

export default PersonalDataContainer;