import react, { useContext } from "react";
import './showPrice.css';
import { CartContext } from "../../../context/CartContext";

const ShowPrice = () =>{
    const {amount} = useContext(CartContext);


    return(
        <h3 className="amount">${amount}</h3>
    )
}

export default ShowPrice;