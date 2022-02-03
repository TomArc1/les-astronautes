import React from "react";
import './Item.css';

const Item = ({ item }) =>{
    return (
        <div className="CardItem">
            <img src={item.img} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>            
        </div>
    )
};

export default Item;