import { useState } from 'react'

const Contador02 = () => {
    const [count, setCount] = useState(0);

    function sumarUnidad () : number{
        setCount(count + 1)
        return count;
    }
    function restarUnidad () : number{
        setCount(count - 1)
        return count;
    }

    return (
        <div>
            <header>
                <h4>Ejercicio 2 del módulo.</h4>
            </header>

            <section>
                <div style={{display: "flex", gap: "5px"}}>
                    <button onClick={sumarUnidad}>+</button>
                    <p>{count}</p>
                    <button onClick={restarUnidad}>-</button>
                </div>
                <div>
                    <header>
                        <h5>Mensaje alternante</h5>
                    </header>
                    <div>
                        <p>{count > 10 ? 'Muy alto' : 'No es muy alto'}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contador02
