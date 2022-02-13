import React, { useState } from 'react';
import './ItemCount.css';
import plus from '../../assets/svgs/plus.svg';
import minus from '../../assets/svgs/minus.svg';

const ItemCount = ({ stock, initial, onAdd }) =>{
    const [amountToCart, setAmountToCart] = useState(initial)

    const addUnit = () => (amountToCart < stock) && setAmountToCart( amountToCart + 1);
    const subtractUnit = () =>(amountToCart > 1) && setAmountToCart( amountToCart - 1 );

    const addToCart = () => {
        onAdd(amountToCart);
    }

    return(
        <div className='cardCounter'>
            <div className='cardCounter__inner' >
                <button onClick={subtractUnit} className='cardCounter__inner-btn'>
                    <img src={minus} className='minus' />
                </button>
                <input type="text" onChange={setAmountToCart} value={amountToCart} className='cardProduct__inner-input' />
                <button onClick={addUnit} className='cardCounter__inner-btn'>
                    <img src={plus} className='plus' />
                </button>
            </div>
            <button className='cardCounter__inner-btnAdd' onClick={addToCart}>Agregar al carrito</button>
        </div>
    )
};

export default ItemCount;









    // const verificacionStock = () =>{
    //     (amount > stock) && console.log(`La cantidad excede el stock. Stock máximo: ${(stock)}`);
    //     (amount === 0) && console.log('No está agregando productos al carrito');
    //     (amount <= stock && amount > 0) && onAdd();
    // }
