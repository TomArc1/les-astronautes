import './App.css';
import NavBar from './components/header/NavBar/NavBar';
import ItemDetailContainer from './components/item-components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/item-components/ItemListContainer/ItemListContainer';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';

const App = ()=> {
  // const [xyposition, setXyposition] = useState();

  // useEffect(()=>{
  //   const moverMouse = (e) =>{
  //     console.log({x: e.clientX, y: e.clientY});
  //     setXyposition({x: e.clientX, y: e.clientY});
  //     console.log(xyposition);
  //   }
  //   window.addEventListener('mousemove', moverMouse);

  //   return () =>{
  //     window.removeEventListener('mousemove', moverMouse);
  //   }

  // },[xyposition])


  return (
      <div>
          <header>
            <NavBar />
          </header>
          <main>
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
              path='*'
              element={
                <div><h1>Acá no hay nada</h1></div>
              } status={404}/>

            </Routes>
          </main>
      </div>
  );
}

export default App;
