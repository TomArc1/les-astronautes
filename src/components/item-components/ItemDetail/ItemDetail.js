import react from "react";
import './ItemDetail.css';
import ItemCount from "../../misce-components/ItemCount";
import { useState } from "react/cjs/react.development";
import { Link } from "react-router-dom"; 

const ItemDetail = ( { item } ) =>{
    const [amount, setAmount] = useState();

    
    const onAddUnits = (amountToCart) => {
        console.log(amountToCart)
        setAmount(amountToCart);
        console.log(amount)
    }

    return(
        <div>
            <div>
                <img src={item.img} className="imgdetail"/>
            </div>
            <div>
                <h1>{item.name}</h1>
                <p>{item.blend}</p>
                <p>{item.description2}</p>
                <p>${item.price}</p> 
                {
                    (!amount) ?
                    <ItemCount stock={5} initial={1} onAdd={onAddUnits} />
                    :   
                    <Link to="/cart">Ir al carrito</Link>
                }
            </div>
        </div>
    )
}

export default ItemDetail;