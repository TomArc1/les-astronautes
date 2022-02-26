import './App.css';
import NavBar from './components/header/NavBar/NavBar';
import { Routes, Route, Link } from 'react-router-dom';
import CartListContainer from './components/misce-components/CartListContainer/CartListContainer';
import ItemDetailContainer from './components/item-components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/item-components/ItemListContainer/ItemListContainer';
import PersonalDataContainer from './components/PersonalData-components/PersonalDataContainer/PersonalDataContainer';

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
              path='/category/:prodCat'
              element={ <ItemListContainer greeting = 'Categoría en específico' /> } />

              
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
