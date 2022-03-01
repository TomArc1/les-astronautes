import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import CartDetailResume from "../CartDetailResume/CartDetailResume";

const CartListResume = ({ cart }) =>{
    return(
        <div>
            {
                cart.map((prod)=> <CartDetailResume key={prod.id} prod={prod}/>)
            }
        </div>
    )
};

export default CartListResume;