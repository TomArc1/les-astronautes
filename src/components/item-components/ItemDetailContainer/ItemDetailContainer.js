import React, {useState, useEffect} from "react";
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getItemsById } from '../../../api/catalogo';
import { useParams } from "react-router-dom";

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
        <div>
            {
                (loader) ? <ItemDetail item={productSelected}/> : <h1>Cargando...</h1>
            }
            
        </div>

    )
}

export default ItemDetailContainer;