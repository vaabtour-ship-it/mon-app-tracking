export const trackingTranslations = {
  "Atelier Tuffery": {
    fr: { back: "← Retour", title: "Suivi de votre commande", labelNum: "Numéro :", step1: "Validée", step2: "Préparation", step3: "En transit", step4: "Livré" },
    en: { back: "← Back", title: "Track your order", labelNum: "Number:", step1: "Verified", step2: "Packing", step3: "In transit", step4: "Delivered" }
  },
  "SPIDER": {
    fr: { back: "← Retour", title: "Statut de l'expédition", labelNum: "Code :", step1: "Validé", step2: "Conditionnement", step3: "En Transit", step4: "Objectif Atteint" },
    en: { back: "← Back", title: "Shipment Status", labelNum: "Code:", step1: "Verified", step2: "Packing", step3: "In Transit", step4: "Accomplished" }
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
  }
};