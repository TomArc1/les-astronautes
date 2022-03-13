import React,{ useState } from "react";
import './cartDetailResume.css';

const CartDetailResume = ( {prod} ) =>{
    const [units, setUnits] = useState(prod.units)


    return(
        <div className="cardResume">
                <h3 className="cardReume-h5">{prod.name}</h3>
                <p className="cardReume-p">Cantidad: {units}</p>
        </div>
    )
}
export default CartDetailResume;