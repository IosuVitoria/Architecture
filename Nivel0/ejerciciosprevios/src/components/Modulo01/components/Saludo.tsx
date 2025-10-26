import { useState } from 'react';

interface saludoProps {
    nombre: string
}

const Saludo = ({nombre} : saludoProps) => {
    const [name, setName] = useState(nombre);

  return (
    <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
        <header>
            <h3>EJERCICIO 1</h3>
        </header>
        <div>
            <p>{`Hola ${name}`}</p>
        </div>
    </div>
  )
}

export default Saludo
