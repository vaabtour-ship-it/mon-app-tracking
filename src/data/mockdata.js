// src/data/mockdata.js

export const trackingTranslations = {
  "Atelier Tuffery": {
    fr: { back: "← Retour", title: "Suivi de votre commande", labelNum: "Numéro :", step1: "Validée", step2: "Préparation", step3: "En transit", step4: "Livré" },
    en: { back: "← Back", title: "Track your order", labelNum: "Number:", step1: "Verified", step2: "Packing", step3: "In transit", step4: "Delivered" }
  },
  "SPIDER": {
    fr: { back: "← Retour", title: "Statut de l'expédition", labelNum: "Code :", step1: "Validé", step2: "Conditionnement", step3: "En Transit", step4: "Objectif Atteint" },
    en: { back: "← Back", title: "Shipment Status", labelNum: "Code:", step1: "Verified", step2: "Packing", step3: "In Transit", step4: "Accomplished" }
  },
  "JULES": {
    fr: { back: "← Retour", title: "Suivre mes achats", labelNum: "N° de commande :", step1: "Enregistrée", step2: "Préparation logistique", step3: "Expédiée", step4: "Prête en magasin / Livrée" },
    en: { back: "← Back", title: "Track my purchases", labelNum: "Order No:", step1: "Registered", step2: "Preparing", step3: "Shipped", step4: "Delivered" }
  }
};

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
    primaryColor: "#0f233c",       // Bleu Marine profond chic
    secondaryColor: "#2d5a27",     // Vert sapin urbain/casual
    fontFamily: "'Inter', sans-serif", 
    cardBg: "#ffffff",             // Fond Blanc pur pour la carte
    cardBorderTop: "5px solid #0f233c", // Barre supérieure bleu marine
    textColor: "#1f2937",          // Texte gris anthracite très foncé
    numBoxBg: "#f3f4f6",           // Boîtier du numéro gris clair épuré
    numBoxColor: "#0f233c",        // Numéro écrit en bleu marine
    numBoxBorder: "3px solid #2d5a27", // Ligne verte à gauche du numéro
    progressBg: "#e5e7eb",         // Barre de chargement vide gris moyen
    progressHeight: "5px",
    statusBg: "#0f233c",           // Encadré final Bleu Marine
    statusTextColor: "#ffffff",    // Texte blanc à l'intérieur
    statusBorder: "none",
    statusIcon: "👕 "              // Icône vêtement
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