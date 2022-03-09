import React, { useContext } from 'react';
import './CartWidget.css';
import cartImg from '../../../assets/svgs/hr-Shop.svg';
import { CartContext } from '../../../context/CartContext';

const CartWidget = () => { 
    const { cart } = useContext(CartContext);
    const prodsInCart = cart.reduce((acc, prod)=> (acc += prod.units), 0);

    return( 
    <div className='cart-container'>
            <img src={cartImg} className='cartImg' />
            <div>
            {
                (cart.length > 0)
                ? (<p className='cartWidP'>{prodsInCart}</p>)
                : (null)
            }
            </div>
    </div>
    )
};

export default CartWidget;
