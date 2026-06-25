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
    fr: { back: "← Retour", title: "Suivre mes achats", labelNum: "N° de commande :", step1: "Enregistrée", step2: "En préparation", step3: "Expédiée", step4: "Livrée en magasin/domicile" },
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
    primaryColor: "#112233",       // Bleu marine profond Jules
    secondaryColor: "#d9534f",     // Rouge brique/orangé pour les détails
    fontFamily: "'Helvetica Neue', Arial, sans-serif", // Style urbain moderne
    cardBg: "#ffffff",             // Fond blanc épuré
    cardBorderTop: "5px solid #112233",
    textColor: "#222222",
    numBoxBg: "#f4f6f8",
    numBoxColor: "#112233",
    numBoxBorder: "3px solid #d9534f",
    progressBg: "#eaedf1",
    progressHeight: "5px",
    statusBg: "#f4f6f8",
    statusTextColor: "#112233",
    statusBorder: "1px solid #eaedf1",
    statusIcon: "📦 "
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
    status: { fr: "Votre commande est en cours de préparation par nos équipes logistiques.", en: "Your order is being prepared by our logistics team." }
  }
};