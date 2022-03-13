import React from "react";
import './footer.css';
import { Link } from "react-router-dom";
import logo from '../../assets/imgs/logo.png';
import wpp from '../../assets/svgs/wpp.svg';
import face from '../../assets/svgs/face.svg';
import insta from '../../assets/svgs/insta.svg';
import twitt from '../../assets/svgs/twitt.svg';

const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer__left">
                <img src={logo} alt="Les Astronautes" className="footer__left-img"/>
                <div className="footer__left-links">
                    <Link to='/' className="footer__left-links-1">Home</Link>
                    <Link to='/us' className="footer__left-links-2">Nosotros</Link>
                    <Link to='/shop' className="footer__left-links-3">Tienda</Link>
                </div>
            </div>
            <div className="footer__ right">
                <div className="footer__right-top">
                    <img src={wpp} alt="Les Astronautes" className="footer__right-top-wpp" />
                    <img src={face} alt="Les Astronautes" className="footer__right-top-face" />
                    <img src={insta} alt="Les Astronautes" className="footer__right-top-insta" />
                    <img src={twitt} alt="Les Astronautes" className="footer__right-top-twitt" />
                </div>
                <p className="footer__right-bottom" >Desarrollado por Tomás Arcaria <br /> Diseñado por Melisa Rinavera Henshaw</p>
            </div>
        </div>
    )
}
export default Footer;