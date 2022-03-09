import React from "react";
import './Item.css';
import { Link } from "react-router-dom";

const Item = ({ item }) =>{
    return (
        <div className="cardItem">
            <Link to={`/producto/${item.id}`} className="card-link" >
                <div className="cardItem-img-c">
                    <img src={item.img} className="cardItem-img" />
                </div>
                <div className="cardItem-info">
                    <h3 className="cardItem-info__h3">{item.name}</h3>
                    <p className="cardItem-info__p1">{item.blend}</p>
                    <p className="cardItem-info__p2">${item.price}</p>
                    <button className="cardItem-info__btn">Ver más</button>  
                </div>
            </Link>          
        </div>
    )
};

export default Item;