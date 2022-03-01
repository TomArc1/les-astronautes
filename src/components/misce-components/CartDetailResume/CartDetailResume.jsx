import React,{ useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

const CartDetailResume = ( {prod} ) =>{
    const [units, setUnits] = useState(prod.units)
    const { deleteUnit, deleteProduct } = useContext(CartContext);

    const removeToCart = () =>{
        if(units > 1){
            deleteUnit(prod);
            setUnits(units - 1);
        }else{
            deleteProduct(prod)
        }
    }

    return(
        <div>
                <h5>{prod.name}</h5>
                <p>Cantidad: {units}</p>
        </div>
    )
}
export default CartDetailResume;