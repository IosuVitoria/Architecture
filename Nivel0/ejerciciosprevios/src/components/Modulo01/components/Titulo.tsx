import { useState } from "react"

interface TituloProps {
    color: string
}

const Titulo = ({color} : TituloProps) => {
    const [colorTitulo, setColorTitulo] = useState(color);

  return (
    <div>
      <header>
        <h3>Ejercicio 7</h3>
      </header>

      <h4 style={{color: colorTitulo}}>Titulo con color por props.</h4>
    </div>
  )
}

export default Titulo
