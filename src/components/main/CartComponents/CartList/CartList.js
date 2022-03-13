import React, { useContext } from "react";
import './cartList.css';
import CartDetail from '../CartDetail/CartDetail';
import { CartContext } from "../../../../context/CartContext";

const CartList = ({ cart }) =>{
    const { emptyCart } = useContext(CartContext)
    return(
        <div className="cartList">
            {
                cart.map((prod)=>{
                   return <CartDetail key={prod.id} prod={prod}></CartDetail>
                })
            }
            <button onClick={emptyCart} className='cartListDeleteAll' >Borrar todos los productos</button>
        </div>
    )
};

export default CartList;