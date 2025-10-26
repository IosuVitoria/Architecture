import { useState } from 'react'

interface Product {
    nombre : string,
    precio: number,
    enStock: boolean
}

interface ProductoProps {
    producto : Product
}

const Producto2 = ({producto} : ProductoProps) => {

    const [nombre, setNombre] = useState(producto.nombre);
    const [precio, setPrecio] = useState(producto.precio);
    const [enStock, setEnStock] = useState(producto.enStock);

  return (
    <div>
        <ul>
            <li>Nombre : {nombre}</li>
            <li>Precio : {precio}</li>
            <li>Stock : {enStock === true ? 
                (<span>Disponible.</span>) :
                (<span>Fuera de Stock.</span>)
                }</li>
        </ul>
    </div>
  )
}

export default Producto2
