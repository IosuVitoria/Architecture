import { useState } from "react"

interface ColorProps {
    color : string
}

const Notificacion = ({color} : ColorProps) => {
    const [colorFondo, setColorFondo] = useState(color);

  return (
    <div style={{backgroundColor: colorFondo}}>
      <header>
        <h3>Ejercicio 11</h3>
      </header>
      <section>
        {colorFondo === 'red' ? 
            (<p>Error</p>) : colorFondo === 'green' ? (<p>Success</p>) : (<p>Warning</p>)
        }
      </section>
    </div>
  )
}

export default Notificacion
