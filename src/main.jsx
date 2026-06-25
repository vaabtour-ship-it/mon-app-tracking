import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx' 
import TrackingResult from './TrackingResult.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Page d'accueil (Le moteur de recherche) */}
        <Route path="/" element={<App />} />
        
        {/* Route unique et dynamique pour tous les colis (Tuffery, SPIDER, etc.) */}
        <Route path="/:suiviId" element={<TrackingResult />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)