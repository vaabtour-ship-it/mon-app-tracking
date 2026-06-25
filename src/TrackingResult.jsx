// src/TrackingResult.jsx
import { useNavigate, useParams } from 'react-router-dom';
import { brandStyles } from './data/mockBrands';         // <-- Nouvel import !
import { trackingData } from './data/mockShipments';     // <-- Nouvel import !
import { globalTranslations } from './data/translations';
import './App.css';

function TrackingResult() {
  const navigate = useNavigate();
  const { suiviId } = useParams();

  const browserLang = (navigator.language || navigator.userLanguage).split('-')[0];
  const currentLang = localStorage.getItem('appLang') || browserLang || 'fr';
  
  const trackingNumber = suiviId || localStorage.getItem('trackingNumber');
  const currentTracking = trackingData[trackingNumber];

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
  const ui = brandStyles[brand] || brandStyles["Atelier Tuffery"];
  
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
      ? { background: ui.primaryColor, color: '#fff', border: 'none', boxShadow: ui.progressShadow } 
      : { background: ui.cardBg, color: '#ccc', border: `2px solid ${ui.progressBg}`, opacity: ui.stepTransform === 'uppercase' ? 0.2 : 1 };
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

          <div className="steps" style={{ marginTop: '25px', listStyle: 'none', padding: '0' }}>
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="step" style={{ listStyleType: 'none' }}>
                <div className="circle" style={getCircleStyle(step)}>
                  {currentTracking.currentStep >= step ? "✓" : step}
                </div>
                <p style={{ 
                  fontWeight: currentTracking.currentStep === step || ui.stepWeight === 'bold' ? 'bold' : '400', 
                  color: currentTracking.currentStep >= step ? ui.primaryColor : '#999', 
                  fontSize: '13px', marginTop: '8px', textTransform: ui.stepTransform 
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