import React, { useContext } from 'react';
import './CartWidget.css';
import cartImg from '../../../assets/svgs/hr-Shop.svg';
import { CartContext } from '../../../context/CartContext';

const CartWidget = () => { 
    const { cart } = useContext(CartContext);

    return( 
    <div className='cart-container'>
            <img src={cartImg} className='cartImg' />
            <div>
            {
                (cart.length > 0)
                ? (<p>{cart.length}</p>)
                : (null)
            }
            </div>
    </div>
    )
};

export default CartWidget;
