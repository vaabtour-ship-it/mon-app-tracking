import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx' 
import MarqueBResult from './MarqueBResult.jsx' // On reconnecte ta page Marque B
import TrackingResult from './TrackingResult.jsx' // On reconnecte ta page de suivi standard

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Page d'accueil (Le moteur de recherche) */}
        <Route path="/" element={<App />} />
        
        {/* Page pour les colis Marque B (numéros contenant 0731 ou 07) */}
        <Route path="/marque-b" element={<MarqueBResult />} />
        
        {/* Page pour le suivi normal (numéros contenant 3107 ou 31) */}
        <Route path="/suivi" element={<TrackingResult />} />

        {/* Route dynamique si tu tapes directement le numéro dans l'URL (ex: /FR123456) */}
        <Route path="/:id" element={<TrackingResult />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)