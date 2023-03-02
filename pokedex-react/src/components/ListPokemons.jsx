import {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import DisplayPokemons from './DisplayPokemons';
import { AppContext } from '../services/provider';

export default function ListPokemons(){
    const [pokemons,setPokemons] = useState([{
        name:"bulbasaur",
        url:"https://pokeapi.co/api/v2/pokemon/1/"
    }]);

    const [listPokemons, setListPokemons] = useContext(AppContext);

    const getPokemons = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
        .then((response) => {
            //console.log(response);
            setPokemons(response.data.results);
            //console.log(pokemons);
            setListPokemons(response.data.results);
        } )
    }

    useEffect(() => {
        getPokemons();
    },[])

    return(
        <div>
            <DisplayPokemons pokemones={pokemons} />
            
        </div>
    )
}