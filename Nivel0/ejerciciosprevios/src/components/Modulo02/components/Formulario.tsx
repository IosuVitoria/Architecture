import { useState } from "react";

const Formulario = () => {
  const [elementosFormulario, setElementosFormulario] = useState<string[]>([]);
  const [nuevoElemento, setNuevoElemento] = useState("");

  const agregarElemento = (e: React.FormEvent) => {
    e.preventDefault();
    if (nuevoElemento.trim() === "") return;
    setElementosFormulario([...elementosFormulario, nuevoElemento.trim()]);
    setNuevoElemento("");
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "2rem auto",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <header>
        <h3 style={{ fontWeight: 600, color: "#1e293b" }}>Ejercicio 8</h3>
      </header>

      <section
        style={{
          background: "#f8fafc",
          padding: "1rem",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <header>
          <h4 style={{ marginBottom: "0.5rem", color: "#334155" }}>
            🛒 Lista de la compra
          </h4>
        </header>

        <form
          onSubmit={agregarElemento}
          style={{
            display: "flex",
            gap: "8px",
            marginBottom: "1rem",
          }}
        >
          <input
            type="text"
            value={nuevoElemento}
            onChange={(e) => setNuevoElemento(e.target.value)}
            placeholder="Añadir producto..."
            style={{
              flex: 1,
              padding: "8px 12px",
              borderRadius: "8px",
              border: "1px solid #cbd5e1",
              outline: "none",
              fontSize: "14px",
            }}
          />
          <button
            type="submit"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #2563eb)",
              color: "white",
              fontWeight: "600",
              border: "none",
              borderRadius: "8px",
              padding: "8px 14px",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
          >
            Agregar
          </button>
        </form>

        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          {elementosFormulario.map((item, index) => (
            <li
              key={index}
              style={{
                background: "white",
                padding: "8px 10px",
                marginBottom: "6px",
                borderRadius: "8px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                color: "#1e293b",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Formulario;
