// 1. Crea un contador con botones + y -.
// 2. Muestra un mensaje distinto según el valor del contador (por ejemplo, “Muy alto” si es >10).
// 3. Crea un input que actualice un texto en tiempo real.
// 4. Crea un campo de texto que diga “Hola, [nombre]” a medida que escribes.
// 5. Crea un botón que cambie el color de fondo al hacer clic.
// 6. Crea un interruptor (ON/OFF) con un botón que cambie su estado.
// 7. Crea un componente que muestre “Visibilidad: visible/oculto” y un botón que alterne.
// 8. Crea un formulario con un input y un botón que agregue elementos a una lista.
// 9. Crea un input que cuente cuántos caracteres lleva escritos.
// 10. Crea un componente que muestre una imagen distinta cada vez que haces clic.
// 11. Crea un contador con paso variable (un input define de cuánto en cuánto sube).
// 12. Crea un botón que aumente el número al mantenerlo presionado (onMouseDown/onMouseUp).

import Formulario from "./components/Formulario"


// import Visibilidad from "./components/Visibilidad"

// import BotonFondo from "./components/BotonFondo"
// import ListaVisible from "./components/ListaVisible"
// import Contador from "./components/Contador"
// import Contador02 from "./components/Contador02"
// import TextoDinamico from "./components/TextoDinamico"
// import BotonOnOff from "./components/BotonOnOff"

const Modulo02 = () => {
  return (
    <div style={{backgroundColor: "lightblue"}}>
      <header style={{width: "100%", margin: "auto", textAlign: "center"}}>
        <h3>EJERCICIOS DEL MÓDULO 02</h3>
        <h5>Esta sección va a tratar de iniciar al usuario con los eventos. </h5>
      </header>
      <section>
        {/* <Contador /> */}
        {/* <Contador02 /> */}
        {/* <TextoDinamico /> */}
        {/* <ListaVisible /> */}
        {/* <BotonFondo /> */}
        {/* <BotonOnOff /> */}
        {/* <Visibilidad /> */}
        <Formulario />
      </section>
    </div>
  )
}

export default Modulo02
