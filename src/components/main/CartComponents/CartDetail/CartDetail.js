import React,{ useContext, useState } from "react";
import './CartDetail.css';
import { CartContext } from "../../../../context/CartContext";
import trash from '../../../../assets/svgs/hr-Trash.svg';

const CartDetail = ( {prod} ) =>{
    const [units, setUnits] = useState(prod.units)
    const { deleteUnit, deleteProduct } = useContext(CartContext);

    const removeToCart = () =>{
        if(units > 1){
            deleteUnit(prod);
            setUnits(units - 1);
        }else{
            deleteProduct(prod)
        }
    }

    return(
        <div className="cartDetailCard">
                <div className="cartDetailCard-left">
                    <h3 className="cartDetailCard-left-h3">{prod.name}</h3>
                    <p className="cartDetailCard-left-p">{prod.blend}</p>
                </div>
                <div className="cartDetailCard-right">
                    <p className="cartDetailCard-right-desc">{prod.description}</p>
                    <p className="cartDetailCard-right-units">Cantidad: {units}</p>
                    <p className="cartDetailCard-right-price">${prod.price}</p>
                </div>
                <button onClick={removeToCart} className="cartDetailCard-right-btn">
                    <img src={trash} alt="Les Astronautes" className="cartDetailCard-right-btnImg" />
                </button>
        </div>
    )
}
export default CartDetail;