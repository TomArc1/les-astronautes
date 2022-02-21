import React, { useContext } from "react";
import CartDetail from '../CartDetail/CartDetail';
import { CartContext } from "../../../context/CartContext";

const CartList = ({ cart }) =>{
    const { emptyCart } = useContext(CartContext)
    return(
        <div>
            {
                cart.map((prod)=>{
                   return <CartDetail key={prod.id} prod={prod}></CartDetail>
                })
            }
            <button>Finalizar Compra</button>
            <button onClick={emptyCart}>Mandar todo al diablo</button>
        </div>
    )
};

export default CartList;