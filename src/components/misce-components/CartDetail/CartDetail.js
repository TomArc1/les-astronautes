import React,{ useContext } from "react";
import './CartDetail.css';

const CartDetail = ( {prod} ) =>{
    return(
        <div>
                <h3>{prod.name}</h3>
                <p>{prod.description}</p>
                <input type='text' value={prod.units} />
                <p>{prod.price}</p>
        </div>
    )
}
export default CartDetail;