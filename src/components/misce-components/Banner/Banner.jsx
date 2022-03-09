import React from "react";
import './banner.css';
import astroBanner from '../../../assets/imgs/astroBanner.png';
import wineBanner from '../../../assets/imgs/wineBanner.png';
import moonImgBanner from '../../../assets/imgs/moonImgBanner.png';
import starsBanner from '../../../assets/imgs/starsBanner.png';
import meat from '../../../assets/svgs/meat.svg';
import cheese from '../../../assets/svgs/cheese.svg';


const Banner = () =>{
    return(
        <div className="banner">
            <div className="bannerLeft">
                <div lassName="bannerLeft__inner">
                    <img src={astroBanner} alt='Les Astronautes' className="bannerLeft__inner-astro"/>
                    <img src={wineBanner} alt='Les Astronautes' className="bannerLeft__inner-wine"/>
                </div>
            </div>
            <div className="bannerRight">
                <div className="bannerRight__inner">
                    <img src={starsBanner} alt='Les Astronautes' className="bannerRight__inner-stars"/>
                    <img src={moonImgBanner} alt='Les Astronautes' className="bannerRight__inner-moon"/>
                    <div className="bannerRight__inner-texts">
                        <p className="bannerRight__inner-texts-p1">Nuevo Varietal</p>
                        <h4 className="bannerRight__inner-texts-h4">Mercurio</h4>
                        <p className="bannerRight__inner-texts-p2">Malbec afrutado con leve aroma a frutos rojos. <br /> Ideal para marinar con:</p>
                        <div className="bannerRight__inner-meals">
                            <div className="bannerRight__inner-meals-meat">
                                <img src={meat} alt='Les Astronautes' className="bannerRight__inner-meals-meat-img" />
                                <p className="bannerRight__inner-meals-meat-p">carnes <br /> rojas</p>
                            </div>
                            <div className="bannerRight__inner-meals-cheese">
                                <img src={cheese} alt='Les Astronautes' className="bannerRight__inner-meals-cheese-img" />
                                <p className="bannerRight__inner-meals-meat-p">quesos <br /> varios</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
};

export default Banner;