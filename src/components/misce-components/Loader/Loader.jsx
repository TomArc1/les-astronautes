import React from 'react';
import './loader.css';
import moonLoader from '../../../assets/imgs/moonLoader.png';

const Loader = () =>{
    return(
        <div className='loaderWrapper'>
            <div className='loaderInner'>
                <h1 className='loaderInner__h1'>Trayendo los vinos a la órbita...</h1>
                <img src={moonLoader} className='loaderInner__img'/>
            </div>
        </div>
    )
}

export default Loader; 