import React from 'react'

interface PerfilProps {
    imagen : string,
    nombre: string
}

const Perfil = ({imagen, nombre} : PerfilProps) => {
  return (
    <div>
      <h3>Ejercicio 9</h3>
      <section>
        <img src={imagen} alt="Imagen de perfil" />
        <h3>{nombre}</h3>
      </section>
    </div>
  )
}

export default Perfil
