import { useState } from "react"

interface usuario {
    nombre : string,
    edad: number
}

interface UserProps {
    usuario : usuario
}

const Usuario = ({usuario} : UserProps) => {

    const [userName, setUserName] = useState(usuario.nombre);
    const [userEdad, setUserEdad] = useState(usuario.edad);

  return (
    <div>
        <header>
            <h2>Ejercicio 5</h2>
        </header>

        <h3>Datos de usuario</h3>
        <p>Nombre : { userName }</p>
        <p>Edad : { userEdad }</p>
    </div>
  )
}

export default Usuario
