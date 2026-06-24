import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx' // Attention au A majuscule si ton fichier est App.jsx !

// Petit composant de secours si la page n'est pas trouvée
const PageSuiviProvisoire = () => (
  <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
    <h2>Statut du colis</h2>
    <p>Le système de suivi charge vos données...</p>
    <button onClick={() => window.location.href = '/'}>Retour</button>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* La page d'accueil avec ton tracker en 5 langues */}
        <Route path="/" element={<App />} />
        
        {/* Ces routes évitent que le compilateur plante si tu n'as pas encore lié MarqueBResult */}
        <Route path="/marque-b" element={<PageSuiviProvisoire />} />
        <Route path="/suivi" element={<PageSuiviProvisoire />} />
        <Route path="/:id" element={<PageSuiviProvisoire />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)