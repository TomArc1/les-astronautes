import React, { useContext } from "react";
import CartDetail from '../CartDetail/CartDetail';

const CartList = ({ cart }) =>{
    return(
        <div>
            {
                cart.map((prod)=>{
                   return <CartDetail key={prod.id} prod={prod}></CartDetail>
                })
            }
        </div>
    )
};

export default CartList;