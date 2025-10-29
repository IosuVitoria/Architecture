import { useState } from "react"

const ListaVisible = () => {

    const [ocultarLista, setOcultarLista] = useState(false);

    function toggleLista() {
        setOcultarLista(!ocultarLista);
    }

    return (
        <div>
            <header>
                <h3>Ejercicio 4</h3>
            </header>

            <section>
                <button onClick={toggleLista}>
                    Ocultar
                </button>

                {
                    ocultarLista === false ? (
                        <ul>
                            <li>Elemento 1</li>
                            <li>Elemento 2</li>
                            <li>Elemento 3</li>
                        </ul>
                    ) : (<p>Lista oculta</p>)
                }
            </section>
        </div>
    )
}

export default ListaVisible
