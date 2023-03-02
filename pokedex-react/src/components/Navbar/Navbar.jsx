import { useContext, useEffect } from "react"
import { AppContext } from "../../services/provider"

export default function Navbar({title}) {
  const [pokemones, setPokemones] = useContext(AppContext);

  useEffect( () => {
    console.log(pokemones);
  })

  return (
    <div className="navbar-container"> {/* add a class to the parent div */}
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1"> {title}</span>
          </div>
        </nav>  
    </div>
  )
}
