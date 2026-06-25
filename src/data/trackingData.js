// src/data/trackingData.js

export const trackingTranslations = {
  "Atelier Tuffery": {
    fr: {
      back: "← Retour à la recherche",
      title: "Suivi de votre commande",
      labelNum: "Numéro de suivi Atelier :",
      step1: "Commande validée",
      step2: "Contrôle qualité & Emballage",
      step3: "En cours d'acheminement",
      step4: "Livré chez vous",
      notFound: "Numéro de suivi introuvable."
    },
    en: {
      back: "← Back to search",
      title: "Track your order",
      labelNum: "Atelier Tracking Number:",
      step1: "Order Verified",
      step2: "Quality check & Packaging",
      step3: "In transit",
      step4: "Delivered to you",
      notFound: "Tracking number not found."
    },
    es: {
      back: "← Volver a la búsqueda",
      title: "Seguimiento de su pedido",
      labelNum: "Número de seguimiento:",
      step1: "Pedido Verificado",
      step2: "Control de calidad y embalaje",
      step3: "En tránsito",
      step4: "Entregado",
      notFound: "Número de seguimiento no encontrado."
    },
    it: {
      back: "← Torna alla ricerca",
      title: "Tracciamento del tuo ordine",
      labelNum: "Numero di tracciamento Officina :",
      step1: "Ordine confermato",
      step2: "Controllo qualità & Confezionamento",
      step3: "In transito",
      step4: "Consegnato a casa tua",
      notFound: "Numero di tracciamento non trovato."
    },
    de: {
      back: "← Zurück zur Suche",
      title: "Verfolgung Ihrer Bestellung",
      labelNum: "Werkstatt-Trackingnummer :",
      step1: "Bestellung bestätigt",
      step2: "Qualitätskontrolle & Verpackung",
      step3: "Auf dem Weg",
      step4: "Zu Ihnen geliefert",
      notFound: "Sendungsnummer nicht gefunden."
    }
  },
  "SPIDER": {
    fr: {
      back: "← Retour à la recherche",
      title: "Statut de l'expédition",
      labelNum: "Code Traçabilité SPIDER :",
      step1: "Commande Validée",
      step2: "Préparation & Conditionnement",
      step3: "Expédié / En Transit",
      step4: "Livré / Objectif Atteint",
      notFound: "Code de traçabilité introuvable."
    },
    en: {
      back: "← Back to search",
      title: "Shipment Status",
      labelNum: "SPIDER Tracking Code:",
      step1: "Order Verified",
      step2: "Preparation & Packing",
      step3: "Shipped / In Transit",
      step4: "Delivered / Mission Accomplished",
      notFound: "Tracking code not found."
    },
    es: {
      back: "← Volver a la búsqueda",
      title: "Estado del Envío",
      labelNum: "Código de Rastreo SPIDER:",
      step1: "Pedido Verificado",
      step2: "Preparación y Embalaje",
      step3: "En Tránsito",
      step4: "Entregado / Misión Cumplida",
      notFound: "Código no encontrado."
    },
    it: {
      back: "← Torna alla ricerca",
      title: "Stato della spedizione",
      labelNum: "Codice di tracciabilità SPIDER :",
      step1: "Comando Validato",
      step2: "Preparazione e Confezionamento",
      step3: "Spedito/In Transito",
      step4: "Raggiungiti/Obiettivo Raggiunto",
      notFound: "Codice non trovato."
    },
    de: {
      back: "← Zurück zur Suche",
      title: "Versandstatus",
      labelNum: "SPIDER-Tracking-Code :",
      step1: "Validierte Reihenfolge",
      step2: "Vorbereitung & Verpackung",
      step3: "Versendet / Unterwegs",
      step4: "Geliefert / Ziel erreicht",
      notFound: "Code nicht gefunden."
    }
  }
};

export const trackingData = {
  // --- DONNÉES ATELIER TUFFERY ---
  "AT-74291-FR": {
    brand: "Atelier Tuffery",
    currentStep: 3,
    progressWidth: "70%",
    status: {
      fr: "Votre colis a quitté le centre de tri. Il est actuellement pris en charge par notre transporteur.",
      en: "Your package has left the sorting center. It is currently being handled by our carrier.",
      es: "Tu paquete ha salido del centro de clasificación. Ahora lo está gestionando notre mensajero.",
      it: "Il tuo pacco ha lasciato le centre de tri. Attualmente è gestito dal nostro corriere.",
      de: "Ihr Paket hat das Sortierzentrum verlassen. Es wird derzeit von unserem Zusteller bearbeitet."
    }
  },

  // --- DONNÉES SPIDER ---
  "SPD-9942-X": {
    brand: "SPIDER",
    currentStep: 3,
    progressWidth: "75%",
    status: {
      fr: "Votre colis a quitté le centre de tri. Il est actuellement pris en charge par notre transporteur.",
      en: "Your package has left the sorting center. It is currently being handled by our carrier.",
      es: "Tu paquete ha salido del centro de clasificación. Ahora lo está gestionando nuestro mensajero.",
      it: "Il tuo pacco ha lasciato il centre di smistamento. Attualmente è gestito dal notre corriere.",
      de: "Ihr Paket hat das Sortierzentrum verlassen. Es wird derzeit von unserem Zusteller bearbeitet."
    }
  }
};