import React from 'react';
import './CartWidget.css';
import cartImg from '../../../assets/svgs/hr-Shop.svg';
import { Link } from 'react-router-dom';

const CartWidget = () => { 
    return( 
    <div className='cart-container'>
            <img src={cartImg} className='cartImg' />
            <p>4</p>
    </div>
    )
};

export default CartWidget;
