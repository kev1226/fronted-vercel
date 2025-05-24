import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const botones = [
  { nombre: 'Crear Pedido', url: 'https://artistic-growth-production.up.railway.app/crear.html', color: '#4caf50' },
  { nombre: 'Listar Pedidos', url: 'https://docker-listar-rmqxo.ondigitalocean.app/listar.html', color: '#2196f3' },
  { nombre: 'Actualizar Pedido', url: 'https://editar-pedido-a0539206bcc3.herokuapp.com', color: '#ff9800' },
  { nombre: 'Eliminar Pedido', url: 'http://3.214.20.214:3003', color: '#f44336' },
];

function App() {
  const { loginWithRedirect, logout, isAuthenticated, isLoading, user } = useAuth0();

  if (isLoading) return <div>Cargando...</div>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Panel de Control de Pedidos GITHUB ACTIONS</h1>

      {/* Botones de Login/Logout */}
      {!isAuthenticated ? (
        <button style={styles.authButton} onClick={() => loginWithRedirect()}>
          Iniciar Sesión
        </button>
      ) : (
        <>
          <p>Hola, {user.name}</p>
          <button
            style={styles.authButton}
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
          >
            Cerrar Sesión GITHUB ACTIONS
          </button>

          {/* Botones del sistema de pedidos */}
          <div style={styles.buttonContainer}>
            {botones.map(({ nombre, url, color }) => (
              <button
                key={nombre}
                onClick={() => window.open(url, '_blank')}
                style={{ ...styles.button, backgroundColor: color }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                {nombre}
              </button>
            ))}
          </div>
        </>
      )}
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
    marginBottom: 20,
    fontSize: '3rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  },
  authButton: {
    border: 'none',
    padding: '12px 30px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: 'white',
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: '#1a1a1a',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    marginBottom: 30,
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
