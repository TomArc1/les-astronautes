import React, { useContext } from "react";
import './CartListContainer.css';
import CartList from "../CartList/CartList";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import ShowPrice from "../ShowPrice/ShowPrice";

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
                    <ShowPrice />
                    <Link to='/personaldata'>
                    <button className={initBuyBtn}>Iniciar compra</button>     
                    </Link> 
            </div>
        </div>
            
)}

export default CartListContainer;