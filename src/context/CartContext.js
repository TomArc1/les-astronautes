import React, { createContext, useState } from 'react';

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) =>{
    const [cart, setCart] = useState([])

    const putInTheCart = (units, item) =>{
        const check = cart.find((prod)=> prod.name === item.name)
        if(check){
            const currentCart = [...cart];
            check.units += units;
            return setCart(currentCart);
        }
        else{
            setCart([...cart,{...item, units} ]);
        }
    }


    const emptyCart = () =>{setCart([]);}

    
    const deleteProduct = (prod) =>{
        if(cart.length === 1){
            emptyCart();
        } else {
            const currentCart = [...cart];
            const index = currentCart.indexOf(prod)
            currentCart.splice(index, 1);
            return setCart(currentCart);
        }
    }

    const deleteUnit = (prod) =>{
        if(prod.units > 1){
            prod.units -= 1;
        } else {
            deleteProduct(prod);
        }
    }




    return(
        <>
            <CartContext.Provider value={{ cart, putInTheCart, emptyCart, deleteUnit, deleteProduct }}>
                { children }
            </CartContext.Provider>
        </>
    )
}

export default CartContextProvider;