import react, {useState, useEffect} from "react";
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import getItems from "../../../api/catalogo";

const ItemDetailContainer = ()=>{
    const [productSelected, setProductSelected] = useState('')
    
    useEffect(()=>{
        getItems
        .then((res)=>{
            const filtro = res.find((item)=> item.id === 101);
            setProductSelected(filtro)
        })
    }, []);
    
    
    return(
        <div>
            <ItemDetail item={productSelected}/>
        </div>

    )
}

export default ItemDetailContainer;