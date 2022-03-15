import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) =>{
    const [amount, setAmount] = useState(()=>{
        const storageData = localStorage.getItem('selectedItemsInCart');
        return storageData ? JSON.parse(storageData).reduce((acc, prod)=> (acc += (prod.price*prod.units)), 0) : [];
    })

    const [cart, setCart] = useState(()=>{
        const storageData = localStorage.getItem('selectedItemsInCart');
        return storageData ? JSON.parse(storageData) : [];
    })

    useEffect(()=>{
        window.localStorage.setItem('selectedItemsInCart', JSON.stringify(cart))
    }, [cart])


    const totalPrice = ( cart ) =>{
        let value = cart.reduce((acc, prod)=> (acc += (prod.price*prod.units)), 0);
        return setAmount(value) 
    }

    const putInTheCart = (units, item) =>{
        const check = cart.find((prod)=> prod.name === item.name)
        if(check){
            const currentCart = [...cart];
            check.units += units;
            totalPrice(currentCart);
            return setCart(currentCart);
        }
        else{
            totalPrice([...cart,{...item, units}]);
            setCart([...cart,{...item, units}]);
        }
    }


    const emptyCart = () =>{
        setCart([]);
        setAmount(0);
        localStorage.removeItem('selectedItemsInCart')
    }

    
    const deleteProduct = (prod) =>{
        if(cart.length === 1){
            emptyCart();
            setAmount(0);
        } else {
            const currentCart = [...cart];
            const index = currentCart.indexOf(prod)
            currentCart.splice(index, 1);
            setCart(currentCart);
            totalPrice( currentCart );
        }
    }

    const deleteUnit = (prod) =>{
        if(prod.units > 1){
            prod.units -= 1;
            totalPrice( cart );
        } else {
            deleteProduct(prod);
            totalPrice( cart );
            console.log(totalPrice(cart));
        }
    }


    return(
        <>
            <CartContext.Provider value={{ cart, amount, putInTheCart, emptyCart, deleteUnit, deleteProduct, totalPrice }}>
                { children }
            </CartContext.Provider>
        </>
    )
}

export default CartContextProvider;