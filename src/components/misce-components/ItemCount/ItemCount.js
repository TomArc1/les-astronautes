import React, { useState } from 'react';
import './ItemCount.css';
import plus from '../../../assets/svgs/plus.svg';
import minus from '../../../assets/svgs/minus.svg';
import cart from '../../../assets/svgs/hr-Shop2.svg';

const ItemCount = ({ stock, initial, onAdd }) =>{
    const [amount, setAmountToCart] = useState(initial)

    const addUnit = () => (amount < stock) && setAmountToCart( amount + 1);
    const subtractUnit = () =>(amount > 1) && setAmountToCart( amount - 1 );

    const addToCart = () => {
        onAdd(amount);
    }

    return(
        <div className='cardCounter'>
            <div className='cardCounter__inner' >
                <button onClick={subtractUnit} className='cardCounter__inner-btn'>
                    <img src={minus} className='minus' />
                </button>
                <input type="text" onChange={setAmountToCart} value={amount} className='cardProduct__inner-input' />
                <button onClick={addUnit} className='cardCounter__inner-btn'>
                    <img src={plus} className='plus' />
                </button>
            </div>
            <button className='cardCounter__inner-btnAdd' onClick={addToCart}>
                <img src={cart} className='cardCounter__inner-btnAdd-cartImg' />
                <p className='cardCounter__inner-btnAdd-p'>Agregar al carrito</p>
            </button>
        </div>
    )
};

export default ItemCount;

