import './App.css';
import NavBar from './components/header/NavBar/NavBar';
import ItemDetailContainer from './components/item-components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/item-components/ItemListContainer/ItemListContainer';

const App = ()=> {
  return (
    <div>
        <header>
          <NavBar />
        </header>
        <ItemListContainer greeting = 'Vinos más allá de este mundo' />
        <ItemDetailContainer/>
    </div>
  );
}

export default App;
