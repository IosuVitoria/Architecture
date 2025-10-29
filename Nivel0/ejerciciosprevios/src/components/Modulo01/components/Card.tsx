import type { Pokemon } from '../Modulo01'

interface PokemonProps {
  pokeball: string
  tipo: string
  charizard: string
  pokemon: Pokemon
}

const Card = ({ pokeball, tipo, charizard, pokemon }: PokemonProps) => {
  const PokemonData = pokemon

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #f0f0f0 0%, #e2e2e2 100%)',
        fontFamily: 'Poppins, Arial, sans-serif'
      }}
    >
      <div
        style={{
          width: '300px',
          background: 'linear-gradient(180deg, #ffcb05 0%, #e6760eff 100%)',
          borderRadius: '20px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
          padding: '16px',
          color: '#fff',
          textAlign: 'center',
          border: '3px solid #333'
        }}
      >
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '12px'
          }}
        >
          <img
            src={pokeball}
            alt="Pokeball"
            style={{ width: '28px', height: '28px' }}
          />
          <h2
            style={{
              textTransform: 'uppercase',
              fontSize: '20px',
              letterSpacing: '1px',
              flexGrow: 1
            }}
          >
            {PokemonData.nombre}
          </h2>
          <img
            src={tipo}
            alt="Tipo"
            style={{ width: '40px', height: '40px', border: "2px solid red", borderRadius: "5px" }}
          />
        </header>

        <section
          style={{
            backgroundColor: '#ffffff22',
            borderRadius: '16px',
            padding: '12px',
            marginBottom: '16px'
          }}
        >
          <img
            src={charizard}
            alt="Imagen de charizard"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '12px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
              backgroundColor: '#fff'
            }}
          />
        </section>

        {/* Datos del Pokémon */}
        <div
          style={{
            backgroundColor: '#ffffff33',
            borderRadius: '10px',
            padding: '10px',
            fontSize: '14px',
            textAlign: 'left'
          }}
        >
          <h4 style={{ marginBottom: '6px', textAlign: 'center' }}>
            Datos del Pokémon
          </h4>
          <p>
            <strong>Tipo:</strong> {PokemonData.tipo.join(', ')}
          </p>
          <p>
            <strong>Altura:</strong> {PokemonData.altura} m
          </p>
          <p>
            <strong>Peso:</strong> {PokemonData.peso} kg
          </p>
          <p>
            <strong>Habilidad:</strong> {PokemonData.habilidad}
          </p>

          <h5 style={{ marginTop: '10px', textAlign: 'center' }}>Estadísticas</h5>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li>❤️ HP: {PokemonData.stats.hp}</li>
            <li>⚔️ Ataque: {PokemonData.stats.ataque}</li>
            <li>🛡️ Defensa: {PokemonData.stats.defensa}</li>
            <li>🔥 At. Esp.: {PokemonData.stats.ataqueEspecial}</li>
            <li>💧 Def. Esp.: {PokemonData.stats.defensaEspecial}</li>
            <li>⚡ Velocidad: {PokemonData.stats.velocidad}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card
