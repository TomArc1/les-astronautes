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
                    <li className='menu__item'><NavLink to="/us" className='menu__item-link'>Nosotros</NavLink></li>
                    <li className='menu__item'><NavLink to="/shop" className='menu__item-link'>Shop</NavLink></li>
                    <li className='menu__item'><NavLink to="/cart" className='menu__item-link'><CartWidget /></NavLink></li>
                </ul>
            </nav>
        </header>


    )
}

export default NavBar;

