import { useState } from "react";

const TextoDinamico = () => {
    const [textoDinamico, setTextoDinamico] = useState('');

    function actualizarTexto (e : React.ChangeEvent<HTMLInputElement>) {
        setTextoDinamico(e.target.value);
        return TextoDinamico
    }

    return (
        <div>
            <header>
                <h3>Ejercicio 3 del módulo</h3>
            </header>

            <div>
                <input type="text" onChange={actualizarTexto}/>
                <p>{textoDinamico}</p>
            </div>
        </div>
    )
}

export default TextoDinamico
