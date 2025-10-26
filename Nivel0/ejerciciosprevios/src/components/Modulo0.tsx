// 1. Crea una variable const esEstudiante = true; y muestra “Eres estudiante” o “No eres estudiante” según su valor.
// 2. Muestra un mensaje “Hola, mundo” dentro de un <h1>.
// 3. Declara una variable const saludo = "Hola React!" y muéstrala en pantalla.
// 4. Crea un componente que muestre tu nombre y tu edad.
// 5. Crea un objeto persona con nombre, edad y país, y muestra esos datos en un <div>.
// 6. Muestra una lista de 3 ciudades dentro de una lista <ul>.
// 7. Crea una función getSaludo(nombre) que retorne un string, e imprímelo dentro del JSX.
// 8. Añade un emoji que cambie según el valor de una variable booleana (feliz o triste).
// 9. Cambia el color de un texto usando una variable CSS en línea.
// 10. Muestra el resultado de una operación matemática (2 + 2) directamente en JSX.

import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { SadDizzyIcon, Happy01FreeIcons} from '@hugeicons/core-free-icons';

interface person {
    nombre : string,
    edad : number
}

const Modulo0 = () => {
    const [esEstudiante, setEsEstudiante] = useState(true);
    const saludo : string = "Hola React!";
    const [estaTriste, setEstaTriste] = useState(false);
    
    const user : person= {
        nombre: "Iosu",
        edad: 39
    }

    function getSaludo(nombre : string) : string {
        return `Hola ${nombre}!`;
    }

  return (
    <div>
        <section>
            <header>
                <h4>EJERICIO 1</h4>
                {esEstudiante === true ? (
                    <p>Es estudiante</p>
                ): (
                    <p>No es estudiante</p>
                )}
            </header>
        </section>
        <section>
            <header>
                <h4>EJERCICIO 2</h4>
            </header>
            <h1>Hola mundo!</h1>
        </section>
        <section>
            <header>
                <h4>EJERCICIO 3</h4>
            </header>
            <div>
                <p>{saludo}</p>
            </div>
        </section>
        <section>
            <header>
                <h4>EJERCICIO 4</h4>
            </header>
            <div>
                <p>Nombre: {user.nombre}</p>
                <p>Edad: {user.edad}</p>
            </div>
        </section>
        <section>
            <header>
                <h4>EJERCICIO 5</h4>
            </header>
            <div>
                <p>Nombre: {user.nombre}</p>
                <p>Edad: {user.edad}</p>
            </div>
        </section>
        <section>
            <header>
                <h4>EJERCICIO 6</h4>
            </header>
            <div>
                <ul>
                    <li>Vitoria</li>
                    <li>Bilbao</li>
                    <li>Donosti</li>
                </ul>
            </div>
        </section>
        <section>
            <header>
                <h4>EJERCICIO 7</h4>
            </header>
            <div>
                <p>{getSaludo("Vero")}</p>
            </div>
        </section>
        <section>
            <header>
                <h4>EJERCICIO 8</h4>
            </header>
            <div>
                {estaTriste === true ? (
                    <p><HugeiconsIcon icon={SadDizzyIcon} /></p>
                ) : (
                    <p><HugeiconsIcon icon={Happy01FreeIcons} /></p>
                )}
            </div>
        </section>
        <section>
            <header>
                <h4>EJERCICIO 9</h4>
            </header>
            <div>
                <p style={{color: "green"}}>Esto es un texto en verde.</p>
                <p style={{color: "blue"}}>Esto es un texto en azul.</p>
                <p style={{color: "red"}}>Esto es un texto en rojo.</p>
            </div>
        </section>
        <section>
            <header>
                <h4>EJERCICIO 10</h4>
            </header>
            <div>
                {2 + 2}
            </div>
        </section>
    </div>
  )
}

export default Modulo0
