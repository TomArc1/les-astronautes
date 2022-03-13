import './App.css';
import NavBar from './components/header/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import CartListContainer from './components/main/CartComponents/CartListContainer/CartListContainer';
import ItemDetailContainer from './components/main/ItemComponents/ItemDetailContainer/ItemDetailContainer';
import PersonalDataContainer from './components/main/PersonalData-components/PersonalDataContainer/PersonalDataContainer';
import CatalogueContainer from './components/catalogue/CatalogueContainer/CatalogueContainer';
import NewItemContainer from './components/NewItemContainer/NewItemContainer';
import EditItemContainer from './components/EditItemContainer/EditItemContainer';
import Home from './components/main/home/Home';
import Us from './components/main/Us/Us';
import Error404 from './components/main/Error404/Error404';
import Loader from './components/misce-components/Loader/Loader';

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
              element={ <Home /> } />

              <Route 
              path='/us' 
              element={ <Us/> } />
              
              <Route 
              path='/loader' 
              element={ <Loader/> } />

             <Route 
              path='/shop' 
              element={ <CatalogueContainer /> } />
              

             <Route
              path='/shop/:prodCat'
              element={ <CatalogueContainer /> } />

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
              element={<Error404 />}/>

            </Routes>
          </main>
      </div>
  );
}

export default App;
