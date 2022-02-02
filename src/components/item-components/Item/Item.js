import React from "react";
import './Item.css';

const Item = ({ item }) =>{
    console.log('lahsdhasdjashdgjs')
    return (
        <div className="Card">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>,            
        </div>
    )
};

export default Item;