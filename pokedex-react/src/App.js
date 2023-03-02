import Form from './components/SearchBar/Form';
import ListPokemons from './components/ListPokemons';
import Navbar from './components/Navbar/Navbar';
import MyProvider from './services/provider';
import FilterPokemonByType from './components/filterPokemon/TypeFilter';


function App() {
  return (
    <MyProvider>
    <div>
      <Navbar title="PokeApp" />
        <div className='container'>
            <Form />
            <FilterPokemonByType />
            <ListPokemons />  
        </div>
      </div>
    </MyProvider>
  );
}

export default App;
