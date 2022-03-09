import React from "react";
import './us.css';
import astroRelax from '../../../assets/imgs/astro-relax.png';
import astroRelax2 from '../../../assets/imgs/astro-relax2.png';
import ovni from '../../../assets/imgs/ovni.png';


const Us = () =>{
    return(
        <div className="usWrapper">
            <div className="usInner">
                <h1 className="usInner-h1">Lo sentimos! sector espacial en construcción.</h1>
                <p className="usInner-p">Nuestros astronautas se están tomando un pequeño descansito por el momento</p>
                <img src={ovni} className="usInner-ovni" />
                <div className="usInner-astros" >
                    <img src={astroRelax} className="usInner-astro-1"/>
                    <img src={astroRelax2} className="usInner-astro-2" />
                </div>
            </div>
        </div>
    )   
}

export default Us;