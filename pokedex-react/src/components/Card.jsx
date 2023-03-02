import { useEffect, useState } from "react"
import axios from "axios";

export default function Card({pokemon}) {

    const [onePokemon, setOnePokemon] = useState({
        name: "",
        sprites : {front_default: ''},
        description: ""
    })

    useEffect( () => {
        getPokemon(pokemon.url)
    }, [pokemon])

    const getPokemon = (url) =>{
        axios.get(url)
        .then((response) => {
            setOnePokemon(prevState => ({...prevState, name: response.data.name, sprites: response.data.sprites}));
            axios.get(`https://pokeapi.co/api/v2/pokemon-species/${response.data.id}`)
            .then((response) => {
                const englishDescription = response.data.flavor_text_entries.find(description => description.language.name === "en");
                setOnePokemon(prevState => ({...prevState, description: englishDescription.flavor_text}));
            })
        })
    }

    return (
        <div className="card m-2 text-center " style={{width: '18rem'}}>
            <img src={onePokemon.sprites.front_default} className="card-img-top" alt="pokemon-img"/>
            <div className="card-body">
                <h5 className="card-title">{onePokemon.name}</h5>
                <p className="card-text">{onePokemon.description}</p>
            </div>
        </div>
    )
}

