import React from "react";
import './home.css';
import { Link } from "react-router-dom";
import sello from '../../../assets/imgs/sello.png';
import parallaxFront from '../../../assets/imgs/parallax/parallax-front.png';
import parallaxBack from '../../../assets/imgs/parallax/parallax-back.png';
import moonSvg from '../../../assets/svgs/moon.svg';
import star1 from '../../../assets/svgs/star-1.svg';
import star2 from '../../../assets/svgs/star-2.svg';
import star2r from '../../../assets/svgs/star-2r.svg';
import star3 from '../../../assets/svgs/star-3.svg';
import moonImg from '../../../assets/imgs/moonImg.png';
import astroPlaying from '../../../assets/imgs/astro-playing.png';
import cloudsS2 from '../../../assets/imgs/clouds-s2.png';
import barsS2 from '../../../assets/imgs/bars-s2.png';
import cardNewProd from '../../../assets/imgs/cardNewProducts.png';
import newProdTinto from '../../../assets/imgs/newProduct-tinto.png';
import newProdBlanco from '../../../assets/imgs/newProduct-blanco.png';
import wpp from '../../../assets/svgs/wpp.svg';
import face from '../../../assets/svgs/face.svg';
import insta from '../../../assets/svgs/insta.svg';
import twitt from '../../../assets/svgs/twitt.svg';


const Home = () =>{
    return(
        <div className="home">

            <div className="section1">
                <div className="section1__left">
                    <img src={sello} alt="Les Astronautes" className="section1__left-img"/>
                    <h1 className="section1__left-h1">Vinos sin <br /> gravedad</h1>
                    <p className="section1__left-p">Descubrí nuestras variedades</p>
                </div>
                <div className="section1__right">
                    <div className="moonGroup">
                        <img src={moonSvg} alt="Les Astronautes"/>
                        <img src={star2r} alt="Les Astronaues" />
                        <img src={star3} alt="Les Astronaues" />
                    </div>
                    <div className="starsGroup-1">
                        <img src={star1} alt="Les Astronautes" />
                        <img src={star2} alt="Les Astronautes" />
                        <img src={star3} alt="Les Astronautes" />
                    </div>
                    <div className="principalImgS1">
                        <img src={parallaxBack} alt="Les Astronautes" />
                        <img src={parallaxFront} alt="Les Astronautes" />
                    </div>
                </div>
            </div>         


            <div className="section2">
                <div className="section2__left">
                    <div className="starsGroup-2">
                        <img src={star1} alt="Les Astronautes" />
                        <img src={star2} alt="Les Astronautes" />
                        <img src={star3} alt="Les Astronautes" />
                    </div>
                    <div className="starsGroup-3">
                        <img src={star1} alt="Les Astronautes" />
                        <img src={star2} alt="Les Astronautes" />
                        <img src={star3} alt="Les Astronautes" />
                    </div>
                    <div className="principalImgS2">
                        <img src={moonImg} alt="Les AStronautes" />
                        <img src={astroPlaying} alt="Les AStronautes" />
                        <img src={cloudsS2} alt="Les AStronautes" />
                    </div>
                </div>
                <div className="section2__right">
                    <div className="section2__right-title">
                        <h3>Bienvenidos!</h3>
                        <img src={barsS2} alt="Les AStronautes" />
                        <p>Les Astronautes es un proyecto familiar, creado en 2019. <br /> <br /> ¿Por qué Les Astronautes? El nombre se nos ocurrió en un viaje en tren, cuando viajábamos en Francia, camino a Paris. Estábamos soñando sobre un cosmonauta tocando piano en un planeta lejano, y de ahí empezamos con el tema del espacio. Somos soñadores. <br /> <br /> En este viaje decidimos que nuestros vinos iban a ser orgánicos, naturales, libres de pesticidas agrícolas, entre otros.
                        </p>
                    </div>
                </div>
            </div>

            <div className="section3">
                <img src={cardNewProd} alt="Les Astronautes" />
                <div className="newProdCard1">
                    <div className="newProdCard1__left">
                        <img src={newProdTinto} alt="Les Astronautes" />
                        <img src={star1} alt="Les Astronautes" />
                        <img src={star2} alt="Les Astronautes" />
                    </div>
                    <div className="newProdCard1__right">
                        <h4>Mercurio</h4>
                        <p>Malbec afrutado con leve aroma a chocolate y frutos rojos. Ideal para marinar con carnes.</p>
                        <Link to='/shop'>Cononer más</Link>
                    </div>
                </div>
                <div className="newProdCard2">
                    <div className="newProdCard2__left">
                        <img src={newProdBlanco} alt="Les Astronautes" />
                        <img src={star1} alt="Les Astronautes" />
                        <img src={star2} alt="Les Astronautes" />
                    </div>
                    <div className="newProdCard2__right">
                        <h4>Plutón</h4>
                        <p>Malbec afrutado con leve aroma a chocolate y frutos rojos. Ideal para marinar con carnes.</p>
                        <Link to='/shop'>Cononer más</Link>
                    </div>
                </div>
            </div>


        </div>
    )
};

export default Home;