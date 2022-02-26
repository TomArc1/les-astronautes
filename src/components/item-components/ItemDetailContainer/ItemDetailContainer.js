import React, {useState, useEffect} from "react";
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getItemsById } from "../../../api/catalogo";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ()=>{
    const [productSelected, setProductSelected] = useState('');
    // const [loader, setLoader] = useState(true);
    const { prodId } = useParams();
    
    useEffect(()=>{
        getItemsById(prodId)


        // .then((res)=>{
        //     const targetedItem = doc(db, 'catalogue', prodId );
        //     getDoc(targetedItem)
        //     .then((replica) =>{
        //         if(replica.exists()){
        //             setProductSelected({ id: replica.id, ...replica.data()});
        //         }
        //     })
        //     .catch((err)=>{
        //         console.log(err)
        //     })

        // })
        // .catch((err)=> console.log(err))
        // .finally(()=> setLoader(false))
    }, [prodId]);
    
    return(
        <div>
            <ItemDetail item={productSelected}/>
        </div>

    )
}

export default ItemDetailContainer;