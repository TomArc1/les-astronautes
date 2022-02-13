import React from "react";
import './Item.css';
import { Link } from "react-router-dom";

const Item = ({ item }) =>{
    return (
        <div className="cardItem">
            <Link to={`/producto/${item.id}`}>
                <img src={item.img} className="cardItem-img" />
                <h3 className="CardItem-h3">{item.name}</h3>
                <p className="CardItem-p">{item.description}</p>
                <p className="CardItem-p">{item.price}</p>  
            </Link>          
        </div>
    )
};

export default Item;