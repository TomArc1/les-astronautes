import React, { useContext } from "react";
import './CartListContainer.css';
import { CartContext } from "../../../../context/CartContext";
import { Link } from "react-router-dom";
import CartList from "../CartList/CartList";
import ShowPrice from "../../../misce-components/ShowPrice/ShowPrice";
import Footer from "../../../Footer/Footer";
import spaceStation from '../../../../assets/imgs/space-station.png';

const CartListContainer = () =>{
    const { cart } = useContext(CartContext);

    const initBuyBtn = `${cart.length > 0 ? 'initBuyBtnTrue btn-cart-modal' : 'initBuyBtnFalse btn-cart-modal'}`;

    return(
        <div>
            <div className="cartListContainer">
                <div className="cartListContainer__left">
                    {
                        (cart.length === 0)
                        ? ( <div className="cartListContainer__left-emptyCart">
                                <h1 className="cartListContainer__left-emptyCart-h1">Carrito vacío!</h1>
                                <p className="cartListContainer__left-emptyCart-p">"Houston, estamos esperando que los productos lleguen a la base... Houston? Hola?"</p>
                                <img src={spaceStation} alt='Les Astronautes' className="cartListContainer__left-emptyCart-img" />
                                <Link to='/shop' className="cartListContainer__left-emptyCart-link" >Volver a la compra</Link>
                            </div>
                            )
                            : (<CartList cart={cart}/>)
                        }
                </div>
                <div className="cartListContainer__right">
                        <ShowPrice />
                        <Link className={initBuyBtn} to='/personaldata'>
                            <span className="btn-example">Iniciar compra</span> 
                        </Link> 
                </div>
            </div>
            <Footer/>
        </div>
            
)}

export default CartListContainer;