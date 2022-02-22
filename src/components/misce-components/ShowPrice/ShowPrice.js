import react, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../context/CartContext";

const ShowPrice = () =>{
    const {amount} = useContext(CartContext);

    return(
        <h3>${amount}</h3>
    )
}

export default ShowPrice;