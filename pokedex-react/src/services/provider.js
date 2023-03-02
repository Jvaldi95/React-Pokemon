import { createContext, useState } from "react"

export default function MyProvider(props) {

    const [state, setState] = useState(); //creo localmente lo que voy a compartir

  return (
    <div>
        <AppContext.Provider value={[state,setState]}> {/* paso mi estado para que se utilice como proveedor */}
            {props.children } 
        </AppContext.Provider>
    
    </div>
  )
}

export const AppContext = createContext(); //creamos un contexto

