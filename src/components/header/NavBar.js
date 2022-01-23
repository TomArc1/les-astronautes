import './NavBar.css';
import logoprovisional from './logoprovisional.jpeg';

const NavBar = () =>{
    return (
        <div className='header'>
            <img src={logoprovisional} className='logoprovisional' alt='Les Astronautes' />
            <nav>
                <ul className='menu'>
                    <li className='menu__item'><a href='#' className='menu__item-link'>Inicio</a></li>
                    <li className='menu__item'><a href='#' className='menu__item-link'>Nosotros</a></li>
                    <li className='menu__item'><a href='#' className='menu__item-link'>Catalogo</a></li>
                    <li className='menu__item'><a href='#' className='menu__item-link'>Carrito</a></li>
                </ul>
            </nav>
            {/* <div className='burguer'>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div> */}
        </div>


    )
}

export default NavBar;
