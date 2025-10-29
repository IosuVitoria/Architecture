import { Moon01FreeIcons, Sun01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";

const BotonOnOff = () => {
  const [estadoBoton, setEstadoBoton] = useState(false);

  const cambiarEstadoBoton = () => setEstadoBoton(!estadoBoton);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <header>
        <h3 style={{ fontWeight: "600", color: "#333" }}>Ejercicio 6</h3>
      </header>

      <section>
        <button
          onClick={cambiarEstadoBoton}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 20px",
            borderRadius: "50px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "600",
            color: "white",
            background: estadoBoton
              ? "linear-gradient(135deg, #fbbf24, #f59e0b)"
              : "linear-gradient(135deg, #334155, #0f172a)",
            boxShadow: estadoBoton
              ? "0 4px 10px rgba(251,191,36,0.4)"
              : "0 4px 10px rgba(30,41,59,0.4)",
            transition: "all 0.3s ease",
          }}
        >
          <HugeiconsIcon
            icon={estadoBoton ? Sun01FreeIcons : Moon01FreeIcons}
            style={{
              height: "22px",
              width: "22px",
              transition: "transform 0.3s ease",
              transform: estadoBoton ? "rotate(0deg)" : "rotate(-15deg)",
            }}
          />
          <span>{estadoBoton ? "On" : "Off"}</span>
        </button>
      </section>
    </div>
  );
};

export default BotonOnOff;
