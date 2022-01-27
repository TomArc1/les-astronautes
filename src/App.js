import logo from './logo.svg';
import './App.css';
import NavBar from './components/header/NavBar'
import ItemListContainer from './components/header/ItemListContainer'

const App = ()=> {
  return (
    <div>
        <header>
          <NavBar />
        </header>
        <ItemListContainer greeting = ' Vino Torrontes 750ml' />
    </div>
  );
}

export default App;
