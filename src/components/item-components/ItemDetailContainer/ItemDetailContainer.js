import react, {useState, useEffect} from "react";
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import getItems from "../../../api/catalogo";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ()=>{
    const [productSelected, setProductSelected] = useState('')
    const { prodId } = useParams();
    
    useEffect(()=>{
        getItems
        .then((res)=>{
            const filtro = res.find((item)=> item.id === parseInt(prodId));
            setProductSelected(filtro)
        })
        .catch((err)=> console.log(err))
        // .finally(()=>)
    }, [prodId]);
    
    
    return(
        <div>
            <ItemDetail item={productSelected}/>
        </div>

    )
}

export default ItemDetailContainer;