import React, { useState } from "react";
import './catalogueNavBar.css'
import { Link, NavLink } from "react-router-dom";

const CatalogueNavBar = () =>{
    const [ bold, setBold ] = useState(true);

    const fontType = `${bold ? 'menu__item-link active' : 'menu__item-link' }`;

    const fontBold = () => setBold(true);
    const quitFontBold = () => setBold(false);

    return(
        <div className="catalogueNavBar">
            <ul className="catalogueNavBar__ul">
                <li><Link to="/shop" onClick={fontBold} className={fontType}>Todo</Link></li>
                <li><NavLink to="/shop/tinto" onClick={quitFontBold} className='menu__item-link'>Tintos</NavLink></li>
                <li><NavLink to="/shop/blanco" onClick={quitFontBold} className='menu__item-link'>Blancos</NavLink></li>
            </ul>
        </div>
    )   
}

export default CatalogueNavBar;