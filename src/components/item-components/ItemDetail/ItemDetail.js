import React, { useContext }  from "react";
import './ItemDetail.css';
import ItemCount from "../../misce-components/ItemCount/ItemCount";
import { useState } from "react/cjs/react.development";
import { Link } from "react-router-dom"; 
import { CartContext } from '../../../context/CartContext';

const ItemDetail = ( { item } ) =>{
    const [amount, setAmount] = useState();
    const { putInTheCart, cart } = useContext(CartContext);

    
    const onAddUnits = (units) => {
        setAmount(units);
        putInTheCart( units, item);
    }


    return(
        <div className="itemdetailcard">
            <div className="itemdetail__img-c">
                <img src={item.img} className="imgdetail"/>
            </div>
            <div className="itemdetail__info">
                <h1 className="itemdetail__info-h1">{item.name}</h1>
                <p className="itemdetail__info-p1">{item.blend}</p>
                <p className="itemdetail__info-p2">{item.description2}</p>
                <p className="itemdetail__info-p3">${item.price}</p> 
                {
                    (!amount) ?
                    <ItemCount stock={5} initial={1} onAdd={onAddUnits} />
                    :   
                    <Link to="/cart">Ir al carrito</Link>
                }
            </div>
        </div>
    )
}

export default ItemDetail;