import React,{ useContext, useState } from "react";
import './CartDetail.css';
import { CartContext } from "../../../context/CartContext";

const CartDetail = ( {prod} ) =>{
    const [units, setUnits] = useState(prod.units)
    const { deleteUnit, deleteProduct } = useContext(CartContext);

    const removeToCart = () =>{
        if(units > 1){
            deleteUnit(prod)
            setUnits(units - 1)
        }else{
            deleteProduct(prod)
        }
    }

    return(
        <div>
                <h3>{prod.name}</h3>
                <p>{prod.description}</p>
                <p>Cantidad: {units}</p>
                <p>{prod.price}</p>
                <button onClick={removeToCart}>Borrar</button>
        </div>
    )
}
export default CartDetail;