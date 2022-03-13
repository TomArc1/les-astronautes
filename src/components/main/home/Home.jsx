import React from "react";
import './home.css';
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
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



const Home = () =>{
    return(
        <div className="home">

            <div className="section1">
                <div className="section1__left">
                    <img src={sello} alt="Les Astronautes" className="section1__left-img"/>
                    <h1 className="section1__left-h1">VINOS SIN <br /> GRAVEDAD</h1>
                    <p className="section1__left-p">Descubrí nuestras variedades</p>
                </div>
                <div className="section1__right">
                    <div className="moonGroup">
                        <img src={star2r} alt="Les Astronaues" className="moonGroup-star2r"/>
                        <img src={star3} alt="Les Astronaues" className="moonGroup-star3"/>
                        <img src={moonSvg} alt="Les Astronautes" className="moonGroup-moon"/>
                    </div>
                    <div className="starsGroup-1">
                        <img src={star1} alt="Les Astronautes" className="starsGroup-1-star1" />
                        <img src={star2} alt="Les Astronautes" className="starsGroup-1-star2" />
                        <img src={star3} alt="Les Astronautes" className="starsGroup-1-star3" />
                    </div>
                    <div className="principalImgS1">
                        <img src={parallaxBack} alt="Les Astronautes" className="principalImgS1-paraback"/>
                        <img src={parallaxFront} alt="Les Astronautes" className="principalImgS1-parafront" />
                    </div>
                </div>
            </div>         


            <div className="section2">
                <div className="section2__left">
                    <div className="starsGroup-2a">
                        <img src={star1} alt="Les Astronautes" className="starsGroup-2-star1a" />
                        <img src={star2} alt="Les Astronautes" className="starsGroup-2-star2a" />
                        <img src={star3} alt="Les Astronautes" className="starsGroup-2-star3a" />
                    </div>
                    <div className="starsGroup-2b">
                        <img src={star1} alt="Les Astronautes" className="starsGroup-2-star1b" />
                        <img src={star2} alt="Les Astronautes" className="starsGroup-2-star2b" />
                        <img src={star3} alt="Les Astronautes" className="starsGroup-2-star3b" />
                    </div>
                    <div className="principalImgS2">
                        <img src={moonImg} alt="Les AStronautes" className="principalImgS2-moon" />
                        <img src={astroPlaying} alt="Les AStronautes" className="principalImgS2-astro" />
                        <img src={cloudsS2} alt="Les AStronautes" className="principalImgS2-cloud"/>
                    </div>
                </div>
                <div className="section2__right">
                    <div className="section2__right-title">
                        <h3 className="section2__right-title-h3">¡BIENVENIDOS!</h3>
                        <img src={barsS2} alt="Les AStronautes" className="section2__right-title-img" />
                    </div>
                    <p className="section2__right-text" >Les Astronautes es un proyecto familiar, creado en 2019. <br /> <br /> ¿Por qué Les Astronautes? El nombre se nos ocurrió en un viaje en tren, cuando viajábamos en Francia, camino a Paris. Estábamos soñando sobre un cosmonauta tocando piano en un planeta lejano, y de ahí empezamos con el tema del espacio. Somos soñadores. <br /> <br /> En este viaje decidimos que nuestros vinos iban a ser orgánicos, naturales, libres de pesticidas agrícolas, entre otros.</p>
                </div>
            </div>

            <div className="section3">
                <div className="section3__Inner">
                    <img src={cardNewProd} alt="Les Astronautes" className="section3__Inner-img" />
                    <div className="newProdCard1">
                        <div className="newProdCard1__left">
                            <img src={newProdTinto} alt="Les Astronautes" className="newProdCard1__left-wineimg" />
                            <img src={star1} alt="Les Astronautes" className="newProdCard1__left-star1-img"/>
                            <img src={star2} alt="Les Astronautes" className="newProdCard1__left-star2-img"/>
                        </div>
                        <div className="newProdCard1__right-wrapper">
                        <div className="newProdCard1__right">
                            <h4 className="newProdCard1__right-h4">Mercurio</h4>
                            <p className="newProdCard1__right-p">Malbec afrutado con leve aroma a chocolate y frutos rojos. Ideal para marinar con carnes.</p>
                            <Link to='/shop' className="newProdCard1__right-link">Cononer más</Link>
                        </div>
                        </div>
                    </div>
                    <div className="newProdCard2">
                        <div className="newProdCard2__left">
                            <img src={newProdBlanco} alt="Les Astronautes" className="newProdCard2__left-wineimg" />
                            <img src={star1} alt="Les Astronautes" className="newProdCard2__left-star1-img" />
                            <img src={star2} alt="Les Astronautes" className="newProdCard2__left-star2-img" />
                        </div>
                        <div className="newProdCard2__right-wrapper">
                        <div className="newProdCard2__right">
                            <h4 className="newProdCard2__right-h4">Plutón</h4>
                            <p className="newProdCard2__right-p">Malbec afrutado con leve aroma a chocolate y frutos rojos. Ideal para marinar con carnes.</p>
                            <Link to='/shop' className="newProdCard2__right-link">Cononer más</Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
};

export default Home;