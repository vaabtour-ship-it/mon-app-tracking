

export const brandStyles = {
  "Atelier Tuffery": {
    isSpider: false,
    primaryColor: "#1a2a40",
    secondaryColor: "#c8a27c",
    fontFamily: "serif",
    cardBg: "var(--card-bg, #fcfbfa)",
    cardBorderTop: "5px solid #1a2a40",
    textColor: "var(--text-color, #1a1a1a)",
    numBoxBg: "#f3ece5",
    numBoxColor: "#7c533c",
    numBoxBorder: "3px solid #c8a27c",
    progressBg: "#e0e5eb",
    progressHeight: "6px",
    statusBg: "#eef2f6",
    statusTextColor: "#1a2a40",
    statusBorder: "none",
    statusIcon: ""
  },
  "SPIDER": {
    isSpider: true,
    primaryColor: "#ff003c",
    secondaryColor: "#ff003c",
    fontFamily: "Impact, sans-serif",
    cardBg: "#0d0d11",
    cardBorderTop: "4px solid #ff003c",
    textColor: "#ffffff",
    numBoxBg: "#16161f",
    numBoxColor: "#ffffff",
    numBoxBorder: "4px solid #ff003c",
    progressBg: "#22222b",
    progressHeight: "4px",
    statusBg: "rgba(255, 255, 255, 0.03)",
    statusTextColor: "#ffffff",
    statusBorder: "1px dashed rgba(255, 255, 255, 0.1)",
    statusIcon: "⚡ "
  },
  "JULES": {
    isSpider: false,
    primaryColor: "#1e4620",       // Vert sapin/logistique dominant
    secondaryColor: "#0f233c",     // Bleu marine en touche secondaire
    fontFamily: "'Inter', sans-serif", 
    cardBg: "#ffffff",             // Fond Blanc pur pour la carte
    cardBorderTop: "5px solid #1e4620", // Grosse barre supérieure Verte
    textColor: "#1f2937",          // Texte gris anthracite très foncé
    numBoxBg: "#f3f4f6",           // Boîtier du numéro gris clair épuré
    numBoxColor: "#1e4620",        // Numéro écrit en Vert
    numBoxBorder: "3px solid #0f233c", // Ligne bleu marine à gauche du numéro
    progressBg: "#e5e7eb",         // Barre vide gris moyen
    progressHeight: "5px",
    statusBg: "#1e4620",           // Grand encadré final Vert Sapin
    statusTextColor: "#ffffff",    // Texte blanc dedans pour le contraste
    statusBorder: "none",
    statusIcon: "🌿 "
  }
};

export const trackingData = {
  "AT-74291-FR": {
    brand: "Atelier Tuffery", currentStep: 3, progressWidth: "70%",
    status: { fr: "Votre colis a quitté le centre de tri.", en: "Your package has left the sorting center." }
  },
  "SPD-9942-X": {
    brand: "SPIDER", currentStep: 3, progressWidth: "75%",
    status: { fr: "Votre colis est pris en charge par notre transporteur.", en: "Your package is handled by our carrier." }
  },
  "JUL-88321-FR": {
    brand: "JULES", currentStep: 2, progressWidth: "45%",
    status: { fr: "Vos articles JULES sont préparés avec soin par nos équipes logistiques.", en: "Your JULES items are being carefully prepared by our logistics team." }
  }
};