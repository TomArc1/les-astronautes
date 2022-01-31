import React from "react";
import './ItemListContainer.css';
import ItemCount from "../misce-components/ItemCount";

const ItemListContainer = ({ greeting }) => {

    const agregarItems = () =>{
            console.log('Productos agregados!!');
    }


    return(
        <div>
            <p>El producto seleccionado es : { greeting }</p>
            <ItemCount stock={5} initial={1} onAdd={agregarItems} />
        </div>
    )
}

export default ItemListContainer; 