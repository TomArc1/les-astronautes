import './App.css';
import NavBar from './components/header/NavBar/NavBar';
import { Routes, Route, Link } from 'react-router-dom';
import CartListContainer from './components/misce-components/CartListContainer/CartListContainer';
import ItemDetailContainer from './components/item-components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/item-components/ItemListContainer/ItemListContainer';
import PersonalDataContainer from './components/PersonalData-components/PersonalDataContainer/PersonalDataContainer';
import CatalogueContainer from './components/catalogue/CatalogueContainer/CatalogueContainer';
import NewItemContainer from './components/NewItemContainer/NewItemContainer';
import EditItemContainer from './components/EditItemContainer/EditItemContainer';

const App = ()=> {



  return (
        <div>
          
          <header>
            <NavBar />
          </header>

          <main className='main'>
            <Routes>
              <Route 
              path='/' 
              element={ <ItemListContainer greeting = 'Vinos más allá de este mundo' /> } />
              
             <Route 
              path='/shop' 
              element={ <CatalogueContainer greeting = 'Vinos más allá de este mundo' /> } />
              

             <Route
              path='/shop/:prodCat'
              element={ <CatalogueContainer greeting = 'Categoría en específico' /> } />

             <Route 
              path='/producto/:prodId' 
              element={<ItemDetailContainer/>} />

             <Route
              path='/cart'
              element={<CartListContainer/>} />

             <Route
              path='/personaldata'
              element={<PersonalDataContainer/>} />

              <Route
              path='/newitemAdd'
              element={<NewItemContainer/>} />

              <Route
              path='/item/edit/:id'
              element={<EditItemContainer/>} />               

             <Route
              path='*'
              element={
                <div>
                  <h1>Huston... tenemos un problema. Acá no hay nada!</h1>
                  <Link to={'/'}> Volver a la tierra</Link>
                </div>
              }/>

            </Routes>
          </main>
      </div>
  );
}

export default App;
