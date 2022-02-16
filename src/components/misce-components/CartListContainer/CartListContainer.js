import React, { useContext } from "react";
import CartList from "../CartList/CartList";
import { CartContext } from "../../../context/CartContext";


const CartListContainer = () =>{
    const { cart } = useContext(CartContext);
    return(
        <div>
            {
                (cart.length === 0)
                ? (<h1>Carrito vacío</h1>)
                : (<CartList cart={cart}/>)
            }
        </div>
)}

export default CartListContainer;