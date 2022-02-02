import React from "react";
import './ItemList.css';
import Item from '../Item/Item';


const ItemList = ( {items} ) =>{
    console.log(items);
    return(
        <div>
            {items.map((item)=>{
                <Item key={item.id} item={item}/>
            })}
        </div>
    )
};


export default ItemList;