import React from "react";
import CatalogueNavBar from '../CatalogueNavBar/CatalogueNavBar';
import ItemListContainer from '../../item-components/ItemListContainer/ItemListContainer';
import Banner from "../../misce-components/Banner/Banner";


const CatalogueContainer = () =>{
    return(
        <div>
            <Banner />
            <CatalogueNavBar/>
            <ItemListContainer/>
        </div>
    )
};

export default CatalogueContainer;