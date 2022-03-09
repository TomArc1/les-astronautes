import React, { useContext }  from "react";
import './ItemDetail.css';
import { useState } from "react/cjs/react.development";
import { Link } from "react-router-dom"; 
import { CartContext } from '../../../context/CartContext';
import ItemCount from "../../misce-components/ItemCount/ItemCount";
import starsGroup from '../../../assets/imgs/starsGroup.png';

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
                <img src={starsGroup} className="imgdetail-stars" />
            </div>
            <div className="itemdetail__info">
                <h1 className="itemdetail__info-h1">{item.name}</h1>
                <p className="itemdetail__info-p1">${item.price}</p> 
                <p className="itemdetail__info-p2">{item.blend}</p>
                <p className="itemdetail__info-p3">{item.description2}</p>
                {
                    (!amount) ?
                    <ItemCount stock={5} initial={1} onAdd={onAddUnits} />
                    :   
                    <Link to="/cart" className="goToCart">
                        <div className="goToCart-div">
                            <p className="goToCart-p">Ir al carrito</p>
                        </div>
                        </Link>
                }
            </div>
        </div>
    )
}

export default ItemDetail;