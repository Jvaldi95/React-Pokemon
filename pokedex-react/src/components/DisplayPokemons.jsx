import Card from "./Card"; 

export default function DisplayPokemons({pokemones}) {

  return (
    <div className="row justify-content-center">
    {pokemones != null ? pokemones.map((pj) => <Card pokemon={pj}/>) : <h1>No hay pokemones </h1>}
    </div>
  )
}
