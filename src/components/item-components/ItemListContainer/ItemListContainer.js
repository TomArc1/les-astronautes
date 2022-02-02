import React, { useState, useEffect } from "react";
import './ItemListContainer.css';
import ItemCount from "../../misce-components/ItemCount";
import invocarCatalogo from "../../../api/catalogo";
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
    const [catalogue, setCatalogue] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(()=>{
        invocarCatalogo
        .then((res)=>{
            setCatalogue(res);
        })
        .finally(()=>{
            setLoader(false)
        })
    },[] )

    console.log(catalogue)

    const agregarItems = () =>{console.log('Productos agregados!!');}


    return(
        <div>
            <p>{ greeting }</p>
            <div>
                {(loader) ? (<h2>Cargando...</h2>) : (<ItemList items={catalogue}/>) }
            </div>
            <ItemCount stock={5} initial={1} onAdd={agregarItems} />
        </div>
    )
}

export default ItemListContainer; 