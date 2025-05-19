import React from 'react';

const botones = [
  { nombre: 'Crear Pedido', url: 'https://artistic-growth-production.up.railway.app/crear.html', color: '#4caf50' },
  { nombre: 'Listar Pedidos', url: 'https://docker-listar-rmqxo.ondigitalocean.app/listar.html', color: '#2196f3' },
  { nombre: 'Actualizar Pedido', url: 'https://editar-pedido-a0539206bcc3.herokuapp.com', color: '#ff9800' },
  { nombre: 'Eliminar Pedido', url: 'http://34.227.178.239:3003', color: '#f44336' },
];

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Panel de Control de Pedidos</h1>
      <div style={styles.buttonContainer}>
        {botones.map(({ nombre, url, color }) => (
          <button
            key={nombre}
            onClick={() => window.open(url, '_blank')}
            style={{ ...styles.button, backgroundColor: color }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            {nombre}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: 'white',
    padding: '0 20px',
  },
  title: {
    marginBottom: 40,
    fontSize: '3rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
  },
  buttonContainer: {
    display: 'flex',
    gap: '25px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    border: 'none',
    padding: '15px 40px',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: 'white',
    borderRadius: '12px',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
};

export default App;
