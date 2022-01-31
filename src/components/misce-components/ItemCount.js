import React, { useState } from 'react';
import './ItemCount.css';
import vinoimg from '../../assets/imgs/imgvinoprueba.png';
import plus from '../../assets/svgs/plus.svg';
import minus from '../../assets/svgs/minus.svg';

const ItemCount = ({ stock, initial, onAdd }) =>{
    const [amount, setAmount] = useState(initial)

    const addUnit = () => setAmount( amount + 1);

    const subtractUnit = () =>(amount >= 1) && setAmount( amount - 1 );

    const verificacionStock = () =>{
        (amount > stock) && console.log(`La cantidad excede el stock. Stock máximo: ${(stock)}`);
        (amount === 0) && console.log('No está agregando productos al carrito');
        (amount <= stock && amount > 0) && onAdd();
    }

    return(
        <div className='cardProduct'>
            <img src={vinoimg} alt='vino imagen prueba' className='imgvinoprueba' />
            <p>Un vinito</p>
            <div className='cardProduct__inner' >
                <button onClick={subtractUnit}>
                    <img src={minus} className='minus' />
                </button>
                <input type="text" onChange={setAmount} value={amount} className='cardProduct__inner-input' />
                <button onClick={addUnit}>
                    <img src={plus} className='plus' />
                </button>
            </div>
            <button className='btnAdd' onClick={verificacionStock}>Agregar al carrito</button>
        </div>
    )
};

export default ItemCount;