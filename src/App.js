import './App.css';
import NavBar from './components/header/NavBar/NavBar';
import ItemListContainer from './components/item-components/ItemListContainer/ItemListContainer';

const App = ()=> {
  return (
    <div>
        <header>
          <NavBar />
        </header>
        <ItemListContainer greeting = 'Vinos más allá de este mundo' />
    </div>
  );
}

export default App;
