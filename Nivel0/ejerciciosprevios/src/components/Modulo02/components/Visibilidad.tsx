import { useState } from "react"

const Visibilidad = () => {
    const [visibilidad, setVisibilidad] = useState("visible");

    function toogleVisibilidad () {
        visibilidad === "visible" ? setVisibilidad("oculto") : setVisibilidad("visible");
    }

  return (
    <div>
        <header>
            <h3>Ejercicio 7</h3>
        </header>

        <div>
            <button onClick={toogleVisibilidad}>Cambiar Visibilidad</button>
            <p>Mostrar visibilidad: {visibilidad}</p>
        </div>
    </div>
  )
}

export default Visibilidad
