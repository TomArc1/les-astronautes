import React, { useState, useEffect } from "react";
import './ItemListContainer.css';
import getItems from '../../../../api/catalogo';
import ItemList from '../ItemList/ItemList';
import Loader from "../../../misce-components/Loader/Loader";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    const [catalogue, setCatalogue] = useState([]);
    const [loader, setLoader] = useState(true);
    const { prodCat } = useParams()

    useEffect(()=>{
        getItems
        .then((res)=>{
            if(!prodCat){
                setCatalogue(res);
            }
            else{
                const categoyProducts = res.filter ((prod)=> prod.category === prodCat )
                setCatalogue(categoyProducts);
            }  
        })
        .catch((err)=> console.log(err))
        .finally(()=> setLoader(false))
    },[ prodCat ] )


    return(
        <div>
            <div>
                {(loader) 
                ? (< Loader />) 
                : (
                    <ItemList items={catalogue}/>
                    ) 
                }
            </div>
        </div>
    )
}

export default ItemListContainer; 
