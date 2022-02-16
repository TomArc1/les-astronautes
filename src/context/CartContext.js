import React, { createContext, useState } from 'react';

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) =>{
    const [cart, setCart] = useState([])

    const putInTheCart = (units, item) =>{
        console.log( units, item )
        setCart([...cart,{...item, units} ]);
        console.log(cart)
    }
    console.log(cart)
    

    const emptyCart = () =>{setCart([]);}

    return(
        <>
            <CartContext.Provider value={{ cart, putInTheCart, emptyCart }}>
                { children }
            </CartContext.Provider>
        </>
    )
}

export default CartContextProvider;