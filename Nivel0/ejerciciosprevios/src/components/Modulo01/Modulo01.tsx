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

// import Producto from './components/Producto'
import Producto2 from './components/Producto2'
import Usuario from './components/Usuario'
// import Saludo from './components/Saludo'

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
        <Usuario usuario = {usuario} />
    </div>
  )
}

export default Modulo01
