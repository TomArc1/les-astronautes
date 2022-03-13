import React from "react";
import CatalogueNavBar from '../CatalogueNavBar/CatalogueNavBar';
import ItemListContainer from '../../main/ItemComponents/ItemListContainer/ItemListContainer';
import Banner from "../../misce-components/Banner/Banner";
import Footer from "../../Footer/Footer";


const CatalogueContainer = () =>{
    return(
        <div>
            <Banner />
            <CatalogueNavBar/>
            <ItemListContainer/>
            <Footer/>
        </div>
    )
};

export default CatalogueContainer;