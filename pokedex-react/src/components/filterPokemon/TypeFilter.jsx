import React, { useState, useEffect } from 'react';
import axios from 'axios';


function FilterPokemonByType() {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    const fetchTypes = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/type');
      setTypes(response.data.results);
    };

    fetchTypes();
  }, []);

  useEffect(() => {
    const fetchFilteredPokemon = async () => {
      if (selectedType) {
        const response = await axios.get(`https://pokeapi.co/api/v2/type/${selectedType}`);
        setFilteredPokemon(response.data.pokemon);
      } else {
        setFilteredPokemon([]);
      }
    };

    fetchFilteredPokemon();
  }, [selectedType]);

  const handleTypeSelect = (e) => {
    setSelectedType(e.target.value);
  };

  const handleRestart = () => {
    setSelectedType('');
    setFilteredPokemon([]);
  };

  return (
    <>
      <h1 className="text-center mb-4">Filter Pokemon by Type</h1>
      <div className="row mb-4">
        <div className="col-md-4 offset-md-4">
          <label htmlFor="type-select" className="sr-only">
          </label>
          <select id="type-select" value={selectedType} onChange={handleTypeSelect} className="form-control">
            <option value="">Select a type</option>
            {types.map((type) => (
              <option key={type.name} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {filteredPokemon.length > 0 && (
        <div className="row">
          {filteredPokemon.map((pokemon) => (
            <div key={pokemon.pokemon.name} className="col-md-3 mb-4">
              <div className="card p-2">
                <img
                  className="card-img-top mx-auto"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokemon.url.split('/')[6]}.png`}
                  alt={pokemon.pokemon.name} />
                <div className="card-body text-center">
                  <h5 className="card-title text-capitalize">{pokemon.pokemon.name}</h5>
                  <p className="card-text mb-1">
                    <strong>Type:</strong> {selectedType}
                  </p>
                  <p className="card-text">
                    <strong>Number:</strong> {pokemon.pokemon.url.split('/')[6]}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="col-md-12 mt-4 text-center">
            <button className="btn btn-primary" onClick={handleRestart}>
              Restart
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default FilterPokemonByType;


