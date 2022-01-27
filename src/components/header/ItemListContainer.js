import React from "react";
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
    return(
        <div>
            <p>El producto seleccionado es : { greeting }</p>
        </div>
    )
}

export default ItemListContainer; 