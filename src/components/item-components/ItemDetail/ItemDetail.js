import react from "react";
import './ItemDetail.css';

const ItemDetail = ( { item } ) =>{
    return(
        <div>
            <div>
                <img src={item.img}/>
            </div>
            <div>
                <h1>{item.name}</h1>
                <p>{item.blend}</p>
                <p>{item.description2}</p>
                <p>${item.price}</p> 
                <button>Comprar</button>
            </div>
        </div>
    )
}

export default ItemDetail;