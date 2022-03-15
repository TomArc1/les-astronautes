import React from "react";
import './error404.css';
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import marte from '../../../assets/imgs/marte.png';
import mercurio from '../../../assets/imgs/mercurio.png';
import saturno from '../../../assets/imgs/saturno.png';
import planeta from '../../../assets/imgs/planeta.png';
import cohete from '../../../assets/imgs/cohete.png';

const Error404 = () =>{
    return(
        <div>
            <div className="error404-wrapper">
                <div className="error404-inner">
                    <h1 className="error404-inner__h1">Houston, tenemos un problema...</h1>
                    <p className="error404-inner__p">Error 404: sector espacial no encontrado!</p>
                    <div className="panets-container">
                        <img src={mercurio} className="mercurio" alt="Les Astronautes" />
                        <img src={marte} className="marte" alt="Les Astronautes"/>
                        <img src={cohete} className="cohete" alt="Les Astronautes"/>
                        <img src={saturno} className="saturno" alt="Les Astronautes"/>
                        <img src={planeta} className="planeta" alt="Les Astronautes"/>
                    </div>
                    <Link to='/' className="error404-inner__p">Volver a la base lunar / Ir al Inicio.</Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default Error404;