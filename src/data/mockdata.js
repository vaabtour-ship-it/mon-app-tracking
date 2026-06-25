

export const brandStyles = {
  "Atelier Tuffery": {
    primaryColor: "#1a2a40",
    secondaryColor: "#c8a27c",
    fontFamily: "serif",
    cardBg: "var(--card-bg, #fcfbfa)",
    cardBorderTop: "5px solid #1a2a40",
    textColor: "var(--text-color, #1a1a1a)",
    cardRadius: "12px",
    cardShadow: "0 10px 30px rgba(0,0,0,0.1)",
    numBoxBg: "#f3ece5",
    numBoxColor: "#7c533c",
    numBoxBorder: "3px solid #c8a27c",
    numBoxRadius: "6px",
    numBoxWeight: "600",
    numBoxMargin: "30px",
    progressBg: "#e0e5eb",
    progressHeight: "6px",
    progressShadow: "none",
    statusBg: "#eef2f6",
    statusTextColor: "#1a2a40",
    statusBorder: "none",
    statusIcon: "",
    statusRadius: "8px",
    statusMargin: "30px",
    letterSpacing: "3px",
    titleFontSize: "20px",
    titleMargin: "0 0 10px 0",
    stepWeight: "400",
    stepTransform: "none",
    showDivider: true,
    subtitleColor: "#1a2a40",
    btnBackStyle: {
      background: 'transparent', color: 'var(--text-color, #1a2a40)', border: '1px solid rgba(0,0,0,0.2)',
      padding: '8px 16px', fontSize: '14px', borderRadius: '4px', marginBottom: '15px', cursor: 'pointer'
    }
  },
  "SPIDER": {
    primaryColor: "#ff003c",
    secondaryColor: "#ff003c",
    fontFamily: "Impact, sans-serif",
    cardBg: "#0d0d11",
    cardBorderTop: "4px solid #ff003c",
    textColor: "#ffffff",
    cardRadius: "8px",
    cardShadow: "0 20px 40px rgba(0,0,0,0.6)",
    numBoxBg: "#16161f",
    numBoxColor: "#ffffff",
    numBoxBorder: "4px solid #ff003c",
    numBoxRadius: "4px",
    numBoxWeight: "bold",
    numBoxMargin: "35px",
    progressBg: "#22222b",
    progressHeight: "4px",
    progressShadow: "0 0 10px #ff003c",
    statusBg: "rgba(255, 255, 255, 0.03)",
    statusTextColor: "#ffffff",
    statusBorder: "1px dashed rgba(255, 255, 255, 0.1)",
    statusIcon: "⚡ ",
    statusRadius: "4px",
    statusMargin: "35px",
    letterSpacing: "4px",
    titleFontSize: "26px",
    titleMargin: "0 0 5px 0",
    stepWeight: "bold",
    stepTransform: "uppercase",
    showDivider: false,
    subtitleColor: "#aaa",
    btnBackStyle: {
      background: 'rgba(255, 0, 60, 0.1)', color: "#ff003c", border: '1px solid #ff003c',
      padding: '8px 16px', fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase',
      letterSpacing: '1px', borderRadius: '4px', marginBottom: '15px', cursor: 'pointer'
    }
  },
  "JULES": {
    primaryColor: "#1e4620",       
    secondaryColor: "#0f233c",     
    fontFamily: "'Inter', sans-serif", 
    cardBg: "#ffffff",             
    cardBorderTop: "5px solid #1e4620", 
    textColor: "#1f2937",          
    cardRadius: "12px",
    cardShadow: "0 10px 30px rgba(0,0,0,0.1)",
    numBoxBg: "#f3f4f6",           
    numBoxColor: "#1e4620",        
    numBoxBorder: "3px solid #0f233c", 
    numBoxRadius: "6px",
    numBoxWeight: "600",
    numBoxMargin: "30px",
    progressBg: "#e5e7eb",         
    progressHeight: "5px",
    progressShadow: "none",
    statusBg: "#1e4620",           
    statusTextColor: "#ffffff",    
    statusBorder: "none",
    statusIcon: "🌿 ",
    statusRadius: "8px",
    statusMargin: "30px",
    letterSpacing: "3px",
    titleFontSize: "20px",
    titleMargin: "0 0 10px 0",
    stepWeight: "400",
    stepTransform: "none",
    showDivider: true,
    subtitleColor: "#1a2a40",
    btnBackStyle: {
      background: 'transparent', color: 'var(--text-color, #1a2a40)', border: '1px solid rgba(0,0,0,0.2)',
      padding: '8px 16px', fontSize: '14px', borderRadius: '4px', marginBottom: '15px', cursor: 'pointer'
    }
  }
};


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