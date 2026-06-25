// src/data/mockShipments.js

export const trackingData = {
  "AT-74291-FR": {
    brand: "Atelier Tuffery", currentStep: 3, progressWidth: "70%",
    status: { 
      fr: "Votre colis a quitté le centre de tri.", 
      en: "Your package has left the sorting center.",
      es: "Su paquete ha salido del centro de clasificación.",
      de: "Ihr Paket hat das Sortierzentrum verlassen.",
      it: "Il tuo pacco ha lasciato il centro di smistamento."
    }
  },
  "SPD-9942-X": {
    brand: "SPIDER", currentStep: 3, progressWidth: "75%",
    status: { 
      fr: "Votre colis est pris en charge par notre transporteur.", 
      en: "Your package is handled by our carrier.",
      es: "Su paquete es gestionado por nuestro transportista.",
      de: "Ihr Paket wird von unserem Spediteur bearbeitet.",
      it: "Il tuo pacco è stato preso in carico dal nostro corriere."
    }
  },
  "JUL-88321-FR": {
    brand: "JULES", currentStep: 2, progressWidth: "45%",
    status: { 
      fr: "Vos articles JULES sont préparés avec soin par nos équipes logistiques.", 
      en: "Your JULES items are being carefully prepared by our logistics team.",
      es: "Sus artículos JULES están siendo preparados cuidadosamente por nuestro equipo.",
      de: "Ihre JULES-Artikel werden von unserem Logistikteam sorgfältig vorbereitet.",
      it: "I tuoi articoli JULES sono preparati con cura dal nostro team logistico."
    }
  }
};