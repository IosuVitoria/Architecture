// 1. Crea un componente Saludo que reciba un nombre por props.
// 2. Usa el componente Saludo tres veces con nombres distintos.
// 3. Crea un componente Producto que reciba nombre, precio y enStock (booleano).
// 4. Muestra “Disponible” o “Agotado” según el valor de enStock.
// 5. Crea un componente Usuario que reciba un objeto user con nombre y edad.
// 6. Crea un componente Boton con un texto dinámico recibido por props.
// 7. Crea un componente Titulo que tenga un color recibido por props.
// 8. Haz que un componente Card reciba elementos hijos (children) y los muestre dentro de un recuadro.
// 9. Crea un componente ImagenPerfil que reciba la URL de una imagen y el nombre del usuario.
// 10. Crea un componente FraseDelDia que reciba una frase y un autor.
// 11. Crea un componente Notificacion con un color de fondo distinto según su tipo (error, success, warning).
// 12. Crea un componente Avatar que muestre una imagen circular con el nombre debajo.

import Avatar from "./components/Avatar"

// import Frase from "./components/Frase"
// import Notificacion from "./components/Notificacion"
// import Perfil from "./components/Perfil"
// import Producto from './components/Producto'
// import Boton from './components/Boton'
// import Producto2 from './components/Producto2'
// import Usuario from './components/Usuario'
// import Saludo from './components/Saludo'
// import Titulo from './components/Titulo'
// import Card from './components/Card';
// import Charizard from './components/assets/charizard.png';
// import Tipo from './components/assets/Tipo.jpg';
// import Pokeball from './components/assets/Pokeball.png';
import Kratos from './components/assets/Kratos.jpg'


export interface Pokemon {
  nombre: string
  tipo: string[]
  nivel: number
  stats: {
    hp: number
    ataque: number
    defensa: number
    ataqueEspecial: number
    defensaEspecial: number
    velocidad: number
  }
  altura: number
  peso: number
  habilidad: string
}

const Modulo01 = () => {

    const productoPrueba = {
        nombre : "Tablet",
        precio : 1250,
        enStock : true
    }

    const usuario = {
        nombre: "Iosu",
        edad : 39
    }

    const charizard: Pokemon = {
      nombre: "Charizard",
      tipo: ["Fuego", "Volador"],
      nivel: 50,
      stats: {
        hp: 78,
        ataque: 84,
        defensa: 78,
        ataqueEspecial: 109,
        defensaEspecial: 85,
        velocidad: 100
      },
      altura: 1.7,
      peso: 90.5,
      habilidad: "Mar Llamas"
    }

    const Imagen = "https://tse4.mm.bing.net/th/id/OIP.7C-rxzu2kQYtBpJkV8qrUAHaJ3?rs=1&pid=ImgDetMain&o=7&rm=3"
    const nombrePerfil = "Albert Einstein"

    const autor = "Platón";
    const frase = "Sólo sé que no sé nada."

  return (
    <div>
        {/* Ejercicio 1 */}
        {/* <Saludo nombre = "Iosu"/> */}
        {/* Ejercicio 2 */}
        {/* <Saludo nombre = "Pedro"/>
        <Saludo nombre = "Vero"/>
        <Saludo nombre = "Aiur"/> */}
        {/* Ejercicio 3 */}
        {/* <Producto producto = {productoPrueba} /> */}
        {/* Ejercicio 4 */}
        {/* <Producto2 producto = {productoPrueba} /> */}
        {/* Ejercicio 5 */}
        {/* <Usuario usuario = {usuario} /> */}
        {/* Ejercicio 6 */}
        {/* <Boton texto = "Saludo"/> */}
        {/* Ejercicio 7 */}
        {/* <Titulo color='red' /> */}
        {/* Ejercicio 8 */}
        {/* <Card pokeball={Pokeball} tipo={Tipo} charizard={Charizard} pokemon={charizard}/> */}
        {/* Ejercicio 9*/}
        {/* <Perfil imagen = {Imagen} nombre={nombrePerfil}/> */}
        {/* Ejercicio 10 */}
        {/* <Frase autor={autor} frase={frase} /> */}
        {/* Ejercicio 11 */}
        {/* <Notificacion color="blue"/> */}
        {/* Ejercicio 12 */}
        <Avatar imagen={Kratos}/>

    </div>
  )
}

export default Modulo01
