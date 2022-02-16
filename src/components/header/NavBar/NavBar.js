import React from 'react';
import './NavBar.css';
import logoprovisional from '../../../assets/imgs/logoprovisional.jpeg';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () =>{
    return (
        <header className='header'>
            <Link to="/">
                <img src={logoprovisional} className='logoprovisional' alt='Les Astronautes' />
            </Link>
            <nav>
                <ul className='menu'>
                    <li className='menu__item'><NavLink to="/" className='menu__item-link'>Inicio</NavLink></li>
                    <li className='menu__item'><NavLink to="/category/tinto" className='menu__item-link'>Tintos</NavLink></li>
                    <li className='menu__item'><NavLink to="/category/blanco" className='menu__item-link'>Blancos</NavLink></li>
                    <li className='menu__item'><NavLink to="/cart" className='menu__item-link'><CartWidget /></NavLink></li>
                </ul>
            </nav>
            {/* <div className='burguer'>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div> */}
        </header>


    )
}

export default NavBar;

