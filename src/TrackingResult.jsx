// src/TrackingResult.jsx
import { useNavigate, useParams } from 'react-router-dom';
import { brandStyles } from './data/mockBrands';         
import { mockShipmentData } from './data/mockShipments';
import { globalTranslations } from './data/translations';
import './App.css';

function TrackingResult() {
  const navigate = useNavigate();
  const { suiviId } = useParams();

  const browserLang = (navigator.language || navigator.userLanguage).split('-')[0];
  const currentLang = localStorage.getItem('appLang') || browserLang || 'fr';
  
  const trackingNumber = suiviId || localStorage.getItem('trackingNumber');
  
  // NOUVELLE LOGIQUE : Recherche du numéro dans le tableau mockShipmentData
  let currentTracking = null;

  // On trouve la commande qui contient le bon numéro de suivi
  const matchedOrder = mockShipmentData.find(order => 
    order.shipments?.some(shipment => shipment.tracking?.trackingNumber === trackingNumber)
  );

  if (matchedOrder) {
    // Si on trouve une correspondance, on mappe dynamiquement les données du JSON vers ton UI
    currentTracking = {
      brand: matchedOrder.brand?.name || "La Fiancée",
      currentStep: 4, 
      progressWidth: "100%",
      status: {
        fr: `Votre colis Chronopost a été livré avec succès à ${matchedOrder.invoicingAddress?.city || 'votre destination'}.`,
        en: `Your Chronopost package was successfully delivered to ${matchedOrder.invoicingAddress?.city || 'your destination'}.`,
        es: `Su paquete Chronopost fue entregado con éxito en ${matchedOrder.invoicingAddress?.city || 'su destino'}.`,
        de: `Ihr Chronopost-Paket wurde erfolgreich in ${matchedOrder.invoicingAddress?.city || 'Ihrem Zielort'} zugestellt.`,
        it: `Il tuo pacco Chronopost è stato consegnato con successo a ${matchedOrder.invoicingAddress?.city || 'tua destinazione'}.`
      }
    };
  }

  if (!currentTracking) {
    const fallbackT = globalTranslations[currentLang] || globalTranslations.fr || globalTranslations.en;
    return (
      <div className="app-container" style={{ color: '#fff', textAlign: 'center', marginTop: '50px' }}>
        <p>{fallbackT.notFound || "Numéro introuvable"}</p>
        <button className="btn-suivre" onClick={() => navigate('/')}>
          {fallbackT.back}
        </button>
      </div>
    );
  }

  const brand = currentTracking.brand;
  // On utilise le style JULES par défaut pour "La Fiancée" si elle n'a pas son propre style personnalisé
  const ui = brandStyles[brand] || brandStyles["JULES"] || brandStyles["Atelier Tuffery"];
  
  const t = globalTranslations[currentLang] || globalTranslations.en || globalTranslations.fr;
  const currentStatus = currentTracking.status[currentLang] || currentTracking.status.en || currentTracking.status.fr;

  const styles = {
    btnBack: ui.btnBackStyle,
    card: {
      background: ui.cardBg, borderTop: ui.cardBorderTop, borderRadius: ui.cardRadius,
      padding: '35px', color: ui.textColor, boxShadow: ui.cardShadow
    },
    titleBrand: {
      fontFamily: ui.fontFamily, letterSpacing: ui.letterSpacing, textTransform: 'uppercase',
      fontSize: ui.titleFontSize, margin: ui.titleMargin, color: ui.primaryColor
    },
    trackingNumBox: {
      background: ui.numBoxBg, color: ui.numBoxColor, padding: '10px', 
      borderRadius: ui.numBoxRadius, fontWeight: ui.numBoxWeight, fontSize: '14px', 
      letterSpacing: '1px', borderLeft: ui.numBoxBorder, marginBottom: ui.numBoxMargin, textAlign: 'left'
    },
    progressBg: { background: ui.progressBg, height: ui.progressHeight, borderRadius: '3px' },
    progressBar: { 
      background: ui.primaryColor, width: currentTracking.progressWidth, borderRadius: '3px', 
      boxShadow: ui.progressShadow
    },
    statusBox: {
      background: ui.statusBg, color: ui.statusTextColor, border: ui.statusBorder,
      borderRadius: ui.statusRadius, padding: '16px', fontSize: '14px', lineHeight: '1.5', marginTop: ui.statusMargin, textAlign: 'left'
    }
  };

  const getCircleStyle = (stepNumber) => {
    const isActive = currentTracking.currentStep >= stepNumber;
    return isActive 
      ? { background: ui.primaryColor, color: '#fff', border: 'none', boxShadow: ui.progressShadow, margin: '0 auto' } 
      : { background: ui.cardBg, color: '#ccc', border: `2px solid ${ui.progressBg}`, opacity: ui.stepTransform === 'uppercase' ? 0.2 : 1, margin: '0 auto' };
  };

  return (
    <div className="app-container">
      <section id="center">
        
        <div style={{ width: '100%', maxWidth: '650px', textAlign: 'left' }}>
          <button style={styles.btnBack} onClick={() => navigate('/')}>
            {t.back}
          </button>
        </div>

        <div className="tracking-card" style={styles.card}>
          
          <div style={{ marginBottom: ui.statusMargin, textAlign: 'center' }}>
            <h2 style={styles.titleBrand}>{brand}</h2>
            {ui.showDivider && <div style={{ width: '40px', height: '1px', background: ui.secondaryColor, margin: '0 auto 15px' }}></div>}
            <p style={{ color: ui.subtitleColor, fontSize: '14px', margin: '0' }}>{t.title}</p>
          </div>

          <div className="tracking-number" style={styles.trackingNumBox}>
            {t.labelNum}{' '}
            <span style={{ color: ui.stepTransform === 'uppercase' ? ui.primaryColor : 'inherit', fontFamily: 'monospace', fontSize: '15px' }}>
              {trackingNumber}
            </span>
          </div>

          <div className="progress" style={styles.progressBg}>
            <div className="progress-bar" style={styles.progressBar}></div>
          </div>

          <div className="steps" style={{ 
            marginTop: '25px', 
            listStyle: 'none', 
            padding: '0', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start' 
          }}>
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="step" style={{ 
                listStyleType: 'none', 
                flex: 1, 
                textAlign: 'center', 
                maxWidth: '23%', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center' 
              }}>
                <div className="circle" style={getCircleStyle(step)}>
                  {currentTracking.currentStep >= step ? "✓" : step}
                </div>
                <p style={{ 
                  fontWeight: currentTracking.currentStep === step || ui.stepWeight === 'bold' ? 'bold' : '400', 
                  color: currentTracking.currentStep >= step ? ui.primaryColor : '#999', 
                  fontSize: '12px', 
                  marginTop: '8px', 
                  textTransform: ui.stepTransform,
                  wordBreak: 'break-word',
                  lineHeight: '1.3',
                  marginRight: '4px',
                  marginLeft: '4px'
                }}>
                  {t[`step${step}`]}
                </p>
              </div>
            ))}
          </div>

          <div className="status" style={styles.statusBox}>
            {ui.statusIcon}{currentStatus}
          </div>

        </div>
      </section>
    </div>
  );
}

export default TrackingResult;