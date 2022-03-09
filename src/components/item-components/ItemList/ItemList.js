import React from "react";
import './ItemList.css';
import Item from '../Item/Item';


const ItemList = ( {items} ) =>{
    return(
        <div className="catalogue-list">
            {items.map((item)=>{
               return <Item key={item.id} item={item}/>
            })}
        </div>
    )
};


export default ItemList;