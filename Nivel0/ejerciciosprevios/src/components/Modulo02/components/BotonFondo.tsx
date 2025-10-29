import { useState } from "react"

const BotonFondo = () => {
    const [colorFondo, setColorFondo] = useState("grey");

    function cambiarColorFondo (){
        if(colorFondo === "grey"){
            setColorFondo("blue");
        }else{
            setColorFondo("grey");
        }
    }

    return (
        <div style={{backgroundColor: colorFondo}}>
            <header>
                <h3>Ejercicio 5</h3>
            </header>

            <section>
                <button onClick={cambiarColorFondo}>
                    Cambiar Color
                </button>
            </section>
        </div>
    )
}

    export default BotonFondo
