import React, { useContext, useState } from "react";
import './CartListContainer.css';
import CartList from "../CartList/CartList";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";


const CartListContainer = () =>{
    const { cart } = useContext(CartContext);

    const initBuyBtn = `${cart.length > 0 ? 'initBuyBtnTrue' : 'initBuyBtnFalse'}`;

    return(
        <div className="cartListContainer">
            <div className="cartListContainer__left">
                {
                    (cart.length === 0)
                    ? ( <div>
                            <h1>Carrito vacío</h1>
                            <Link to='/'>Volver a la compra</Link>
                        </div>
                        )
                        : (<CartList cart={cart}/>)
                    }
            </div>
            <div className="cartListContainer__right">
                    <button className={initBuyBtn}>Iniciar compra</button> 
            </div>
        </div>
            
)}

export default CartListContainer;