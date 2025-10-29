import { useState } from "react"

interface AutorProps {
    frase: string,
    autor: string
}

const Frase = ({frase, autor} : AutorProps) => {
    const [autorFrase, setAutorFrase] = useState(autor);
    const [fraseEmpleada, setFraseEmpleada] = useState(frase);

  return (
    <div style={{width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", textAlign:"center"}}>
        <header>
            <h3>Ejercicio 10</h3>
        </header>
        <section>
            <header>
                Autor: {autorFrase}
            </header>
            <div>
                Frase : {fraseEmpleada}
            </div>
        </section>
    </div>
  )
}

export default Frase
