import { useState } from "react"

interface ImagenProps {
    imagen: string
}

const Avatar = ({imagen} : ImagenProps) => {
    const [imagenAvatar, setImagenAvatar] = useState(imagen);

    return (
    <div>
      <header>
        <h3>Ejercicio 12</h3>
      </header>
      <section style={{display: "flex", flexDirection: "column"}}>
        <img src={imagenAvatar} alt="Imagen de usuario" style={{width: "100px", height: "100px", borderRadius: "50%"}}/>
        <p>Nombre: Kratos</p>
      </section>
    </div>
  )
}

export default Avatar
