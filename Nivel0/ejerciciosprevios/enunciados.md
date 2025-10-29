🔹 **MÓDULO 0.0 – JSX y Renderizado**

*Objetivo: entender cómo React pinta cosas en pantalla y cómo usa variables dentro de JSX.*

🧩 Ejercicios

1. Crea un componente que muestre tu nombre y tu edad.
2. Muestra un mensaje “Hola, mundo” dentro de un <h1>.
3. Declara una variable const saludo = "Hola React!" y muéstrala en pantalla.
4. Crea una variable const esEstudiante = true; y muestra “Eres estudiante” o “No eres estudiante” según su valor.
5. Crea un objeto persona con nombre, edad y país, y muestra esos datos en un <div>.
6. Muestra una lista de 3 ciudades dentro de una lista <ul>.
7. Crea una función getSaludo(nombre) que retorne un string, e imprímelo dentro del JSX.
8. Añade un emoji que cambie según el valor de una variable booleana (feliz o triste).
9. Cambia el color de un texto usando una variable CSS en línea.
10. Muestra el resultado de una operación matemática (2 + 2) directamente en JSX.

🔹 MÓDULO 0.1 – Componentes y Props

*Objetivo: crear componentes reutilizables, pasarles datos y entender su independencia.*

🧩 Ejercicios

1. Crea un componente Saludo que reciba un nombre por props.
2. Usa el componente Saludo tres veces con nombres distintos.
3. Crea un componente Producto que reciba nombre, precio y enStock (booleano).
4. Muestra “Disponible” o “Agotado” según el valor de enStock.
5. Crea un componente Usuario que reciba un objeto user con nombre y edad.
6. Crea un componente Boton con un texto dinámico recibido por props.
7. Crea un componente Titulo que tenga un color recibido por props.
8. Haz que un componente Card reciba elementos hijos (children) y los muestre dentro de un recuadro.
9. Crea un componente ImagenPerfil que reciba la URL de una imagen y el nombre del usuario.
10. Crea un componente FraseDelDia que reciba una frase y un autor.
11. Crea un componente Notificacion con un color de fondo distinto según su tipo (error, success, warning).
12. Crea un componente Avatar que muestre una imagen circular con el nombre debajo.

🔹 MÓDULO 0.2 – Estado (useState) y Eventos

Objetivo: aprender a manejar valores cambiantes y actualizar la interfaz.

🧩 Ejercicios

1. Crea un contador con botones + y -.
2. Muestra un mensaje distinto según el valor del contador (por ejemplo, “Muy alto” si es >10).
3. Crea un input que actualice un texto en tiempo real.
4. Crea un campo de texto que diga “Hola, [nombre]” a medida que escribes.
5. Crea un botón que cambie el color de fondo al hacer clic.
6. Crea un interruptor (ON/OFF) con un botón que cambie su estado.
7. Crea un componente que muestre “Visibilidad: visible/oculto” y un botón que alterne.
8. Crea un formulario con un input y un botón que agregue elementos a una lista.
9. Crea un input que cuente cuántos caracteres lleva escritos.
10. Crea un componente que muestre una imagen distinta cada vez que haces clic.
11. Crea un contador con paso variable (un input define de cuánto en cuánto sube).
12. Crea un botón que aumente el número al mantenerlo presionado (onMouseDown/onMouseUp).

🔹 MÓDULO 0.3 – Listas y Renderizado Condicional

Objetivo: recorrer arrays con .map() y mostrar u ocultar contenido según condiciones.

🧩 Ejercicios

1. Crea una lista de nombres y muéstrala con .map().
2. Muestra una lista de productos con nombre y precio.
3. Crea una lista de usuarios y muestra solo los que tienen activo: true.
4. Crea un botón “Mostrar/Ocultar lista”.
5. Muestra un mensaje “No hay elementos” si la lista está vacía.
6. Crea un componente que reciba una lista por props y la renderice.
7. Crea un listado de películas y permite filtrarlas por género.
8. Crea una lista con un botón que borre un elemento por índice.
9. Crea una lista numerada (<ol>) que muestre posiciones (1°, 2°, 3°…).
10. Crea una lista de tareas con checkbox para marcar como completadas.
11. Crea una lista de compras con total al final.
12. Crea una lista de frases y un botón que muestre una aleatoria.

🔹 MÓDULO 0.4 – Efectos (useEffect)

Objetivo: entender el ciclo de vida y cuándo ejecutar código después de renderizar.

🧩 Ejercicios

Crea un componente que muestre la hora actual y se actualice cada segundo.

Muestra un mensaje en consola cada vez que el componente se renderiza.

Crea un efecto que cambie el título de la pestaña (document.title) con el nombre del usuario.

Muestra “Componente montado” al montarse y “Componente desmontado” al desaparecer.

Usa fetch para traer datos de una API y mostrarlos en pantalla.

Crea un efecto que escuche cambios en una variable (por ejemplo, contador).

Crea un temporizador con setTimeout que muestre un mensaje después de 3 segundos.

Crea un componente que al cambiar un input, busque resultados en una API.

Crea un efecto que cambie el color de fondo cada 5 segundos.

Crea un contador que se reinicie automáticamente cada 10 segundos.

Crea un componente que muestre si el usuario está “en línea” o “desconectado” (simula con setInterval).

🔹 MÓDULO 0.5 – Custom Hooks

Objetivo: extraer lógica reutilizable.

🧩 Ejercicios

Crea un hook useCounter con funciones increment, decrement y reset.

Crea un hook useToggle que maneje un booleano (true/false).

Crea un hook useInput que maneje el valor y el evento onChange.

Crea un hook useLocalStorage para guardar datos en el localStorage.

Crea un hook useWindowWidth que devuelva el ancho de la ventana.

Crea un hook useFetch que traiga datos desde una API.

Crea un hook useTimer que inicie, pause y resetee un cronómetro.

Crea un hook useTheme que cambie entre modo claro y oscuro.

Crea un hook useDebounce para retrasar la ejecución de una búsqueda.

Crea un hook usePrevious que recuerde el valor anterior de una variable.

🔹 MÓDULO 0.6 – Reducers y Estado Global Local

Objetivo: usar useReducer para manejar estados complejos.

🧩 Ejercicios

Crea un contador con useReducer (acciones: increment, decrement, reset).

Crea un todo-list con useReducer (acciones: add, toggle, delete).

Crea un reducer que maneje un formulario (UPDATE_FIELD, RESET_FORM).

Crea un reducer que cambie el tema de la app (dark/light).

Crea un reducer que administre una lista de productos (agregar/eliminar).

Crea un reducer que administre el estado de un carrito de compras.

Crea un reducer con una acción que ordene elementos alfabéticamente.

Crea un reducer con acciones para cargar, éxito y error (loading, success, error).

Crea un reducer que combine varias partes del estado (por ejemplo, usuario + tareas).

Crea un reducer que guarde los cambios en localStorage automáticamente.

🔹 MÓDULO 0.7 – Testing (Vitest + React Testing Library)

Objetivo: comprobar que tus componentes funcionan.

🧩 Ejercicios

Testea que un contador muestre el número inicial correctamente.

Testea que el botón “+” incremente el contador.

Testea que un formulario agregue una tarea a la lista.

Testea que el texto “No hay tareas” aparezca si la lista está vacía.

Testea que un botón “Borrar” elimine un elemento.

Testea que un componente reciba correctamente las props.

Testea que un input cambie su valor al escribir.

Testea que un useEffect cambie el título de la pestaña.

Testea que una lista renderice la cantidad correcta de elementos.

Testea que un botón se deshabilite si el input está vacío.