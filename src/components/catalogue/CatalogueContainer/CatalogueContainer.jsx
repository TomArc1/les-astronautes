import React from "react";
import CatalogueNavBar from '../CatalogueNavBar/CatalogueNavBar';
import ItemListContainer from '../../item-components/ItemListContainer/ItemListContainer';


const CatalogueContainer = () =>{
    return(
        <div>
            <CatalogueNavBar/>
            <ItemListContainer/>
        </div>
    )
};

export default CatalogueContainer;