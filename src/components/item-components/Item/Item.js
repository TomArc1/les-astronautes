import React from "react";
import './Item.css';
import { Link } from "react-router-dom";

const Item = ({ item }) =>{
    return (
        <div className="CardItem">
            <Link to={`/producto/${item.id}`}>
                <img src={item.img} className="imgsCart" />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.price}</p>  
            </Link>          
        </div>
    )
};

export default Item;