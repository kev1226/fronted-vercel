import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

// 🔐 Reemplaza con tus valores reales desde el dashboard de Auth0
const domain = "dev-u01p3m8dy1sr3sr4.us.auth0.com";
const clientId = "QjzKIOegJuj1HLHkT7IkPX0OgzcS7VYu";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);


reportWebVitals();
