import React, {useState, useEffect} from "react";
import './ItemDetailContainer.css';
import { useParams, Link } from "react-router-dom";
import { getItemsById } from '../../../../api/catalogo';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../../../misce-components/Loader/Loader';
import arrow from '../../../../assets/svgs/arrow.svg';
import Footer from "../../../Footer/Footer";


const ItemDetailContainer = ()=>{
    const [productSelected, setProductSelected] = useState('');
    const [loader, setLoader] = useState(false);
    const { prodId } = useParams();
    
    useEffect(()=>{
        getItemsById(prodId)
        .then((replica) =>{
            if(replica.exists()){
                setProductSelected({ id: replica.id, ...replica.data()});
                }
            })
        .catch((err)=>{
            console.log(err);
        })
        .finally(()=>{
            setLoader(true)
        })
    }, [prodId]);
    
    return(
        <>
            {
                (!loader) 
                ? < Loader /> 
                : 
                <div>
                   <div className="itemDetailContainer-Wrapper">
                        <div className="itemDetailContainer-Inner">
                            <Link to='/' className="itemDetailContainer-Inner__linkShop" >
                                <img src={arrow} alt='Les Astronautes' className="itemDetailContainer-Inner__linkShop-img" />
                                <p className="itemDetailContainer-Inner__linkShop-p">Shop</p>
                            </Link>
                            <ItemDetail item={productSelected}/>
                        </div>
                    </div>   
                    <Footer/>
                </div>
            }
        </>

    )
}

export default ItemDetailContainer;