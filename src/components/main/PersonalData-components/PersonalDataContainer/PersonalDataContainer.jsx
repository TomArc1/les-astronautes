import React, { useContext } from "react";
import './personalDataContainer.css';
import ContactForm from "../ContactForm/ContactForm";
import { CartContext } from "../../../../context/CartContext";
import CartListResume from "../../../main/CartComponents/CartListResume/CartListResume";
import ShowPriceResume from "../../../misce-components/ShowPriceResume/ShowPriceResume";
import Footer from "../../../Footer/Footer";

const PersonalDataContainer = () =>{
    const { cart } = useContext(CartContext);

    return(
        <div>
            <div className="personalDataContainer">
                <h4 className="personalDataContainer">Resumen de la compra</h4>
                <CartListResume cart={cart}/>
                <ShowPriceResume/>
            </div>
            <div className="bar"></div>
            <div>
                <ContactForm/>
            </div>
            <Footer/>

        </div>

    )
}

export default PersonalDataContainer;