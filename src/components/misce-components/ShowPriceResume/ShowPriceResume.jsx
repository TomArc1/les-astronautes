import react, { useContext, useState, useEffect } from "react";
import './showPriceResume.css';
import { CartContext } from "../../../context/CartContext";

const ShowPriceResume = () =>{
    const {amount} = useContext(CartContext);

    return(
        <h5 className="showPriceResume" >${amount}</h5>
    )
}

export default ShowPriceResume;