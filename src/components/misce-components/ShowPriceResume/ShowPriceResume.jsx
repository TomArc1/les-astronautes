import react, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../context/CartContext";

const ShowPriceResume = () =>{
    const {amount} = useContext(CartContext);

    return(
        <h5>${amount}</h5>
    )
}

export default ShowPriceResume;