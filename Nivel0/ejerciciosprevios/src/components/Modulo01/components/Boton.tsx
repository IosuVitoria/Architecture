import { useState } from "react"

interface BotonProps {
    texto: string
}

const Boton = ({texto} : BotonProps) => {
    const [textoBoton, setTextoBoton] = useState(texto) 

  return (
    <div>
      <h3>Ejercicio 6</h3>
      <button>{textoBoton}</button>
    </div>
  )
}

export default Boton
